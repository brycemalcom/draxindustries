"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  rootMargin?: string;
}

export default function LazySection({ 
  children, 
  className = "", 
  threshold = 0.1,
  rootMargin = "50px"
}: LazySectionProps) {
  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce: true, // Only trigger once for performance
  });

  return (
    <div ref={ref} className={className}>
      {inView ? children : (
        <div className="min-h-[400px] flex items-center justify-center">
          <div className="animate-pulse">
            <div className="h-4 bg-muted rounded w-48 mb-4"></div>
            <div className="h-4 bg-muted rounded w-64"></div>
          </div>
        </div>
      )}
    </div>
  );
} 