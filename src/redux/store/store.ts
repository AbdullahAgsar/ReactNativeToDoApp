import {configureStore} from '@reduxjs/toolkit';
import ToDos from '../state/toDo';

export const store = configureStore({
  reducer: {
    ToDos,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
