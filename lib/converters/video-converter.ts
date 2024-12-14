import { EventEmitter } from 'events';

interface ConversionResult {
  name: string;
  url: string;
  blob: Blob;
}

interface ConversionProgress {
  onProgress: (progress: number) => void;
}

export async function convertVideo(
  file: File,
  format: 'mp4-to-mp3' | 'mov-to-mp4',
  { onProgress }: ConversionProgress = { onProgress: () => {} }
): Promise<ConversionResult> {
  return new Promise(async (resolve, reject) => {
    try {
      const videoElement = document.createElement('video');
      const mediaSource = new MediaSource();
      videoElement.src = URL.createObjectURL(mediaSource);

      if (format === 'mp4-to-mp3') {
        const audioContext = new AudioContext();
        const source = audioContext.createMediaElementSource(videoElement);
        const destination = audioContext.createMediaStreamDestination();
        source.connect(destination);

        const mediaRecorder = new MediaRecorder(destination.stream);
        const chunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'audio/mp3' });
          const baseName = file.name.replace(/\.[^/.]+$/, '');
          resolve({
            name: `${baseName}.mp3`,
            url: URL.createObjectURL(blob),
            blob,
          });
        };

        videoElement.onloadedmetadata = () => {
          mediaRecorder.start();
          videoElement.play();
        };

        // Track progress
        videoElement.ontimeupdate = () => {
          const progress =
            (videoElement.currentTime / videoElement.duration) * 100;
          onProgress(Math.round(progress));
        };

        videoElement.onended = () => {
          mediaRecorder.stop();
          audioContext.close();
        };
      } else if (format === 'mov-to-mp4') {
        const mediaRecorder = new MediaRecorder(
          (videoElement as any).captureStream()
        );
        const chunks: BlobPart[] = [];

        mediaRecorder.ondataavailable = (e) => chunks.push(e.data);
        mediaRecorder.onstop = () => {
          const blob = new Blob(chunks, { type: 'video/mp4' });
          const baseName = file.name.replace(/\.[^/.]+$/, '');
          resolve({
            name: `${baseName}.mp4`,
            url: URL.createObjectURL(blob),
            blob,
          });
        };

        videoElement.onloadedmetadata = () => {
          mediaRecorder.start();
          videoElement.play();
        };

        // Track progress
        videoElement.ontimeupdate = () => {
          const progress =
            (videoElement.currentTime / videoElement.duration) * 100;
          onProgress(Math.round(progress));
        };

        videoElement.onended = () => {
          mediaRecorder.stop();
        };
      }

      videoElement.src = URL.createObjectURL(file);
    } catch (error) {
      reject(new Error('Failed to convert video: ' + (error as Error).message));
    }
  });
}
