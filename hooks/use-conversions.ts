'use client';

import { useState, useCallback } from 'react';
import { ConversionItem } from '@/lib/types';

export function useConversions() {
  const [conversions, setConversions] = useState<ConversionItem[]>([]);

  const addConversions = useCallback((newConversions: ConversionItem[]) => {
    setConversions(prev => [...prev, ...newConversions]);
  }, []);

  const updateConversion = useCallback((id: string, updates: Partial<ConversionItem>) => {
    setConversions(prev =>
      prev.map(conv =>
        conv.id === id
          ? { ...conv, ...updates }
          : conv
      )
    );
  }, []);

  const clearConversions = useCallback(() => {
    setConversions([]);
  }, []);

  return {
    conversions,
    addConversions,
    updateConversion,
    clearConversions
  };
}