import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  it('should display the initial value provided in props', () => {
    render(<Counter initialValue={10} />);
    expect(screen.getByText('Value: 10')).toBeInTheDocument();
  });

  it('should decrease the displayed value when the "Decrement" button is clicked', () => {
    render(<Counter initialValue={5} />);
    fireEvent.click(screen.getByText('Decrement'));
    expect(screen.getByText('Value: 4')).toBeInTheDocument();
  });

  it('should increase the displayed value when the "Increment" button is clicked', () => {
    render(<Counter initialValue={5} />);
    fireEvent.click(screen.getByText('Increment'));
    expect(screen.getByText('Value: 6')).toBeInTheDocument();
  });
});