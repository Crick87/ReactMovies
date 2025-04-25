import React, { useState, useRef, useEffect } from 'react';
import { Outlet, useSearchParams, useParams, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';

import { fetchMovies, fetchMovieById } from '../services/movieService';

import FilterBar from '../layout/FilterBar.jsx';
import MovieList from '../layout/MovieList.jsx';
import EditMovie from '../components/EditMovie/EditMovie.jsx';


const DEFAULT_SORT_CRITERIA = 'title';
const DEFAULT_ACTIVE_GENRE = 'All';
const DEFAULT_SEARCH_QUERY = '';

function MovieListPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

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
  const [selectedMovieData, setSelectedMovieData] = useState(null);
  const [genreList] = useState(['All', 'Documentary', 'Comedy', 'Horror', 'Crime']);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadingDetails, setIsLoadingDetails] = useState(false);
  const [errorDetails, setErrorDetails] = useState(null);

  const abortControllerRef = useRef(null);
  const detailsAbortControllerRef = useRef(null);

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

  useEffect(() => {
    if (movieId) {
      if (detailsAbortControllerRef.current) {
        detailsAbortControllerRef.current.abort();
      }
      detailsAbortControllerRef.current = new AbortController();
      const signal = detailsAbortControllerRef.current.signal;

      const getMovieDetails = async () => {
        setIsLoadingDetails(true);
        setErrorDetails(null);
        setSelectedMovieData(null);
        try {
          const fetchedMovie = await fetchMovieById(movieId, signal);
          if (!signal.aborted) {
            setSelectedMovieData(fetchedMovie);
          }
        } catch (err) {
          if (err.name !== 'CanceledError' && !axios.isCancel(err) && !signal.aborted) {
            console.error(`Failed to fetch movie ${movieId}:`, err);
            setErrorDetails('Error al cargar los detalles de la película.');
          }
        } finally {
          if (!signal.aborted) {
            setIsLoadingDetails(false);

            if (!location.pathname.includes('edit')) {
              window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
            }
          }
        }
      };
      getMovieDetails();

      return () => {
        if (detailsAbortControllerRef.current) {
            detailsAbortControllerRef.current.abort();
        }
      }
    } else {
      setSelectedMovieData(null);
      setErrorDetails(null);
    }
  }, [movieId]);

  const handleCloseDetails = () => {
    navigate('/');
  }

  const handleSelectMovie = (movie) => {
    if (movie && movie.id) {
      navigate(`/${movie.id}`);
    }
  };

  const handleEditMovie = (movie) => {
    navigate(`/${movie.id}/edit`);
  };

  const handleDeleteMovie = (movie) => {
    console.log('Delete movie:', movie.title);
  };

  const outletContext = {
    searchQuery,
    setSearchQuery,

    movie: selectedMovieData,
    onCloseDetails: handleCloseDetails,
    isLoadingDetails,
    errorDetails,
  };

  return (
    <>
      <EditMovie movie={selectedMovieData} />
      <Outlet context={outletContext} />
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
          setSelectedMovie={handleSelectMovie}
          handleEditMovie={handleEditMovie}
          handleDeleteMovie={handleDeleteMovie} />
      )}
    </>
  );
}

export default MovieListPage;