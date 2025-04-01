import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Dialog from './Dialog';

describe('Dialog', () => {
    it('should render the title', () => {
        render(<Dialog title="Test Title">Test Content</Dialog>);
        expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument();
    });

    it('should render the children', () => {
        render(<Dialog title="Test Title">Test Content</Dialog>);
        expect(screen.getByText('Test Content')).toBeInTheDocument();
    });

    it('should call onClose when the close button is clicked', () => {
        const onClose = jest.fn();
        render(<Dialog title="Test Title" onClose={onClose}>Test Content</Dialog>);
        fireEvent.click(screen.getByRole('button', { name: '×' }));
        expect(onClose).toHaveBeenCalled();
    });
});