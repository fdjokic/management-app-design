import React from 'react';
import { render, screen } from '@testing-library/react';
import { ColumnHeader } from '../components/Column/ColumnHeader';

test('ColumnHeader component displays title and number of tasks correctly', () => {
  const title = 'Column 1';
  const numOfTasks = 10;

  render(<ColumnHeader title={title} numOfTasks={numOfTasks} />);

  const titleElement = screen.getByText(title);
  const numOfTasksElement = screen.getByText(`(${numOfTasks})`);

  expect(titleElement).toBeInTheDocument();
  expect(numOfTasksElement).toBeInTheDocument();

  const optionsIcon = screen.getByTestId('options-icon');

  expect(optionsIcon).toBeInTheDocument();
});
