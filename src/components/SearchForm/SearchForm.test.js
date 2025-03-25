import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import SearchForm from './SearchForm';

describe('SearchForm Component', () => {

  it('should display an input with the value equal to the initial value passed in props', () => {
    render(<SearchForm initialSearchQuery="Batman" />);
    expect(screen.getByRole('textbox')).toHaveValue('Batman');
  });

  it('should call the onSearch prop with the correct value after typing in the input and clicking the "Search" button', () => {
    const onSearchMock = jest.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Avengers' } });
    fireEvent.click(screen.getByText('Search'));

    expect(onSearchMock).toHaveBeenCalledWith('Avengers');
  });

  it('should call the onSearch prop with the correct value after typing in the input and pressing the Enter key', () => {
    const onSearchMock = jest.fn();
    render(<SearchForm onSearch={onSearchMock} />);

    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'Bob' } });
    fireEvent.keyPress(screen.getByRole('textbox'), { key: 'Enter', code: 'Enter', charCode: 13 });

    expect(onSearchMock).toHaveBeenCalledWith('Bob');
  });

});