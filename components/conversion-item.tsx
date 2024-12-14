import { formatTime } from '@/lib/time';
import { formatFileSize, calculateSizeReduction } from '@/lib/utils/size';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import type { ConversionItem } from '@/lib/types';

interface ConversionItemProps {
  item: ConversionItem;
  onDownload: (url: string, name: string) => void;
}

export function ConversionItemDisplay({
  item,
  onDownload,
}: ConversionItemProps) {
  const showSizeComparison =
    item.format &&
    (item.format === 'png-to-webp' ||
      item.format === 'png-optimize' ||
      item.format === 'jpeg-optimize');

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg border transition-colors duration-200 ${
        item.status === 'error'
          ? 'bg-destructive/10 border-destructive/20'
          : item.status === 'completed'
          ? 'bg-muted/50 border-border/50 hover:bg-muted/70'
          : 'bg-muted/30 border-border/30'
      }`}
    >
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium truncate">{item.name}</p>

        {item.status === 'completed' &&
          showSizeComparison &&
          item.originalSize &&
          item.newSize && (
            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1">
              <span className="line-through">
                {formatFileSize(item.originalSize)}
              </span>
              <span className="text-emerald-500">
                -{calculateSizeReduction(item.originalSize, item.newSize)}% (
                {formatFileSize(item.newSize)})
              </span>
              <span className="text-muted-foreground">
                done in {formatTime(item.timeTaken)}
              </span>
            </p>
          )}

        {item.status === 'completed' && !showSizeComparison && (
          <p className="text-xs text-emerald-500 mt-0.5">
            Converted in {formatTime(item.timeTaken)}
          </p>
        )}
      </div>

      {item.status === 'completed' && (
        <Button
          size="sm"
          variant="ghost"
          onClick={() => onDownload(item.url, item.name)}
          className="hover:bg-background"
        >
          <Download className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
