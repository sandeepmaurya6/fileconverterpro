export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes}B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)}KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)}MB`;
}

export function calculateSizeReduction(originalSize: number, newSize: number): number {
  return Math.round(((originalSize - newSize) / originalSize) * 100);
}