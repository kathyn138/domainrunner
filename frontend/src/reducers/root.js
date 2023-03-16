import entities from './entities';
import cart from './cart';
import { combineReducers } from '@reduxjs/toolkit';

export default combineReducers({ entities, cart });

