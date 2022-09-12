import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import NavBar from './NavBar';

test('renders ABOUT in navbarr', () => {
  render(<NavBar />);
  const aboutElement = screen.getAllByText(/ABOUT/i);
  expect(aboutElement.length === 2);
})

test('renders name', () => {
  render(<NavBar />);
  const nameElement = screen.getByText(/KEVIN TATOOLES/i);
  expect(nameElement).toBeInTheDocument();
})