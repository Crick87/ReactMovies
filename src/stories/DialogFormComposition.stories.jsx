import React from 'react';
import Dialog from '../components/Dialog/Dialog';
import MovieForm from '../components/MovieForm/MovieForm';

export default {
    title: 'Compositions/Dialog-Form',
    component: Dialog,
};

const Template = (args) => <Dialog {...args} />;

const initialMovieData = {
    id: '3',
    title: 'La La Land',
    tagline: "Here's to the fools who dream.",
    vote_average: 7.9,
    vote_count: 6782,
    release_date: '2016-12-29',
    poster_path: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_FMjpg_UX1000_.jpg',
    overview:
        'Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.',
    budget: 30000000,
    revenue: 445435700,
    runtime: 128,
    // genres: ['Comedy', 'Drama', 'Romance'],
    genres: 'Comedy', // Temporal
};

export const AddMovie = Template.bind({});
AddMovie.args = {
    title: 'Add Movie',
    children: <MovieForm />,
};

export const EditMovie = Template.bind({});
EditMovie.args = {
    title: 'Edit Movie',
    children: <MovieForm initialMovie={initialMovieData} />,
};

export const DeleteMovie = Template.bind({});
DeleteMovie.args = {
    title: 'Delete Movie',
    children: (
        <div style={{ margin: '10px' }}>
            Are you sure you want to delete this movie?
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                <button>Confirm</button>
            </div>
        </div>
    ),
};