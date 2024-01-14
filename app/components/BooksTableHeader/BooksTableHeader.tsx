import React from 'react';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

export default function BooksTableHeader() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Name</TableCell>
        <TableCell align='right'>Price&nbsp;($)</TableCell>
        <TableCell align='right'>Category</TableCell>
        <TableCell>Description</TableCell>
        <TableCell align='right' />
      </TableRow>
    </TableHead>
  );
}
