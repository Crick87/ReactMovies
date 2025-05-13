import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './MovieForm.css';

const validationSchema = Yup.object().shape({
    title: Yup.string()
        .required('⚠ Title is required'),
    release_date: Yup.date().nullable(),
    poster_path: Yup.string()
        .url('⚠ Must be a valid URL')
        .required('⚠ Poster URL is required'),
    vote_average: Yup.number()
        .min(0, '⚠ Rating must be 0 or higher')
        .max(10, '⚠ Rating must be 10 or lower')
        .nullable(),
    genres: Yup.string()
        .required('⚠ Genre is required'),
    runtime: Yup.number()
        .typeError('⚠ Runtime must be a number')
        .min(0, '⚠ Runtime must be 0 or greater')
        .required('⚠ Runtime is required'),
    overview: Yup.string()
        .required('⚠ Overview is required'),
});


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
            genres: values.genres ? [values.genres] : [],
            runtime: values.runtime !== '' ? Number(values.runtime) : null,
            vote_average: values.vote_average !== '' ? Number(values.vote_average) : null,
            release_date: values.release_date || null,
        };
        onSubmit(processedValues);
        setSubmitting(false);
    };

    return (
        <div className="movie-form bootstrap-wrapper">
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
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
                                <ErrorMessage name="title" component="div" className="text-danger error-message" />
                            </div>
                            <div className="form-group col-5">
                                <label htmlFor="release_date">Release Day</label>
                                <Field
                                    type="date"
                                    className="form-control"
                                    id="release_date"
                                    name="release_date"
                                />
                                <ErrorMessage name="release_date" component="div" className="text-danger error-message" />
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
                                <ErrorMessage name="poster_path" component="div" className="text-danger error-message" />
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
                                 <ErrorMessage name="vote_average" component="div" className="text-danger error-message" />
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
                                <ErrorMessage name="genres" component="div" className="text-danger error-message" />
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
                                <ErrorMessage name="runtime" component="div" className="text-danger error-message" />
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
                            <ErrorMessage name="overview" component="div" className="text-danger error-message" />
                        </div>
                        <div className="d-flex justify-content-end mt-2">
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