import React from 'react';
import MovieTile from '../components/MovieTile/MovieTile';

// const handleMovieClick = (movie) => {
//     console.log('Movie clicked:', movie.title);
// };

const handleEditMovie = (movie) => {
    console.log('Edit movie:', movie.title);
};

const handleDeleteMovie = (movie) => {
    console.log('Delete movie:', movie.title);
};

function MovieList({ movies, setSelectedMovie }) {
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