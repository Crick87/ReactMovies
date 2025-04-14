import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MovieForm from './MovieForm';

describe('MovieForm', () => {

    it('should display the initial movie data in the form fields', () => {
        const initialMovie = {
            title: 'Test Movie',
            release_date: '2023-01-01',
            poster_path: 'http://some-poster.com/poster.jpg',
            vote_average: 8.5,
            genres: ['Comedy'],
            runtime: '120 min',
            overview: 'This is a test movie overview.',
        };
        render(<MovieForm initialMovie={initialMovie} />);
        expect(screen.getByLabelText('Title')).toHaveValue('Test Movie');
        expect(screen.getByLabelText('Release Day')).toHaveValue('2023-01-01');
        expect(screen.getByLabelText('Poster URL')).toHaveValue('http://some-poster.com/poster.jpg');
        expect(screen.getByLabelText('Rating')).toHaveValue(8.5);
        expect(screen.getByLabelText('Genres')).toHaveValue('Comedy');
        expect(screen.getByLabelText('Runtime')).toHaveValue('120 min');
        expect(screen.getByLabelText('Overview')).toHaveValue('This is a test movie overview.');
    });

    it('should call the handleSubmit method when the submit button is clicked', () => {
        const handleSubmitMock = jest.fn();
        render(<MovieForm onSubmit={handleSubmitMock} />);
        const submitButton = screen.getByText('Submit');
        fireEvent.click(submitButton);
        expect(handleSubmitMock).toHaveBeenCalledTimes(1);
    });

    it('should reset the form when the reset button is clicked', () => {
        render(<MovieForm initialMovie={{ title: 'Initial Title' }} />);
        fireEvent.change(screen.getByLabelText('Title'), { target: { value: 'New Title' } });
        expect(screen.getByLabelText('Title')).toHaveValue('New Title');
        fireEvent.click(screen.getByText('Reset'));
        expect(screen.getByLabelText('Title')).toHaveValue('Initial Title');
    });
});