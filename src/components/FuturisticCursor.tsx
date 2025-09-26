"use client";

import React, { useEffect, useState } from 'react';

const FuturisticCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [particles, setParticles] = useState<Array<{
    id: number;
    x: number;
    y: number;
    opacity: number;
    scale: number;
  }>>([]);

  useEffect(() => {
    const updateCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      
      // Create new particles occasionally
      if (Math.random() > 0.7) {
        const newParticle = {
          id: Date.now() + Math.random(),
          x: e.clientX,
          y: e.clientY,
          opacity: 1,
          scale: 0.3 + Math.random() * 0.4,
        };
        
        setParticles(prev => [...prev.slice(-15), newParticle]);
      }
    };

    const handleMouseEnter = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.getAttribute('role') === 'button') {
        setIsHovering(false);
      }
    };

    document.addEventListener('mousemove', updateCursor);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updateCursor);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  // Remove particles after animation
  useEffect(() => {
    const timer = setInterval(() => {
      setParticles(prev => prev.filter(p => p.opacity > 0.1));
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <div
        className="fixed pointer-events-none z-[9999] transition-all duration-150 ease-out"
        style={{
          left: cursorPosition.x - 15,
          top: cursorPosition.y - 15,
          transform: isHovering ? 'scale(1.3)' : 'scale(1)',
        }}
      >
        {/* Outer Glow Ring */}
        <div 
          className={`absolute inset-0 rounded-full transition-all duration-300 ${
            isHovering 
              ? 'bg-gradient-to-r from-[#2A3BCF]/40 to-[#DD0000]/40 blur-sm scale-150' 
              : 'bg-gradient-to-r from-[#2A3BCF]/20 to-[#DD0000]/20 blur-sm scale-100'
          }`}
        />
        
        {/* Metallic Cursor Body */}
        <div 
          className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
            isHovering
              ? 'border-white bg-gradient-to-br from-slate-200 via-white to-slate-300 shadow-lg shadow-[#2A3BCF]/60'
              : 'border-[#2A3BCF] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 shadow-lg shadow-[#2A3BCF]/40'
          }`}
        >
          {/* Inner Glow */}
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-white/30 to-transparent" />
        </div>
        
        {/* Center Dot */}
        <div 
          className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
            isHovering 
              ? 'bg-[#DD0000] shadow-sm shadow-[#DD0000]/60' 
              : 'bg-[#2A3BCF] shadow-sm shadow-[#2A3BCF]/60'
          }`}
        />
      </div>

      {/* Particle Trail */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none z-[9998] w-1 h-1 rounded-full"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
            opacity: particle.opacity,
            transform: `scale(${particle.scale})`,
            background: `radial-gradient(circle, rgba(42, 59, 207, ${particle.opacity}) 0%, rgba(221, 0, 0, ${particle.opacity * 0.6}) 50%, transparent 100%)`,
            animation: `particleFade 1s ease-out forwards`,
          }}
        />
      ))}

      {/* Ripple Effect on Hover */}
      {isHovering && (
        <div
          className="fixed pointer-events-none z-[9997] w-24 h-24 rounded-full border border-[#2A3BCF]/40"
          style={{
            left: cursorPosition.x - 48,
            top: cursorPosition.y - 48,
            animation: 'ripple 0.8s ease-out forwards',
          }}
        />
      )}
    </>
  );
};

export default FuturisticCursor;


