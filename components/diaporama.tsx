'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface DiaporamaProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
}

export default function Diaporama({ images, currentIndex, isOpen, onClose, projectTitle }: DiaporamaProps) {
  const [activeIndex, setActiveIndex] = useState(currentIndex);

  useEffect(() => {
    setActiveIndex(currentIndex);
  }, [currentIndex]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        goToPrevious();
        break;
      case 'ArrowRight':
        goToNext();
        break;
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-white bg-opacity-90 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Left side click area for previous */}
      <div 
        className="absolute left-0 top-0 w-1/2 h-full cursor-w-resize z-20"
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
      />
      
      {/* Right side click area for next */}
      <div 
        className="absolute right-0 top-0 w-1/2 h-full cursor-e-resize z-20"
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
      />

      {/* Image container */}
      <div 
        className="relative max-w-full max-h-full z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[activeIndex]}
          alt={`${projectTitle} - Image ${activeIndex + 1}`}
          width={1200}
          height={800}
          className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain"
          priority
        />
      </div>

      {/* Close button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-4 right-4 w-20 h-20 flex items-center justify-center hover:opacity-80 transition-opacity duration-200 z-30"
        aria-label="Close diaporama"
      >
        <div className="relative w-20 h-20">
          <div className="absolute top-1/2 left-1/2 w-12 h-px bg-black transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute top-1/2 left-1/2 w-12 h-px bg-black transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </div>
      </button>

      {/* Navigation arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevious();
        }}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black text-4xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-20"
        aria-label="Previous image"
      >
        ‹
      </button>
      
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNext();
        }}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-black text-4xl opacity-0 hover:opacity-100 transition-opacity duration-200 z-20"
        aria-label="Next image"
      >
        ›
      </button>
    </div>
  );
}
