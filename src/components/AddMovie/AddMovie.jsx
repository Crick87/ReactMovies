import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

function handleOnSubmit(movie) {
    console.log('Submit:', movie);
}

function AddMovie() {

    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleAddMovie = () => {
        navigate(`/new`);
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