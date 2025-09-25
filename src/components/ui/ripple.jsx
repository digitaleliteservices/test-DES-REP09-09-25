import React from "react";
import { cn } from "@/lib/utils";

const LOGO_GRADIENT =
  // "linear-gradient(90deg, #00E5FF 0%, #2C6DF6 52%, #FF8A00 100%)";
  // "linear-gradient(360deg, #00FFE0 0%, #3399FF 52%, #FFEA00 100%)";
  // "linear-gradient(360deg, #00FFFF 0%, #1E90FF 52%, #FFD700 100%)";
  "linear-gradient(360deg, #00FFFF 0%, #3B82FF 52%, #FFD700 100%)";

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
            className="absolute animate-ripple rounded-full"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              background: LOGO_GRADIENT,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)",
              border: "1px solid rgba(255,255,255,0.2)",

              // ✨ Color visibility boost
              backgroundClip: "padding-box",
              mixBlendMode: "screen", // makes bright colors pop against background
              filter: "saturate(1.6) contrast(1.2)", // boost color vibrancy & contrast
              boxShadow:
                "0 0 25px rgba(255,138,0,0.25), 0 0 45px rgba(44,109,246,0.2)", // subtle glow
            }}
          />
        );
      })}
    </div>
  );
});

Ripple.displayName = "Ripple";
