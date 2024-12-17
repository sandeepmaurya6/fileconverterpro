'use client';

import { useState, useMemo } from 'react';
import { Dropzone } from '@/components/ui/dropzone';
import { ConversionList } from '@/components/conversion-list';
import { convertFile } from '@/lib/converters';
import { FormatSelector } from '@/components/converter/format-selector';
import { OptimizationSettings } from '@/components/converter/optimization-settings';
import { useConversions } from '@/hooks/use-conversions';
import { Button } from '@/components/ui/button';
import { Download, Loader2, Play, Upload, X } from 'lucide-react';
import { truncateFilename } from '@/lib/utils';
import { FORMAT_CATEGORIES, type ConversionFormat } from '@/lib/constants';
import { useToast } from '@/hooks/use-toast';
import { saveAs } from 'file-saver';
import JSZip from 'jszip';
import { FeaturesList } from '@/components/features-list';
import { HowItWorks } from '@/components/how-it-works';
import { getFormatDetails } from '@/lib/fileHandlers';
import type { ConversionItem } from '@/lib/types';
import Clarity from '@microsoft/clarity';
import Script from 'next/script'

// Make sure to add your actual project id instead of "yourProjectId".
const projectId = "yourProjectId"

Clarity.init(projectId);

export default function Home() {

  <Script
        strategy="afterInteractive"
        src={`https://www.clarity.ms/tag/pdvicfq93t`}
      />
  const { toast } = useToast();
  const { conversions, addConversions, clearConversions } = useConversions();
  const [isConverting, setIsConverting] = useState(false);
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const [progress, setProgress] = useState(0);
  const [format, setFormat] = useState<ConversionFormat>('webp-to-png');
  const [targetSizeKB, setTargetSizeKB] = useState<number>(100);

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
      ? 2048 * 1024 * 1024  // 500MB for videos
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
    <main className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto p-6 space-y-12">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">
            Free {formatDetails?.label || 'File'} Converter
          </h1>
          <p className="text-slate-600">
            Convert, compress, and optimize your files directly in your browser.
            No upload limits, no registration required, and your files never leave your device.
          </p>
        </div>
        
        <div className="space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <FormatSelector
              value={format}
              onChange={(newFormat) => {
                setFormat(newFormat);
                setPendingFiles([]);
                clearConversions();
              }}
              disabled={isConverting || hasPendingFiles}
            />
            
            {(format === 'png-optimize' || format === 'jpeg-optimize') && (
              <OptimizationSettings
                onTargetSizeChange={setTargetSizeKB}
                disabled={isConverting}
              />
            )}
          </div>

          {!hasPendingFiles && !conversions.length && formatDetails && (
            <Dropzone
              onFilesDrop={handleFilesDrop}
              className="transition-all duration-200 hover:border-primary/50"
              disabled={isConverting}
              accept={formatDetails.accept}
              text={formatDetails.dropzoneText}
            />
          )}

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
                      {/* <Button
                        variant="outline"
                        onClick={() => handleFilesDrop([])}
                        disabled={isConverting}
                        className="min-w-[120px]"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload More
                      </Button> */}
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
                      {/* <Button
                        variant="outline"
                        onClick={() => handleFilesDrop([])}
                        disabled={isConverting}
                        className="min-w-[120px]"
                      >
                        <Upload className="h-4 w-4 mr-2" />
                        Upload More
                      </Button> */}
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
                  {pendingFiles.map((file) => (
                    <div
                      key={file.name}
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
        </div>

        <FeaturesList />
        <HowItWorks />
      </div>
    </main>
  );
}