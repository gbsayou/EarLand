import {configureStore} from '@reduxjs/toolkit';
// import counter from './counter';
import player from './player';

export const store = configureStore({
  reducer: {
    // counter,
    player,
  },
});
