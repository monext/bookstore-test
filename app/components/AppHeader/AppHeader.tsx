import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from 'react-redux';

import { openFormDialog } from '../../store/reducers/books';

export default function AppHeader() {
  const dispatch = useDispatch();

  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Bookstore
          </Typography>
          <Tooltip title='Add book'>
            <IconButton size='large' aria-label='add book' color='inherit' onClick={() => dispatch(openFormDialog())}>
              <AddIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
