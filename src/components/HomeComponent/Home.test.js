import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import { render } from '@testing-library/react';
import Home from './Home';

const PhoRouter = () => {
  return (
    <Router>
      <Home />
    </Router>
  )
}

test('renders learn react link', () => {
  const { getByText } = render(<PhoRouter />);
  const liElement = getByText(/Hi! My name is Alex, and this is my portfolio./i);
  expect(liElement).toBeInTheDocument();
});
