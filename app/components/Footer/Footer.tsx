import React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

export default function Footer() {
  return (
    <Typography sx={{ mt: 6, mb: 3 }} color='text.secondary' align='center'>
      Check out the source code in&nbsp;
      <Link href='https://github.com/monext/bookstore-test' target='_blank'>
        Github repository
      </Link>
      .
    </Typography>
  );
}
