import React from 'react';
import MovieTile from '../components/MovieTile/MovieTile';

const movie = {
    imageUrl: 'https://s3-alpha-sig.figma.com/img/aa4f/8cf6/f7fefb9582bc23c7847baf1f5f863fb0?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CM6iHG57ef52JE9he1bG6unQ2gp2g6cPK6lbiCqJ9pkWqU4h6v2~oWDfc6VpglyP67Db-X2veFnuHWnhcC0zMA3RjB-AnTHNYms8yOWQj8avZhw4uARhfSNXbOCIyY2CcJSmWqCtfWqphb8kcG2UntMuGjMsM~pIKuBpSKYrQNyR4voCJS1JYuAMZrM49WTYBApr-aOgMFlTETZr1IckrsMN5VS1plaYLy4kxnrrC98M02a6GDlRKZVrn995a3qc5pj6CV1L3kSf5PB7T4I7OyAXay9DPcLswD~3xSul0nvgLid7rZepXtb8eVqaCBCKJsOv1PNOwpUuja0dpdOS5g__',
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