import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

import type { Book } from '../../types';

interface BooksState {
  items: Book[];
  openFormDialog: boolean;
}

const initialState: BooksState = {
  items: [],
  openFormDialog: false,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, { payload: item }: PayloadAction<Book>) => {
      state.items = state.items.concat(item);
    },
    updateBook: (state, { payload: item }: PayloadAction<Book>) => {
      state.items = state.items.map((currentItem) => (currentItem.id === item.id ? item : currentItem));
    },
    removeBook: (state, { payload: itemId }: PayloadAction<string>) => {
      state.items = state.items.filter((currentItem) => currentItem.id !== itemId);
    },
    openFormDialog: (state) => {
      state.openFormDialog = true;
    },
    closeFormDialog: (state) => {
      state.openFormDialog = false;
    },
  },
});

export const { addBook, updateBook, removeBook, openFormDialog, closeFormDialog } = booksSlice.actions;
