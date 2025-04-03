import React from 'react';
import './MovieForm.css';

const MovieForm = ({ initialMovie, genres: propGenres }) => {
    const genres = propGenres || ['Documentary', 'Comedy', 'Crime', 'Horror'];

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.target));
        console.log(formData);
    };

    const handleReset = (event) => {
        event.preventDefault();
        const form = event.target.closest('form');
        if (form) {
            form.reset();
        }
    };

    return (
        <div className="movie-form bootstrap-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="form-group col-7">
                        <label htmlFor="title">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            defaultValue={initialMovie?.title || ''}
                        />
                    </div>
                    <div className="form-group col-5">
                        <label htmlFor="release_date">Release Day</label>
                        <input
                            type="text"
                            className="form-control"
                            id="release_date"
                            name="release_date"
                            defaultValue={initialMovie?.release_date || ''}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-7">
                        <label htmlFor="poster_path">Poster URL</label>
                        <input
                            type="url"
                            className="form-control"
                            id="poster_path"
                            name="poster_path"
                            defaultValue={initialMovie?.poster_path || ''}
                        />
                    </div>
                    <div className="form-group col-5">
                        <label htmlFor="vote_average">Rating</label>
                        <input
                            type="number"
                            className="form-control"
                            id="vote_average"
                            name="vote_average"
                            min="1"
                            max="10"
                            defaultValue={initialMovie?.vote_average || ''}
                        />
                    </div>
                </div>
                <div className="row">
                    <div className="form-group col-7">
                        <label htmlFor="genres">Genres</label>
                        <select
                            // multiple
                            className="form-control"
                            id="genres"
                            name="genres"
                            // defaultValue={initialMovie?.genres || []}
                            defaultValue={initialMovie?.genres || undefined}
                        >
                            {genres.map((genre) => (
                                <option key={genre} value={genre}>
                                    {genre}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group col-5">
                        <label htmlFor="runtime">Runtime</label>
                        <input
                            type="text"
                            className="form-control"
                            id="runtime"
                            name="runtime"
                            defaultValue={initialMovie?.runtime || ''}
                        />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="overview">Overview</label>
                    <textarea
                        className="form-control"
                        id="overview"
                        name="overview"
                        rows="3"
                        defaultValue={initialMovie?.overview || ''}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-end">
                    <button type="reset" className="btn btn-secondary mr-2" onClick={handleReset}>
                        Reset
                    </button>
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MovieForm;