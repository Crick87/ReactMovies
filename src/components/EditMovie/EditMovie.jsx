import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { updateMovie } from '../../services/movieService';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

function EditMovie({movie, onUpdate}) {

    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleOnSubmit = async (movie) => {
        try {
            console.log('edit movie', movie);
            const updatedMovie = await updateMovie(movie);
            if (updatedMovie && updatedMovie.id) {
                onUpdate(updatedMovie);
                navigate(`/${updatedMovie.id}`);
                window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
            }
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    useEffect(() => {
        setShowDialog(location.pathname.includes('/edit') && !!movie);
    }, [location, movie]);

    return (
        <>
            {showDialog && (
                <Dialog
                    title="Edit movie"
                    onClose={() => navigate('/')}
                >
                    <MovieForm initialMovie={movie} onSubmit={handleOnSubmit} />
                </Dialog>
            )}
        </>
    );
}

export default EditMovie;