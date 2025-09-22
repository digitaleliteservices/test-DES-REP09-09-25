// components/ui/interactive-grid-pattern.jsx
"use client";
import React, { useMemo } from "react";
import { cn } from "@/lib/utils";

export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  pointer = null, // { x, y } in px relative to svg top-left OR null
  className,
  squaresClassName,
  ...props
}) {
  const [horizontal, vertical] = squares;

  const totalWidth = width * horizontal;
  const totalHeight = height * vertical;

  // compute the active index from pointer
  const activeIndex = useMemo(() => {
    if (!pointer) return null;
    const px = Math.max(0, Math.min(pointer.x, totalWidth - 1));
    const py = Math.max(0, Math.min(pointer.y, totalHeight - 1));
    const col = Math.floor(px / width);
    const row = Math.floor(py / height);
    return row * horizontal + col;
  }, [pointer, width, height, horizontal, totalWidth]);

  return (
    <svg
      width={totalWidth}
      height={totalHeight}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      preserveAspectRatio="none"
      className={cn("w-full h-full", className)}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        const isActive = activeIndex === index;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            className={cn(
              "stroke-gray-300/30 transition-all duration-150",
              isActive ? "fill-indigo-100/30" : "fill-transparent",
              squaresClassName
            )}
            style={{ pointerEvents: "none" }}
            rx={4}
            ry={4}
          />
        );
      })}
    </svg>
  );
}
