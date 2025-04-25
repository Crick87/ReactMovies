import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Dialog from '../Dialog/Dialog';
import MovieForm from '../MovieForm/MovieForm';

function handleOnSubmit(movie) {
    console.log('Submit:', movie);
}

function EditMovie({movie}) {

    const [showDialog, setShowDialog] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

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