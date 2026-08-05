'use client';

import { useEffect, useState } from 'react';

export default function AnimatedCursor() {
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      setCoords({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener('pointermove', handlePointerMove);
    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999]">
      <div
        className="absolute h-3 w-3 rounded-full bg-sky-300/90 shadow-[0_0_30px_rgba(59,130,246,0.35)]"
        style={{ transform: `translate3d(${coords.x - 6}px, ${coords.y - 6}px, 0)` }}
      />
      <div
        className="absolute h-16 w-16 rounded-full border border-sky-300/20"
        style={{ transform: `translate3d(${coords.x - 32}px, ${coords.y - 32}px, 0)` }}
      />
    </div>
  );
}
