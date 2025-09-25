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
  // customization knobs:
  activeAlpha = 0.62,
  inactiveAlpha = 0.0,
  borderInset = 2, // how much smaller inner fill is than outer stroke
  strokeColor = "rgba(148,163,184,0.30)",
  strokeWidth = 0.3,
  popScale = 1.03,
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

  // deterministic hue for each index (good distribution)
  const hueForIndex = (index) => {
    const step = 137.50776405003785; // golden angle degrees
    return Math.round((index * step) % 360);
  };

  // precompute cell positions to avoid re-calculation inside render
  const cells = useMemo(() => {
    return Array.from({ length: horizontal * vertical }).map((_, index) => {
      const x = (index % horizontal) * width;
      const y = Math.floor(index / horizontal) * height;
      const cx = x + width / 2;
      const cy = y + height / 2;
      return { index, x, y, cx, cy };
    });
  }, [horizontal, vertical, width, height]);

  return (
    <svg
      width={totalWidth}
      height={totalHeight}
      viewBox={`0 0 ${totalWidth} ${totalHeight}`}
      preserveAspectRatio="none"
      className={cn("w-full h-full", className)}
      {...props}
    >
      {cells.map(({ index, x, y }) => {
        const isActive = activeIndex === index;
        const hue = hueForIndex(index);
        const activeFill = `hsla(${hue}, 92%, 56%, ${activeAlpha})`;
        const inactiveFill = `rgba(0,0,0,0)`; // fully transparent

        const inset = Math.max(0, Math.min(borderInset, Math.floor(width / 4)));
        const innerX = x + inset;
        const innerY = y + inset;
        const innerW = Math.max(0, width - inset * 2);
        const innerH = Math.max(0, height - inset * 2);
        const innerRx = Math.max(0, 4 - inset);

        return (
          <g key={index} className={squaresClassName}>
            {/* outer stroke rect (grid lines): always visible */}
            <rect
              x={x}
              y={y}
              width={width}
              height={height}
              rx={4}
              ry={4}
              fill="transparent"
              stroke={strokeColor}
              strokeWidth={strokeWidth}
              vectorEffect="non-scaling-stroke"
              style={{
                pointerEvents: "none",
                transition: "stroke 120ms linear",
              }}
            />

            {/* inner fill rect: inset so stroke remains visible */}
            <rect
              x={innerX}
              y={innerY}
              width={innerW}
              height={innerH}
              rx={innerRx}
              ry={innerRx}
              fill={isActive ? activeFill : inactiveFill}
              style={{
                pointerEvents: "none",
                transition:
                  "fill 140ms linear, transform 140ms linear, opacity 140ms linear",
                opacity: isActive ? 1 : 0,
                transformOrigin: `${x + width / 2}px ${y + height / 2}px`,
                transform: isActive ? `scale(${popScale})` : "scale(1)",
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}
