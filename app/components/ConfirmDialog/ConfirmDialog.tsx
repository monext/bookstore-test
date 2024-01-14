import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContentText from '@mui/material/DialogContentText';

interface Props {
  title: string;
  text: string;
  onClose: (_result: boolean) => void;
  open: boolean;
}

export default function ConfirmDialog({ title, text, onClose, open }: Props) {
  return (
    <Dialog
      open={open}
      onClose={() => onClose(false)}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>{text}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onClose(false)}>Cancel</Button>
        <Button onClick={() => onClose(true)} variant='contained' autoFocus>
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}
