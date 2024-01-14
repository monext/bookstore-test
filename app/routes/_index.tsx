import React from 'react';
import type { MetaFunction } from '@remix-run/node';

import AppHeader from '~/components/AppHeader';
import BooksTable from '~/components/BooksTable';

export const meta: MetaFunction = () => [
  { title: 'Bookstore' },
  { name: 'description', content: 'Bookstore page description here' },
];

export default function Index() {
  return (
    <>
      <AppHeader />
      <BooksTable />
    </>
  );
}
