import React from 'react';
import MovieTile from '../components/MovieTile/MovieTile';

import imageMovie1 from '../assets/movie-1.png';

const movie = {
    imageUrl: imageMovie1,
    title: 'Bohemian Rhapsody',
    year: 2003,
    genres: ['Drama', 'Biography', 'Music'],
};

const handleMovieClick = (movie) => {
    console.log('Movie clicked:', movie.title);
};

const handleEditMovie = (movie) => {
    console.log('Edit movie:', movie.title);
};

const handleDeleteMovie = (movie) => {
    console.log('Delete movie:', movie.title);
};

function MovieList() {
    return (
        <div className='movie-list container'>
            <div className="row justify-content-center">
                <div className="col-4">
                    <MovieTile
                        movie={movie}
                        onClick={handleMovieClick}
                        onEdit={handleEditMovie}
                        onDelete={handleDeleteMovie}
                    />
                </div>
            </div>
        </div>
    );
}

export default MovieList;