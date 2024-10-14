import { configureStore } from '@reduxjs/toolkit';

import timeReducer from './timeSlice.js';
import tasksReducer from './tasksSlice.js';

export default configureStore({
  reducer: {
    timeReducer,
    tasksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});