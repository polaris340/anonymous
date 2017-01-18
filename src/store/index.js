import {createStore, combineReducers} from 'redux';
import {userReducer} from '../user/userStore';

const store = createStore(combineReducers({
  users: userReducer
}));

export default store;