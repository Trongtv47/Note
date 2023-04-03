import {combineReducers} from '@reduxjs/toolkit';
import home from './home/slice';

const rootReducer = combineReducers({
  home,
});

export default rootReducer;
