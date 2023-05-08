import { createRoot } from 'react-dom';
import { screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const root = document.createElement('div');
  createRoot(root).render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
