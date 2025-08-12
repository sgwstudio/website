"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface HoverCarouselProps {
  coverImage: string;
  flashImages: string[];
  alt: string;
  className?: string;
}

export default function HoverCarousel({ coverImage, flashImages, alt, className = "" }: HoverCarouselProps) {
  const [isHovering, setIsHovering] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Check if mobile on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Handle flashing animation
  useEffect(() => {
    if (flashImages.length === 0) return;

    const shouldFlash = isMobile || isHovering;
    
    if (shouldFlash) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === flashImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 200); // 5 images per second = 200ms per image
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovering, isMobile, flashImages.length]);

  if (!coverImage || flashImages.length === 0) return null;

  return (
    <div 
      className={`relative w-full aspect-[4/3] overflow-hidden ${className}`}
      style={{ borderRadius: '12px' }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Cover Image - always visible on desktop when not hovering */}
      {(!isMobile && !isHovering) && (
        <div className="absolute inset-0">
          <Image
            src={coverImage}
            alt={`${alt} - Cover`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            draggable={false}
          />
        </div>
      )}

      {/* Flash Images */}
      {flashImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-50 ease-linear ${
            (isMobile || isHovering) && index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={image}
            alt={`${alt} - Flash ${index + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
} 