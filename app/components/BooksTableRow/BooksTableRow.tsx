import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

import type { Book } from '../../types';

interface Props {
  book: Book;
  onClick: React.MouseEventHandler;
  onRemoveButtonClick: React.MouseEventHandler;
}

export default function BooksTableRow({ book, onClick, onRemoveButtonClick }: Props) {
  return (
    <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }} onClick={onClick} hover>
      <TableCell>{book.name}</TableCell>
      <TableCell align='right'>{book.price.toFixed(2)}</TableCell>
      <TableCell align='right'>{book.category}</TableCell>
      <TableCell>{book.description}</TableCell>
      <TableCell align='right'>
        <Tooltip title='Remove'>
          <IconButton size='small' aria-label='remove book' color='inherit' onClick={onRemoveButtonClick}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </TableCell>
    </TableRow>
  );
}
