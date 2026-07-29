import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface CharacterProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Character: React.FC<CharacterProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return <motion.span style={{ opacity }}>{char}</motion.span>;
};

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const words = text.split(' ');
  let charCount = 0;
  const wordChars = words.map((word) => {
    const chars = word.split('');
    const startIndex = charCount;
    charCount += chars.length;
    return { word, chars, startIndex };
  });

  const totalChars = Math.max(1, charCount);

  return (
    <p
      ref={containerRef}
      className={`text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)] flex flex-wrap justify-center gap-x-[0.35em] gap-y-1 ${className}`}
    >
      {wordChars.map(({ chars, startIndex }, wIdx) => (
        <span key={wIdx} className="inline-block whitespace-nowrap">
          {chars.map((char, cIdx) => {
            const globalIdx = startIndex + cIdx;
            const start = globalIdx / totalChars;
            const end = Math.min(1, (globalIdx + 3) / totalChars);
            return (
              <Character
                key={cIdx}
                char={char}
                progress={scrollYProgress}
                range={[start, end]}
              />
            );
          })}
        </span>
      ))}
    </p>
  );
};
