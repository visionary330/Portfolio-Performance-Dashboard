import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dashboard links', () => {
  render(<App />);
  expect(screen.getByText(/Performance/i)).toBeInTheDocument();
  expect(screen.getByText(/Holdings/i)).toBeInTheDocument();
});
