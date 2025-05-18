'use client'

import { useEffect } from 'react';

export default function CzFixer() {
  useEffect(() => {
    document.body.removeAttribute('cz-shortcut-listen');
  }, []);

  return null;
}
