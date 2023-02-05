import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { Card } from '../components/Card/Card';
import { StatusBar } from '../components/Card/StatusBar';

describe('Card component', () => {
  it('should render the card with the provided text', () => {
    const text = 'This is a card';
    render(<Card text={text} profileImgs={[]} />);
    const textEl = screen.getByText(text);

    expect(textEl).toBeInTheDocument();
  });

  it('should call the onDrop function when the card is dropped', () => {
    const text = 'This is a card';
    const onDrop = jest.fn();
    render(<Card text={text} profileImgs={[]} onDrop={onDrop} />);
    const textEl = screen.getByText(text);
    fireEvent.drop(textEl);
    expect(onDrop).toHaveBeenCalled();
  });

  it('should render the status bar with the provided information', () => {
    render(<StatusBar />);
    const statusBar = screen.getByTestId('status-bar');

    expect(statusBar).toHaveStyle(
      'background: linear-gradient(to right, red, blue)'
    );
  });
});
