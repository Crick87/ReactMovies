import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { addMovie } from '../../services/movieService';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

function AddMovie() {

    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddMovie = () => {
        navigate(`/new`);
    };

    const handleOnSubmit = async (movie) => {
        try {
            const newlyAddedMovie = await addMovie(movie);
            if (newlyAddedMovie && newlyAddedMovie.id) {
                navigate(`/${newlyAddedMovie.id}`);
            }
        } catch (error) {
            console.error('Error adding movie:', error);
        }
    };

    useEffect(() => {
        setShowDialog(location.pathname === '/new');
    }, [location]);

    return (
        <div>
            <button onClick={handleAddMovie}>+ ADD MOVIE</button>
            {showDialog && (
                <Dialog
                    title="Add movie"
                    onClose={() => navigate('/')}
                >
                    <MovieForm onSubmit={handleOnSubmit} />
                </Dialog>
            )}
        </div>
    );
}

export default AddMovie;