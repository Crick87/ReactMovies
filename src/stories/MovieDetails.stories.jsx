import React from 'react';
import MovieDetails from '../components/MovieDeails/MovieDetails';
import '../components/MovieDeails/MovieDetails.css';
import './grid.css';

export default {
  title: 'Components/MovieDetails',
  component: MovieDetails,
};

const Template = (args) => <div class="bootstrap-wrapper"><MovieDetails {...args} /></div>;

import Image1 from './assets/movie-1.png';
const movieData = {
  imageUrl: Image1,
  title: 'Matrix',
  year: 2010,
  genres: ['Action', 'Sci-Fi', 'Thriller'],
  rating: 8.8,
  duration: '2h 28min',
  description:
    'Lorem Ipsum...',
};

export const Default = Template.bind({});
Default.args = {
  movie: movieData,
};

export const NoMovieSelected = Template.bind({});
NoMovieSelected.args = {
  movie: null,
};