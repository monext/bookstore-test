import type { RootState } from '../app';

export const getBooks = (state: RootState) => state.books.items;
export const getBooksOpenFormDialog = (state: RootState) => state.books.openFormDialog;
