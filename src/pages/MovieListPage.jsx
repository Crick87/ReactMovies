import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';

import MainHeader from '../layout/MainHeader.jsx';
import FilterBar from '../layout/FilterBar.jsx';
import MovieList from '../layout/MovieList.jsx';
import MovieDetails from '../components/MovieDeails/MovieDetails.jsx';

import { fetchMovies } from '../services/movieService';

const DEFAULT_SORT_CRITERIA = 'title';
const DEFAULT_ACTIVE_GENRE = 'All';
const DEFAULT_SEARCH_QUERY = '';

const handleEditMovie = (movie) => {
  console.log('Edit movie:', movie.title);
};

const handleDeleteMovie = (movie) => {
  console.log('Delete movie:', movie.title);
};

function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [searchQuery, setSearchQuery] = useState(
    searchParams.get('query') || DEFAULT_SEARCH_QUERY
  );
  const [sortCriteria, setSortCriteria] = useState(
    searchParams.get('sortBy') || DEFAULT_SORT_CRITERIA
  );
  const [activeGenre, setActiveGenre] = useState(
    searchParams.get('genre') || DEFAULT_ACTIVE_GENRE
  );

  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [genreList] = useState(['All', 'Documentary', 'Comedy', 'Horror', 'Crime']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const params = {};
    if (searchQuery !== DEFAULT_SEARCH_QUERY) {
      params.query = searchQuery;
    }
    if (sortCriteria !== DEFAULT_SORT_CRITERIA) {
      params.sortBy = sortCriteria;
    }
    if (activeGenre !== DEFAULT_ACTIVE_GENRE) {
      params.genre = activeGenre;
    }

    setSearchParams(params, { replace: true });

  }, [searchQuery, sortCriteria, activeGenre, setSearchParams]);

  useEffect(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    abortControllerRef.current = new AbortController();
    const signal = abortControllerRef.current.signal;

    const getMovies = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const fetchedMovies = await fetchMovies({
          searchQuery,
          sortCriteria,
          activeGenre,
          signal,
        });
        if (!signal.aborted) {
          setMovies(fetchedMovies);
        }
      } catch (err) {
        if (err.name !== 'CanceledError' && !axios.isCancel(err) && !signal.aborted) {
            console.error("Failed to fetch movies:", err);
            setError('Error al cargar las películas. Intenta de nuevo.');
        }
      } finally {
          if (!signal.aborted) {
              setIsLoading(false);
          }
      }
    };

    getMovies();

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, [searchQuery, sortCriteria, activeGenre]);

  const handleCloseDetails = () => {
    setSelectedMovie(null);
  }

  return (
    <>
      <MainHeader
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery} />
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onCloseDetails={handleCloseDetails} />
      )}
      <FilterBar
        sortCriteria={sortCriteria}
        setSortCriteria={setSortCriteria}
        selectedGenre={activeGenre}
        setActiveGenre={setActiveGenre}
        genres={genreList} />
      <div className='movies-messages-container'>
        {isLoading && <p>Loading movies...</p>}
        {error && <p className='movies-error-message'>{error}</p>}
        {!isLoading && !error && movies.length === 0 && <p>No movies found.</p>}
      </div>
      {!isLoading && !error && (
        <MovieList
          movies={movies}
          setSelectedMovie={setSelectedMovie}
          handleEditMovie={handleEditMovie}
          handleDeleteMovie={handleDeleteMovie} />
      )}
    </>
  );
}

export default MovieListPage;