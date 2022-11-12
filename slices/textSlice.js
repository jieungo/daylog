import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: {
    id: '',
    title: '',
    body: '',
    date: '',
  },
  log: [],
};

export const textSlice = createSlice({
  name: 'text',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
      state.log.unshift(action.payload);
    },
    setLogs: (state, action) => {
      state.log = [...action.payload];
    },
  },
});

export const { setText, setLogs } = textSlice.actions;
export default textSlice.reducer;
