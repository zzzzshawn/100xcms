"use client";
import { ReactNode, useRef, useState } from "react";

import { cn } from "@/lib/utils";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";

const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("grid w-full  grid-cols-3 gap-3 max-sm:gap-2", className)}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  className,
  background,
  initial,
  animate,
  transition,
}: {
  className: string;
  initial: object;
  animate: object;
  transition: object;
  background: ReactNode;
}) => {
  const constraintsRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 90, stiffness: 1000 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const scale = useTransform(
    [springX, springY],
    ([latestX, latestY]) => 1 - Math.abs(latestX + latestY) / 1000
  );

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => {
    setIsDragging(false);
    springX.set(0);
    springY.set(0);
  };

  return (
    <motion.div
      ref={constraintsRef}
      drag
      dragConstraints={constraintsRef}
      dragElastic={0.4}
      dragMomentum={false}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      style={{ x: springX, y: springY, scale }}
      whileTap={{ scale: 1 }}
      role="button"
      tabIndex={0}
      aria-label="Draggable element"
      initial={initial}
      animate={animate}
      transition={transition}
      className={cn(
        "group relative flex w-full overflow-hidden rounded-xl border ",
        // light styles
        "transform-gpu bg-dark-1 [box-shadow:0_0px_60px_-20px_#ffffff1f_inset]",
        className
      )}
    >
      <div className=" w-full h-full">{background}</div>

      <div
        className={cn(
          "pointer-events-none h-0 absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 "
        )}
      ></div>
      <div className="pointer-events-none h-0 absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-neutral-800/10" />
    </motion.div>
  );
};

export { BentoCard, BentoGrid };
