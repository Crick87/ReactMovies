import React from 'react';
import MovieTile from '../components/MovieTile/MovieTile';
import '../components/MovieTile/MovieTile.css';
import './MovieTile.css';
import { fireEvent, waitFor } from '@testing-library/react';

export default {
  title: 'Components/MovieTile',
  component: MovieTile,
};

const Template = (args) => <MovieTile {...args} />;

import Image1 from './assets/movie-1.png';
const movieData = {
  title: 'Example Movie',
  year: 2023,
  genres: ['Action', 'Comedy'],
  imageUrl: Image1,
};

export const Default = Template.bind({});
Default.args = {
  movie: movieData,
  onClick: (movie) => console.log('Movie clicked:', movie),
  onEdit: (movie) => console.log('Edit movie:', movie),
  onDelete: (movie) => console.log('Delete movie:', movie),
};

export const MenuOpen = Template.bind({});
MenuOpen.args = {
  movie: movieData,
  onClick: (movie) => console.log('Movie clicked:', movie),
  onEdit: (movie) => console.log('Edit movie:', movie),
  onDelete: (movie) => console.log('Delete movie:', movie),
};
MenuOpen.play = async ({ canvasElement }) => {
  const menuButton = canvasElement.querySelector('.menu-button');
  fireEvent.click(menuButton);
  await waitFor(() => canvasElement.querySelector('.menu'));
};

export const EditClick = Template.bind({});
EditClick.args = {
  movie: movieData,
  onClick: (movie) => console.log('Movie clicked:', movie),
  onEdit: (movie) => console.log('Edit movie:', movie),
  onDelete: (movie) => console.log('Delete movie:', movie),
};
EditClick.play = async ({ canvasElement }) => {
  const menuButton = canvasElement.querySelector('.menu-button');
  fireEvent.click(menuButton);
  await waitFor(() => canvasElement.querySelector('.menu'));
  const editButton = canvasElement.querySelector('.menu-item:first-child');
  fireEvent.click(editButton);
};

export const DeleteClick = Template.bind({});
DeleteClick.args = {
  movie: movieData,
  onClick: (movie) => console.log('Movie clicked:', movie),
  onEdit: (movie) => console.log('Edit movie:', movie),
  onDelete: (movie) => console.log('Delete movie:', movie),
};
DeleteClick.play = async ({ canvasElement }) => {
  const menuButton = canvasElement.querySelector('.menu-button');
  fireEvent.click(menuButton);
  await waitFor(() => canvasElement.querySelector('.menu'));
  const deleteButton = canvasElement.querySelector('.menu-item:last-child');
  fireEvent.click(deleteButton);
};

export const TileClick = Template.bind({});
TileClick.args = {
  movie: movieData,
  onClick: (movie) => console.log('Movie clicked:', movie),
  onEdit: (movie) => console.log('Edit movie:', movie),
  onDelete: (movie) => console.log('Delete movie:', movie),
};
TileClick.play = async ({ canvasElement }) => {
  const tile = canvasElement.querySelector('.movie-tile');
  fireEvent.click(tile);
};