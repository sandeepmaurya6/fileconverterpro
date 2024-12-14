export interface ConversionItem {
  id: string;
  name: string;
  url: string;
  blob?: Blob;
  status: 'converting' | 'completed' | 'error';
  error?: string;
  timeTaken: number;
  format?: string;
  originalSize?: number;
  newSize?: number;
}

export interface FormatDetails {
  label: string;
  accept: string;
  dropzoneText: string;
}