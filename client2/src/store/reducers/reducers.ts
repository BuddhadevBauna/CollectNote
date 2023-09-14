import { combineReducers } from 'redux';
import counterReducer from './counterReducer'; // Import your reducer(s)

const rootReducer = combineReducers({
  counter: counterReducer, // Define the state key and the associated reducer
  // Add more reducers here if needed
});

export default rootReducer;