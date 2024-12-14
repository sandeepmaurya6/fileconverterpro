import { convertImage } from './image-converter';
import { convertVideo } from './video-converter';
import { FORMAT_CATEGORIES, type ConversionFormat } from '@/lib/constants';

export async function convertFile(
  file: File,
  format: ConversionFormat,
  targetSizeKB?: number,
  onProgress?: (progress: number) => void
) {
  const category = Object.entries(FORMAT_CATEGORIES).find(([_, { formats }]) =>
    format in formats
  )?.[0];

  if (category === 'images') {
    return convertImage(file, format, targetSizeKB);
  } else if (category === 'videos') {
    return convertVideo(file, format as 'mp4-to-mp3' | 'mov-to-mp4', {
      onProgress: onProgress || (() => {})
    });
  }

  throw new Error('Unsupported format');
}