import React from 'react';
import GenreSelect from '../components/GenreSelect/GenreSelect';
import '../components/GenreSelect/GenreSelect.css';

export default {
  title: 'Components/GenreSelect',
  component: GenreSelect,
};

const Template = (args) => <GenreSelect {...args} />;

export const SelectedComedy = Template.bind({});
SelectedComedy.args = {
  genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
  selectedGenre: 'Comedy',
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};

export const SelectedSciFi = Template.bind({});
SelectedSciFi.args = {
  genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
  selectedGenre: 'Sci-Fi',
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};

export const ClickAction = Template.bind({});
ClickAction.args = {
  genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
  selectedGenre: null,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};
ClickAction.play = async ({ canvasElement }) => {
  const actionButton = canvasElement.querySelector('button:first-child');
  await actionButton.click();
};

export const ClickDrama = Template.bind({});
ClickDrama.args = {
  genres: ['Action', 'Comedy', 'Drama', 'Sci-Fi'],
  selectedGenre: null,
  onSelect: (genre) => console.log(`Selected genre: ${genre}`),
};
ClickDrama.play = async ({ canvasElement }) => {
  const dramaButton = canvasElement.querySelector('button:nth-child(3)');
  await dramaButton.click();
};
