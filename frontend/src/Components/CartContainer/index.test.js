import { renderWithProviders } from '../test-utils';
import '@testing-library/jest-dom';
import CartContainer from './';

const testCart = [
  {
    name: 'Amber',
    id: 'amber',
    icon: 'https://paimon.moe/images/characters/amber.png',
    category: 'characters',
    type: 'pyro',
    typeIcon: 'https://paimon.moe/images/elements/pyro.png',
  },
];

it('renders correct default no data message', function () {
  const { getByText } = renderWithProviders(<CartContainer />, {
    preloadedState: {
      cart: [],
    },
  });
  expect(getByText('Cart is currently empty!')).toBeInTheDocument();
});


it('renders cart items', function () {
  const { getByAltText } = renderWithProviders(<CartContainer />, {
    preloadedState: {
      cart: testCart
    },
  });
  const img = getByAltText('amber');
  expect(img.src).toContain('amber.png')
});