import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from './';

it('renders without crashing', function () {
  // this is a low-value test, but better than nothing
  render(<Home />);
});

it('renders correct home message', function () {
  const { getByText } = render(<Home />);
  expect(getByText('Farming Impact helps you plan what to farm on which days.')).toBeInTheDocument();
});