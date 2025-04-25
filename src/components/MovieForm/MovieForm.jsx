import React from 'react';
import { Formik, Form, Field } from 'formik';
import './MovieForm.css';

const MovieForm = ({ initialMovie, onSubmit, genres: propGenres }) => {
    const genres = propGenres || ['Documentary', 'Comedy', 'Crime', 'Horror'];

    const initialValues = {
        title: initialMovie?.title || '',
        release_date: initialMovie?.release_date || '',
        poster_path: initialMovie?.poster_path || '',
        vote_average: initialMovie?.vote_average || '',
        genres: initialMovie?.genres?.[0] || '',
        runtime: initialMovie?.runtime || '',
        overview: initialMovie?.overview || '',
    };

    const handleFormSubmit = (values, { setSubmitting }) => {
        const processedValues = {
            ...initialMovie,
            ...values,
            genres: [values.genres]
        };
        onSubmit(processedValues);
        setSubmitting(false);
    };

    return (
        <div className="movie-form bootstrap-wrapper">
            <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}
                enableReinitialize
            >
                {() => (
                    <Form data-testid="movie-form">
                        <div className="row">
                            <div className="form-group col-7">
                                <label htmlFor="title">Title</label>
                                <Field
                                    type="text"
                                    className="form-control"
                                    id="title"
                                    name="title"
                                />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="release_date">Release Day</label>
                                <Field
                                    type="date"
                                    className="form-control"
                                    id="release_date"
                                    name="release_date"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-7">
                                <label htmlFor="poster_path">Poster URL</label>
                                <Field
                                    type="url"
                                    className="form-control"
                                    id="poster_path"
                                    name="poster_path"
                                />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="vote_average">Rating</label>
                                <Field
                                    type="number"
                                    step="0.1"
                                    className="form-control"
                                    id="vote_average"
                                    name="vote_average"
                                    min="0"
                                    max="10"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="form-group col-7">
                                <label htmlFor="genres">Genres</label>
                                <Field
                                    as="select"
                                    className="form-control"
                                    id="genres"
                                    name="genres"
                                >
                                    <option value="" disabled>Select a genre</option>
                                    {genres.map((genre) => (
                                        <option key={genre} value={genre}>
                                            {genre}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="runtime">Runtime</label>
                                <Field
                                    type="number"
                                    className="form-control"
                                    id="runtime"
                                    name="runtime"
                                    min="0"
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="overview">Overview</label>
                            <Field
                                as="textarea"
                                className="form-control"
                                id="overview"
                                name="overview"
                                rows="3"
                            />
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="reset" className="btn btn-secondary mr-2">
                                Reset
                            </button>
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default MovieForm;