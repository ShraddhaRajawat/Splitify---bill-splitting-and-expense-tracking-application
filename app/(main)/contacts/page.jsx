// Ensure this is a client component if you're using useSearchParams
'use client';

import { Suspense } from 'react';
import ContactsContent from './ContactsContent';

export default function ContactsPage() {
  return (
    <Suspense fallback={<div>Loading contacts...</div>}>
      <ContactsContent />
    </Suspense>
  );
}
