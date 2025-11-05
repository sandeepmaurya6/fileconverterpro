'use client';

import { useState, useMemo, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Dropzone } from '@/components/ui/dropzone';
import { ConversionList } from '@/components/conversion-list';
import { convertFile } from '@/lib/converters';
import { OptimizationSettings } from '@/components/converter/optimization-settings';
import { useConversions } from '@/hooks/use-conversions';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Play, X, ArrowLeft, Home } from 'lucide-react';
import { truncateFilename } from '@/lib/utils';
import { type ConversionFormat } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { getFormatDetails } from '@/lib/fileHandlers';
import type { ConversionItem } from '@/lib/types';
import { getToolBySlug, TOOLS_CONFIG } from '@/lib/tools-config';
import Link from 'next/link';
import { StructuredData, generateToolSchema } from '@/components/structured-data';
import Script from 'next/script';

export default function ToolPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug as string;

  const toolConfig = getToolBySlug(slug);

  const { toast } = useToast();
  const { conversions, addConversions, clearConversions } = useConversions();
  const [isConverting, setIsConverting] = useState(false);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [targetSizeKB, setTargetSizeKB] = useState<number>(100);

  // Redirect if tool not found
  useEffect(() => {
    if (!toolConfig) {
      router.push('/');
    }
  }, [toolConfig, router]);

  if (!toolConfig) {
    return null;
  }

  const format = toolConfig.id;
  const hasPendingFiles = useMemo(() => pendingFiles.length > 0, [pendingFiles]);
  const hasCompletedConversions = useMemo(() =>
    conversions.some(conv => conv.status === 'completed'),
    [conversions]
  );

  const formatDetails = useMemo(() => getFormatDetails(format), [format]);

  const handleFilesDrop = (files: File[]) => {
    if (files.length > 20) {
      toast({
        title: "Too many files",
        description: "You can only upload 20 files at once",
        variant: "destructive"
      });
      return;
    }

    const maxSize = format.includes('mp4') || format.includes('mov')
      ? 2048 * 1024 * 1024  // 2GB for videos
      : 50 * 1024 * 1024;  // 50MB for images

    const validFiles = files.filter(file => file.size <= maxSize);
    const invalidFiles = files.filter(file => file.size > maxSize);

    if (invalidFiles.length > 0) {
      toast({
        title: "Files too large",
        description: `Maximum file size is ${maxSize / (1024 * 1024)}MB`,
        variant: "destructive"
      });
    }

    setPendingFiles(prevFiles => [...prevFiles, ...validFiles]);
  };

  const clearFiles = () => {
    setPendingFiles([]);
  };

  const startConversion = async () => {
    setIsConverting(true);
    setProgress(0);

    const results: ConversionItem[] = [];
    const total = pendingFiles.length;

    for (let i = 0; i < total; i++) {
      const file = pendingFiles[i];
      const startTime = performance.now();
      try {
        const result = await convertFile(
          file,
          format,
          targetSizeKB,
          (fileProgress) => {
            const completedProgress = (i / total) * 100;
            const currentFileProgress = (fileProgress / total);
            setProgress(Math.round(completedProgress + currentFileProgress));
          }
        );
        const endTime = performance.now();

        results.push({
          id: `${file.name}-${Date.now()}`,
          name: result.name,
          url: result.url,
          blob: result.blob,
          status: 'completed' as const,
          timeTaken: endTime - startTime,
          format,
          originalSize: file.size,
          newSize: result.blob.size
        });
      } catch (error) {
        results.push({
          id: `${file.name}-${Date.now()}`,
          name: file.name,
          url: '',
          status: 'error' as const,
          error: (error as Error).message,
          timeTaken: 0,
          format
        });
      }
    }

    addConversions(results);
    setPendingFiles([]);
    setIsConverting(false);
  };

  const handleDownloadAll = async () => {
    const completedConversions = conversions.filter(conv => conv.status === 'completed' && conv.blob);

    if (completedConversions.length === 0) return;

    if (completedConversions.length === 1) {
      saveAs(completedConversions[0].url, completedConversions[0].name);
      return;
    }

    const zip = new JSZip();
    completedConversions.forEach(conv => {
      if (conv.blob) {
        zip.file(conv.name, conv.blob);
      }
    });

    const zipBlob = await zip.generateAsync({ type: 'blob' });
    saveAs(zipBlob, 'converted-files.zip');
  };

  return (
    <>
      <StructuredData data={generateToolSchema(toolConfig)} />
      <main className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto p-6">
          <div className="flex items-center gap-4 mb-6">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                All Tools
              </Button>
            </Link>
          </div>

          <div className="flex items-start gap-4">
            <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${
              toolConfig.category === 'image'
                ? 'from-blue-500 to-cyan-500'
                : 'from-purple-500 to-pink-500'
            } flex items-center justify-center flex-shrink-0`}>
              <toolConfig.icon className="h-8 w-8 text-white" />
            </div>

            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-2">
                {toolConfig.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
                {toolConfig.longDescription}
              </p>

              {/* Features List */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {toolConfig.features.slice(0, 3).map((feature, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-green-500">✓</span>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-6 space-y-8">
        {/* Optimization Settings */}
        {(format === 'png-optimize' || format === 'jpeg-optimize') && (
          <div className="flex justify-center">
            <OptimizationSettings
              onTargetSizeChange={setTargetSizeKB}
              disabled={isConverting}
            />
          </div>
        )}

        {/* Dropzone */}
        {!hasPendingFiles && !conversions.length && formatDetails && (
          <Dropzone
            onFilesDrop={handleFilesDrop}
            className="transition-all duration-200 hover:border-primary/50"
            disabled={isConverting}
            accept={formatDetails.accept}
            text={formatDetails.dropzoneText}
          />
        )}

        {/* Files List */}
        {(hasPendingFiles || conversions.length > 0) && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-lg font-semibold">
                {hasPendingFiles ? 'Selected Files' : 'Conversions'}
              </h2>
              <div className="flex flex-wrap gap-2">
                {hasPendingFiles ? (
                  <>
                    <Button
                      variant="outline"
                      onClick={clearFiles}
                      disabled={isConverting}
                      className="min-w-[120px]"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear Files
                    </Button>
                    <Button
                      onClick={startConversion}
                      disabled={isConverting}
                      className="min-w-[160px] bg-blue-600 hover:bg-blue-700"
                    >
                      {isConverting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin mr-2" />
                          {progress}%
                        </>
                      ) : (
                        <>
                          <Play className="h-4 w-4 mr-2" />
                          Start Conversion
                        </>
                      )}
                    </Button>
                  </>
                ) : hasCompletedConversions && (
                  <>
                    <Button
                      variant="outline"
                      onClick={clearConversions}
                      disabled={isConverting}
                      className="min-w-[120px]"
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear All
                    </Button>
                    <Button
                      onClick={handleDownloadAll}
                      disabled={isConverting}
                      className="min-w-[160px] bg-blue-600 hover:bg-blue-700"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download All
                    </Button>
                  </>
                )}
              </div>
            </div>

            {hasPendingFiles ? (
              <div className="space-y-2">
                {pendingFiles.map((file, index) => (
                  <div
                    key={`${file.name}-${index}`}
                    className="flex items-center justify-between p-4 bg-muted/50 rounded-lg border border-border/50"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-foreground/90">
                          {truncateFilename(file.name)}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <ConversionList items={conversions} />
            )}
          </div>
        )}

        {/* Info Section */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">About This Tool</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold mb-2">Features</h4>
              <ul className="space-y-2">
                {toolConfig.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-green-500 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">How to Use</h4>
              <ol className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>1. Click or drag files into the upload area</li>
                <li>2. Wait for files to be selected (up to 20 files)</li>
                <li>3. Click "Start Conversion" to begin processing</li>
                <li>4. Download your converted files individually or as ZIP</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </main>
    </>
  );
}
