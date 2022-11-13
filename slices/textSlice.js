import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  text: {
    id: '',
    title: '',
    body: '',
    date: '',
  },
  log: [],
  keyword: '',
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
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
  },
});

export const { setText, setLogs, setKeyword } = textSlice.actions;
export default textSlice.reducer;
