import React from 'react';
import { render, screen } from '@testing-library/react';
import { BottomColBtn } from '../components/Button/BottomColBtn';

describe('BottomColBtn component', () => {
  it('renders the correct text when `isCompleted` is false', () => {
    render(<BottomColBtn />);
    expect(screen.getByText('+ Add a Task')).toBeInTheDocument();
  });

  it('renders the correct text when `isCompleted` is true', () => {
    render(<BottomColBtn isCompleted />);
    expect(screen.getByText('View Completed Tasks')).toBeInTheDocument();
  });
});
