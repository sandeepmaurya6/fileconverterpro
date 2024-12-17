import { FORMAT_CATEGORIES, type ConversionFormat } from '@/lib/constants';
import type { FormatDetails } from '@/lib/types';

export const getMaxFileSize = (format: ConversionFormat): number => {
  return format.includes('mp4') || format.includes('mov')
    ? 2048 * 1024 * 1024 // 500MB for videos
    : 50 * 1024 * 1024; // 50MB for images
};

export const validateFile = (
  file: File,
  format: ConversionFormat,
  acceptedType: string
): { isValid: boolean; error?: { title: string; description: string } } => {
  const maxSize = getMaxFileSize(format);
  const isValidType = file.type.match(acceptedType);
  const isValidSize = file.size <= maxSize;

  if (!isValidType) {
    return {
      isValid: false,
      error: {
        title: 'Invalid file type',
        description: `Please upload only ${acceptedType} files`,
      },
    };
  }

  if (!isValidSize) {
    return {
      isValid: false,
      error: {
        title: 'File too large',
        description: `Maximum file size is ${maxSize / (1024 * 1024)}MB`,
      },
    };
  }

  return { isValid: true };
};

export const getFormatDetails = (
  format: ConversionFormat
): FormatDetails | null => {
  const categoryEntry = Object.entries(FORMAT_CATEGORIES).find(
    ([_, { formats }]) => format in formats
  );

  if (!categoryEntry) return null;

  const [_, category] = categoryEntry;
  // const formatDetails = category.formats[format as ];

  // return formatDetails
  //   ? {
  //       label: formatDetails.label,
  //       accept: formatDetails.accept,
  //       dropzoneText: formatDetails.dropzoneText,
  //     }
  //   : null;

  type ConversionFormat = keyof typeof category.formats;

  const formatDetails = category.formats[format as ConversionFormat];

  return formatDetails
    ? {
        label: (formatDetails as { label: string }).label,
        accept: (formatDetails as {accept:string}).accept,
        dropzoneText: (formatDetails as {dropzoneText:string}).dropzoneText,
      }
    : null;
};
