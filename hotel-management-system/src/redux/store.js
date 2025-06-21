import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import roomReducer from './reducers/roomReducer';
import reservationReducer from './reducers/reservationReducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  rooms: roomReducer,
  reservations: reservationReducer,
  auth: authReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
