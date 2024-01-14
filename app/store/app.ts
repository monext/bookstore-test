import { configureStore } from '@reduxjs/toolkit';

import { booksSlice } from './reducers/books';

const emptyStore = configureStore({
  reducer: {
    books: booksSlice.reducer,
  },
});

export type RootState = ReturnType<typeof emptyStore.getState>;
export type AppDispatch = typeof emptyStore.dispatch;

export const getStore = (preloadedState: RootState) =>
  configureStore({
    reducer: {
      books: booksSlice.reducer,
    },
    preloadedState,
  });
