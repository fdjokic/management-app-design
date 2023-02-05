import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { AddColumn } from '../components/Button/AddColumn';
import { PlusIcon } from '../assets/icons/plusIcon';

afterEach(cleanup);

describe('AddColumn', () => {
  it('renders without crashing', () => {
    render(<AddColumn />);
  });

  it('renders PlusIcon', () => {
    render(<PlusIcon />);
    const plusIcon = screen.getByTestId('plus-icon');
    expect(plusIcon).toBeInTheDocument();
  });
});
