"use client";

import React, { useEffect, useState } from 'react';

const SimpleBlueCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    
    const updateCursor = (e: MouseEvent) => {
      // Use requestAnimationFrame for smooth 60fps updates
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      
      animationFrame = requestAnimationFrame(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button' || target.closest('a') || target.closest('button')) {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateCursor, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <div
      className={`fixed pointer-events-none z-[9999] rounded-full border-2 transition-all duration-150 ease-out ${
        isHovering
          ? 'w-8 h-8 border-white bg-gradient-to-br from-red-200 via-red-300 to-red-400 shadow-lg shadow-[#DD0000]/60'
          : 'w-6 h-6 border-[#2A3BCF] bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 shadow-lg shadow-[#2A3BCF]/60'
      }`}
      style={{
        left: cursorPosition.x - (isHovering ? 16 : 12),
        top: cursorPosition.y - (isHovering ? 16 : 12),
        transform: isHovering ? 'scale(1.2)' : 'scale(1)',
        willChange: 'transform, left, top',
      }}
    >
      {/* Center dot */}
      <div 
        className={`absolute top-1/2 left-1/2 w-1.5 h-1.5 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-150 ${
          isHovering ? 'bg-white' : 'bg-[#2A3BCF]'
        }`}
      />
    </div>
  );
};

export default SimpleBlueCursor;
