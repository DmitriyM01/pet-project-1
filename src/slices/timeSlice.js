import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  currentTime: null
};

const channelsSlice = createSlice({
  name: 'channels',
  initialState,
  reducers: {
    setCurrentTime: (state, { payload }) => {
      state.currentTime = payload;
    },
  },
});

export const { actions } = channelsSlice;
export default channelsSlice.reducer;