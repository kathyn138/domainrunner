import { renderWithProviders } from '../test-utils';
import axios from 'axios';
import '@testing-library/jest-dom';
import CalendarContainer from './';

const mockAxiosRes = {
  data: 
    {
        "monday": [],
        "tuesday": [],
        "wednesday": [],
        "thursday": [],
        "friday": [],
        "saturday": [],
        "sunday": [],
        "any": [
          {
              "itemId": "agnidus_agate_chunk",
              "itemIcon": "https://paimon.moe/images/items/agnidus_agate_chunk.png",
              "day": "any",
              "entityId": "amber",
              "entityIcon": "https://paimon.moe/images/characters/amber.png",
              "entityType": "pyro"
          }
      ]
    }
};

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

jest.spyOn(axios, 'get').mockResolvedValueOnce(mockAxiosRes);

it('renders correct default no calendar data message', function () {
  const { getByText } = renderWithProviders(<CalendarContainer />, {
    preloadedState: {
      cart: []
    },
  });
  expect(getByText('No items in calendar yet!')).toBeInTheDocument();
});

//TODO: 
// it('renders calendar items when there are entities in cart', function () {
//   const { getByAltText } = renderWithProviders(<CalendarContainer />, {
//     preloadedState: {
//       cart: testCart
//     },
//   });
//   const img = getByAltText('everflame-seed');
//   expect(img.src).toContain('everflame_seed.png')
// });
