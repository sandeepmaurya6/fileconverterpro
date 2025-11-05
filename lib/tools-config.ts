import { FileImage, FileVideo, Image, Zap, Music, Film } from 'lucide-react';
import { ConversionFormat } from './constants';

export interface ToolConfig {
  id: ConversionFormat;
  title: string;
  description: string;
  longDescription: string;
  icon: any;
  category: 'image' | 'video';
  slug: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  features: string[];
}

export const TOOLS_CONFIG: Record<ConversionFormat, ToolConfig> = {
  'webp-to-png': {
    id: 'webp-to-png',
    title: 'WebP to PNG Converter',
    description: 'Convert WebP images to PNG format with perfect quality preservation.',
    longDescription: 'Convert modern WebP images to widely-supported PNG format. Maintain perfect image quality while ensuring compatibility across all platforms and browsers. Process multiple files at once with our batch converter.',
    icon: FileImage,
    category: 'image',
    slug: 'webp-to-png',
    metaTitle: 'Free WebP to PNG Converter Online - Fast & No Upload Required',
    metaDescription: 'Convert WebP images to PNG format instantly in your browser. No file upload, 100% privacy, batch processing up to 20 files. Free online WebP to PNG converter tool.',
    keywords: [
      'webp to png',
      'webp converter',
      'convert webp to png',
      'webp to png online',
      'free webp converter',
      'batch webp converter',
      'webp to png free',
      'online image converter'
    ],
    features: [
      'Perfect quality preservation',
      'No file size limits up to 50MB',
      'Batch convert up to 20 files',
      'Works entirely in your browser',
      'No file upload required',
      'Instant conversion'
    ]
  },
  'png-to-webp': {
    id: 'png-to-webp',
    title: 'PNG to WebP Converter',
    description: 'Convert PNG images to WebP format for better compression and faster loading.',
    longDescription: 'Convert PNG images to modern WebP format for significantly smaller file sizes. Perfect for web optimization, WebP provides superior compression while maintaining excellent image quality. Ideal for improving website performance.',
    icon: Image,
    category: 'image',
    slug: 'png-to-webp',
    metaTitle: 'Free PNG to WebP Converter - Reduce Image Size by 80%',
    metaDescription: 'Convert PNG to WebP format and reduce file size by up to 80%. Free online converter with batch processing. No upload required, works in your browser.',
    keywords: [
      'png to webp',
      'convert png to webp',
      'png to webp converter',
      'image compression',
      'webp converter',
      'optimize images',
      'reduce image size',
      'png optimizer'
    ],
    features: [
      'Up to 80% file size reduction',
      'Maintains excellent quality',
      'Batch conversion support',
      'No file upload needed',
      'Process up to 20 files',
      'Free and unlimited use'
    ]
  },
  'png-optimize': {
    id: 'png-optimize',
    title: 'PNG Optimizer',
    description: 'Compress and optimize PNG images to specific file sizes without quality loss.',
    longDescription: 'Advanced PNG compression tool that optimizes your images to meet specific file size requirements. Perfect for web developers, designers, and content creators who need precise control over image file sizes while maintaining visual quality.',
    icon: Zap,
    category: 'image',
    slug: 'png-optimizer',
    metaTitle: 'PNG Optimizer - Compress PNG Images to Target Size | Free Tool',
    metaDescription: 'Optimize PNG images to specific file sizes. Advanced compression algorithm maintains quality while reducing size. Free PNG optimizer with batch processing.',
    keywords: [
      'png optimizer',
      'compress png',
      'png compression',
      'optimize png',
      'reduce png size',
      'png compressor',
      'image optimizer',
      'png file size reducer'
    ],
    features: [
      'Target specific file sizes',
      'Smart quality adjustment',
      'Batch optimization',
      'No quality loss',
      'Up to 20 files at once',
      'Browser-based processing'
    ]
  },
  'jpeg-optimize': {
    id: 'jpeg-optimize',
    title: 'JPEG Optimizer',
    description: 'Compress JPEG images to your desired file size with intelligent quality control.',
    longDescription: 'Professional JPEG optimization tool with intelligent compression algorithms. Reduce file sizes to meet your exact requirements while maintaining the best possible visual quality. Perfect for website optimization, email attachments, and social media.',
    icon: Zap,
    category: 'image',
    slug: 'jpeg-optimizer',
    metaTitle: 'JPEG Optimizer - Compress JPG Images Online Free',
    metaDescription: 'Free JPEG optimizer with smart compression. Reduce JPG file size to target dimensions. Batch process up to 20 images. No upload required.',
    keywords: [
      'jpeg optimizer',
      'compress jpeg',
      'jpeg compression',
      'jpg optimizer',
      'compress jpg',
      'reduce jpeg size',
      'jpeg compressor',
      'optimize jpeg quality'
    ],
    features: [
      'Precise size control',
      'Intelligent compression',
      'Quality preservation',
      'Batch processing',
      'No file upload',
      'Free unlimited use'
    ]
  },
  'mp4-to-mp3': {
    id: 'mp4-to-mp3',
    title: 'MP4 to MP3 Converter',
    description: 'Extract high-quality audio from MP4 videos and save as MP3 files.',
    longDescription: 'Extract crystal-clear audio from your MP4 videos and convert them to MP3 format. Perfect for creating podcasts, music libraries, or audio-only versions of video content. Process files up to 2GB entirely in your browser.',
    icon: Music,
    category: 'video',
    slug: 'mp4-to-mp3',
    metaTitle: 'Free MP4 to MP3 Converter - Extract Audio from Video Online',
    metaDescription: 'Convert MP4 video to MP3 audio instantly. High-quality audio extraction, no file upload, supports files up to 2GB. Free online MP4 to MP3 converter.',
    keywords: [
      'mp4 to mp3',
      'convert mp4 to mp3',
      'mp4 to mp3 converter',
      'video to audio',
      'extract audio from video',
      'mp4 audio extractor',
      'video to mp3',
      'free mp4 converter'
    ],
    features: [
      'High-quality audio extraction',
      'Supports files up to 2GB',
      'No file upload needed',
      'Fast conversion',
      'Batch processing',
      'Free and private'
    ]
  },
  'mov-to-mp4': {
    id: 'mov-to-mp4',
    title: 'MOV to MP4 Converter',
    description: 'Convert MOV videos to MP4 format for universal compatibility.',
    longDescription: 'Convert QuickTime MOV files to widely-supported MP4 format. Perfect for ensuring your videos play on any device or platform. Maintain video quality while improving compatibility across all media players and devices.',
    icon: Film,
    category: 'video',
    slug: 'mov-to-mp4',
    metaTitle: 'MOV to MP4 Converter Online Free - QuickTime to MP4',
    metaDescription: 'Convert MOV to MP4 format for universal playback. Free online converter, no upload required, supports large files up to 2GB. Fast MOV to MP4 conversion.',
    keywords: [
      'mov to mp4',
      'convert mov to mp4',
      'mov to mp4 converter',
      'quicktime to mp4',
      'mov converter',
      'video converter',
      'mov to mp4 online',
      'free mov converter'
    ],
    features: [
      'Universal compatibility',
      'Maintains video quality',
      'Large file support (2GB)',
      'No upload required',
      'Browser-based conversion',
      'Free and unlimited'
    ]
  }
};

export const getAllTools = (): ToolConfig[] => {
  return Object.values(TOOLS_CONFIG);
};

export const getToolBySlug = (slug: string): ToolConfig | undefined => {
  return Object.values(TOOLS_CONFIG).find(tool => tool.slug === slug);
};

export const getToolsByCategory = (category: 'image' | 'video'): ToolConfig[] => {
  return Object.values(TOOLS_CONFIG).filter(tool => tool.category === category);
};
