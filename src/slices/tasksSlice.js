import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: {},
  ids: []
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, { payload }) => {
        state.tasks[payload.id] = { task: payload.task, id: payload.id, finished: false };
        state.ids.push(payload.id)
    },
    switchTaskState: (state, { payload }) => {
        state.tasks[payload.id].finished = !state.tasks[payload.id].finished;
    },
    deleteTask: (state, { payload }) => {
      delete state.tasks[payload.id];
      state.ids = state.ids.filter((id) => id !== payload.id)
    },
    deleteFinishedTasks: (state) => {
      state.ids.forEach((id) => {
        if(state.tasks[id].finished) {
          delete state.tasks[id]
        }
      })
      state.ids = state.ids.filter((id) => state.tasks[id])
    }
  },
});

export const { actions } = tasksSlice;
export default tasksSlice.reducer;