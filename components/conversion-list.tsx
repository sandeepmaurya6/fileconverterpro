'use client';

import React from 'react';
import { ConversionItemDisplay } from './conversion-item';
import type { ConversionItem } from '@/lib/types';

interface ConversionListProps {
  items: ConversionItem[];
}

export function ConversionList({ items }: ConversionListProps) {
  const handleDownload = (url: string, name: string) => {
    const link = document.createElement('a');
    link.href = url;
    link.download = name;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-2">
      {items.map((item) => (
        <ConversionItemDisplay
          key={item.id}
          item={item}
          onDownload={handleDownload}
        />
      ))}
    </div>
  );
}