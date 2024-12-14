'use client';

import { FORMAT_CATEGORIES, type ConversionFormat } from '@/lib/constants';
import { getFormatDetails } from '@/lib/fileHandlers';
import { useMemo } from 'react';

interface PageHeaderProps {
  format: ConversionFormat;
}

export function PageHeader({ format }: PageHeaderProps) {
  const formatDetails = useMemo(() => getFormatDetails(format), [format]);

  return (
    <div className="text-center max-w-2xl mx-auto mb-8">
      <h1 className="text-3xl font-bold mb-4">
        Free {formatDetails?.label || 'File'} Converter
      </h1>
      <p className="text-slate-600">
        Convert, compress, and optimize your files directly in your browser.
        No upload limits, no registration required, and your files never leave your device.
      </p>
    </div>
  );
}