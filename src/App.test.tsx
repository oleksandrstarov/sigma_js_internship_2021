import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const createdByEl = screen.getByText(/Created by students of sigma software/i);
  expect(createdByEl).toBeInTheDocument();
});
