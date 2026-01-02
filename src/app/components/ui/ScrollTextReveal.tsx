"use client";
import { cn } from "@/lib/utils";
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useRef } from "react";

interface ScrollTextRevealProps {
  text: string;
  className?: string;
}

export const ScrollTextReveal = ({ text, className }: ScrollTextRevealProps) => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = text.split(" ");

  return (
    <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
      <div className={"sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"}>
        {/* FIX 1: Forced text-white/20 (grey) for the 'dimmed' state */}
        <p className={"flex flex-wrap p-5 text-2xl font-bold text-white/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl"}>
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </p>
      </div>
    </div>
  );
};

interface WordProps {
  children: React.ReactNode;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-2.5">
      {/* FIX 2: Forced text-white for the background shadow */}
      <span className={"absolute opacity-30 text-white"}>{children}</span>
      
      {/* FIX 3: Forced text-white for the main text. Removed 'text-black' completely. */}
      <motion.span
        style={{ opacity: opacity }}
        className={"text-white"}
      >
        {children}
      </motion.span>
    </span>
  );
};