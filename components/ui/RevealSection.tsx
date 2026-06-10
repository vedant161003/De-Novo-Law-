"use client";

import { useRef, ReactNode, CSSProperties } from "react";
import { motion, useInView } from "framer-motion";

interface RevealSectionProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  once?: boolean;
}

export default function RevealSection({
  children,
  className = "",
  style,
  delay = 0,
  direction = "up",
  once = true,
}: RevealSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px 0px" });

  const directionMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const initial = { opacity: 0, ...directionMap[direction] };
  const animate = isInView ? { opacity: 1, y: 0, x: 0 } : initial;

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={animate}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
