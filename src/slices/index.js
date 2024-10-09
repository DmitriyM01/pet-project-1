import { configureStore } from 'react-redux'

import timeReducer from './timeSlice.js';

export default configureStore({
  reducer: {
    timeReducer,
  },
});