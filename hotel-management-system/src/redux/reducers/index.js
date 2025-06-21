import { combineReducers } from 'redux';
import roomReducer from './roomReducer';
import reservationReducer from './reservationReducer';
import authReducer from './authReducer';

export default combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
  auth: authReducer
});
