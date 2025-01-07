import { useState, useEffect } from 'react';

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
}

export const ImageWithLoader = ({ src, alt, className = '' }: ImageWithLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImageSrc(src);
      setIsLoading(false);
    };
  }, [src]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse" />
      )}
      <img
        src={imageSrc}
        alt={alt}
        loading="lazy"
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-300'}`}
      />
    </div>
  );
};