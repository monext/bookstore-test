import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import DialogActions from '@mui/material/DialogActions';
import OutlinedInput from '@mui/material/OutlinedInput';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import type { Book } from '../../types';

const CATEGORIES = ['Adventure', 'Drama', 'Romance', 'Mystery', 'Horror', 'Other'];

const getEmptyBook = (): Book => ({
  id: uuidv4(),
  name: '',
  price: 0,
  category: '',
  description: '',
});

type Field = 'name' | 'price' | 'category' | 'description';

export interface BookFormDialogProps {
  book?: Book;
  open: boolean;
  onClose: (_value?: Book) => void;
}

export default function BookFormDialog({ onClose, book, open }: BookFormDialogProps) {
  const editMode = !!book;
  const [form, setForm] = useState<Book>(() => getEmptyBook());

  useEffect(() => {
    if (open) {
      setForm(book ? { ...book } : getEmptyBook());
    }
  }, [open, book]);

  function isValidForm() {
    return !!form.name && form.price > 0 && !!form.category && !!form.description;
  }

  function handleFieldChange(field: Field, value: string) {
    setForm((state) => ({ ...state, [field]: field === 'price' ? Number(value) : value }));
  }

  function handleSubmit() {
    if (isValidForm()) {
      onClose(form);
    }
  }

  return (
    <Dialog onClose={() => onClose()} open={open} maxWidth='sm' fullWidth>
      <DialogTitle>{editMode ? 'Edit' : 'Add'} book</DialogTitle>
      <Stack component='form' autoComplete='off' spacing={2} padding={2} onSubmit={() => handleSubmit()}>
        <TextField
          id='book-name'
          label='Name'
          margin='normal'
          value={form.name}
          onChange={(event) => handleFieldChange('name', event.target.value)}
          fullWidth
          required
        />
        <FormControl fullWidth required>
          <InputLabel htmlFor='book-price'>Price</InputLabel>
          <OutlinedInput
            id='book-price'
            startAdornment={<InputAdornment position='start'>$</InputAdornment>}
            label='Price'
            type='number'
            value={form.price || ''}
            onChange={(event) => handleFieldChange('price', event.target.value)}
            placeholder='0.00'
          />
        </FormControl>
        <FormControl fullWidth required>
          <InputLabel htmlFor='book-category-lavel'>Category</InputLabel>
          <Select
            labelId='book-category-label'
            id='book-category'
            label='Category'
            value={form.category}
            onChange={(event) => handleFieldChange('category', event.target.value)}
          >
            {CATEGORIES.map((category) => (
              <MenuItem key={category} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          id='book-description'
          label='Description'
          value={form.description}
          onChange={(event) => handleFieldChange('description', event.target.value)}
          rows={4}
          multiline
          required
        />
      </Stack>
      <DialogActions>
        <Button onClick={() => onClose()}>Cancel</Button>
        <Button onClick={() => handleSubmit()} variant='contained' disabled={!isValidForm()}>
          {editMode ? 'Save' : 'Add'}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
