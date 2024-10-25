import React, { useEffect, useState } from 'react';

interface ImageData {
  filename: string;
  content: number[];
}

const ImageViewer: React.FC<ImageData> = ({ filename, content }) => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Convert array of numbers to a Uint8Array
    const byteArray = new Uint8Array(content);
    // Create a blob from the Uint8Array
    const blob = new Blob([byteArray], { type: 'image/jpeg' });
    // Create a URL for the blob
    const url = URL.createObjectURL(blob);
    // Set the image source
    setImageSrc(url);

    // Clean up the URL object when the component unmounts
    return () => {
      URL.revokeObjectURL(url);
    };
  }, [content]);

  return (
    <div>
      {imageSrc && <img src={imageSrc} alt={filename} />}
    </div>
  );
};

export default ImageViewer;