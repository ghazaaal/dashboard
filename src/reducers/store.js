import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';

const combinedReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/userLoggedOut') {
    localStorage.clear();
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }
  return combinedReducer(state, action);
};

export default configureStore({
  reducer: rootReducer,
  // devTools: process.env.NODE_ENV !== 'production',
});
