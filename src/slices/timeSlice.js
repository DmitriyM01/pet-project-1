import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  date: null,
  hours: null,
  minutes: null,
  seconds: null,
};

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setCurrentTime: (state, { payload }) => {
      const options = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
      };

      state.date = payload.toLocaleDateString(undefined, options);
      state.hours = payload.getHours();
      state.minutes = payload.getMinutes();
      state.seconds = payload.getSeconds();
    },
  },
});

export const { actions } = timeSlice;
export default timeSlice.reducer;