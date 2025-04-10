import React from 'react';
import MovieTile from '../components/MovieTile/MovieTile';

function MovieList({ movies, setSelectedMovie, handleEditMovie, handleDeleteMovie }) {
    return (
        <div className='movie-list container'>
            <div className="row justify-content-center">
                {movies.map((movie) => (
                    <div className="col-4" key={movie.id}>
                        <MovieTile
                            movie={movie}
                            onClick={setSelectedMovie}
                            onEdit={handleEditMovie}
                            onDelete={handleDeleteMovie}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MovieList;