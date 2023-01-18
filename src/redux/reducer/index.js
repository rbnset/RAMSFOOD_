import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import {homeReducer} from './home';
import {orderReducer} from './order';
import {photoReducer} from './auth';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  homeReducer,
  orderReducer,
  photoReducer,
});

export default reducer;
