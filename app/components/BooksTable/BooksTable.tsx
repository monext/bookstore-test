import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';

import useConfirm from '../../hooks/useConfirm';
import { addBook, closeFormDialog, openFormDialog, removeBook, updateBook } from '../../store/reducers/books';
import { getBooks, getBooksOpenFormDialog } from '../../store/selectors/books';
import type { Book } from '../../types';
import BookFormDialog from '../BookFormDialog';
import BooksTableHeader from '../BooksTableHeader';
import BooksTableRow from '../BooksTableRow';
import ConfirmDialog from '../ConfirmDialog';

export default function BooksTable() {
  const [clickedBook, setClickedBook] = useState<Book>();
  const books = useSelector(getBooks);
  const dispatch = useDispatch();
  const openDialog = useSelector(getBooksOpenFormDialog);
  const { openConfirm, confirmAsync, closeConfirm } = useConfirm();

  async function handleRemove(event: React.MouseEvent, bookId: string) {
    event.stopPropagation();

    if (await confirmAsync()) {
      dispatch(removeBook(bookId));
    }
  }

  function handleBookClick(book: Book) {
    setClickedBook(book);
    dispatch(openFormDialog());
  }

  function handleDialogClose(book?: Book) {
    dispatch(closeFormDialog());

    if (book && book.id === clickedBook?.id) {
      dispatch(updateBook(book));
    } else if (book) {
      dispatch(addBook(book));
    }

    setClickedBook(undefined);
  }

  function renderTable() {
    return (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <BooksTableHeader />
          <TableBody>
            {books.map((book) => (
              <BooksTableRow
                key={book.id}
                book={book}
                onClick={() => handleBookClick(book)}
                onRemoveButtonClick={(event) => handleRemove(event, book.id)}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  function renderEmptyListMessage() {
    return <Alert severity='info'>There are no books in the list, click "+" button to add a new one.</Alert>;
  }

  return (
    <>
      {books.length ? renderTable() : renderEmptyListMessage()}
      <BookFormDialog onClose={handleDialogClose} open={openDialog} book={clickedBook} />
      <ConfirmDialog
        title='Remove book'
        text='Are you sure you want to remove this book?'
        open={openConfirm}
        onClose={closeConfirm}
      />
    </>
  );
}
