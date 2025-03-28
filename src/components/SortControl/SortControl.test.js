import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SortControl from './SortControl';

describe('SortControl', () => {
  it('should render the label "Sort by"', () => {
    render(<SortControl selectedOption="Release Date" onSortChange={() => {}} />);
    expect(screen.getByText('Sort by')).toBeInTheDocument();
  });

  it('should render the select with the provided selected option', () => {
    render(<SortControl selectedOption="Title" onSortChange={() => {}} />);
    expect(screen.getByRole('combobox')).toHaveValue('Title');
  });

  it('should call the onSortChange callback with the new value when the selection changes', () => {
    const onSortChange = jest.fn();
    render(<SortControl selectedOption="Release Date" onSortChange={onSortChange} />);

    fireEvent.change(screen.getByRole('combobox'), { target: { value: 'Title' } });

    expect(onSortChange).toHaveBeenCalledTimes(1);
    expect(onSortChange).toHaveBeenCalledWith('Title');
  });

  it('should render the options "Release Date" and "Title"', () => {
    render(<SortControl selectedOption="Release Date" onSortChange={() => {}} />);
    expect(screen.getByRole('option', { name: 'Release Date' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Title' })).toBeInTheDocument();
  });
});