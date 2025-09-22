import React from "react";
import { cn } from "@/lib/utils";

const LOGO_GRADIENT =
  "linear-gradient(90deg, #00E5FF 0%, #2C6DF6 52%, #FF8A00 100%)";

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 select-none [mask-image:linear-gradient(to_bottom,white,transparent)]",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;

        return (
          <div
            key={i}
            className="absolute animate-ripple rounded-full shadow-xl"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              background: LOGO_GRADIENT,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
              border: "1px solid transparent",
              backgroundClip: "padding-box",
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
