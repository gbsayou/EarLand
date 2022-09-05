import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  musicName: null,
  status: null,
};

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPlayer: (state, action) => {
      state.musicName = action.payload.musicName || state.musicName;
      state.status = action.payload.status || state.status;
    },
  },
});

export const {setPlayer} = playerSlice.actions;

export default playerSlice.reducer;
