import React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Footer from '../components/Footer';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Container>
      <Box sx={{ my: 4 }}>{children}</Box>
      <Footer />
    </Container>
  );
}
