import React from 'react';
import SearchForm from '../components/SearchForm/SearchForm';
import '../components/SearchForm/SearchForm.css';
import { fireEvent } from '@testing-library/react';

export default {
  title: 'Components/SearchForm',
  component: SearchForm,
};

const Template = (args) => <SearchForm {...args} />;

export const InitialQuery = Template.bind({});
InitialQuery.args = {
  initialSearchQuery: 'initial query',
  onSearch: (query) => console.log(`Searching for: ${query}`),
};

export const SearchButtonClick = Template.bind({});
SearchButtonClick.args = {
  initialSearchQuery: 'test',
  onSearch: (query) => console.log(`Searching for: ${query}`),
};
SearchButtonClick.play = async ({ canvasElement }) => {
  const searchButton = canvasElement.querySelector('button');
  await searchButton.click();
};

export const SearchEnterKeyPress = Template.bind({});
SearchEnterKeyPress.args = {
  initialSearchQuery: 'enter test',
  onSearch: (query) => console.log(`Searching for: ${query}`),
};
SearchEnterKeyPress.play = async ({ canvasElement }) => {
  const input = canvasElement.querySelector('input');
  input.focus();
  input.value = 'enter test';
  fireEvent.keyPress(input, { key: 'Enter', code: 'Enter', charCode: 13 });
};