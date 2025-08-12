"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  alt: string;
  className?: string;
}

export default function ImageCarousel({ images, alt, className = "" }: ImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [shuffledImages, setShuffledImages] = useState<string[]>([]);
  const [isClient, setIsClient] = useState(false);

  // Use original images order on server, shuffled on client
  const displayImages = isClient ? shuffledImages : images;

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (!isClient) return;
    
    // Shuffle the images array only on the client side
    const shuffleArray = (array: string[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    setShuffledImages(shuffleArray(images));
  }, [images, isClient]);

  useEffect(() => {
    if (displayImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === displayImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [displayImages.length]);

  if (!images || images.length === 0) return null;

  return (
    <div 
      className={`relative w-full aspect-[4/3] overflow-hidden ${className}`}
      style={{ borderRadius: '12px' }}
    >
      {displayImages.map((image: string, index: number) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-300 ease-linear ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${alt} - Work sample ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      ))}
    </div>
  );
} 