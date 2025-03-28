import React from 'react';
import SortControl from '../components/SortControl/SortControl';
import '../components/SortControl/SortControl.css';
import { fireEvent } from '@testing-library/react';

export default {
  title: 'Components/SortControl',
  component: SortControl,
};

const Template = (args) => <SortControl {...args} />;

export const TitleSelected = Template.bind({});
TitleSelected.args = {
  selectedOption: 'Title',
  onSortChange: (option) => console.log(`Sort option changed to: ${option}`),
};

export const ChangeToTitle = Template.bind({});
ChangeToTitle.args = {
  selectedOption: 'Release Date',
  onSortChange: (option) => console.log(`Sort option changed to: ${option}`),
};
ChangeToTitle.play = async ({ canvasElement }) => {
  const select = canvasElement.querySelector('select');
  fireEvent.change(select, { target: { value: 'Title' } });
  await new Promise((resolve) => setTimeout(resolve, 1000));
};

export const ChangeToReleaseDate = Template.bind({});
ChangeToReleaseDate.args = {
  selectedOption: 'Title',
  onSortChange: (option) => console.log(`Sort option changed to: ${option}`),
};
ChangeToReleaseDate.play = async ({ canvasElement }) => {
  const select = canvasElement.querySelector('select');
  fireEvent.change(select, { target: { value: 'Release Date' } });
};