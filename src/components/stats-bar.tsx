"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  value: number;
};

export const StatsBar = ({ value }: Props) => {
  const barRef = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    gsap.to(barRef.current, {
      width: `${(value / 255) * 100}%`,
      duration: 0.7,
      ease: `rough({ template: bounce.out, strength: 1, points: 10, taper: out, randomize: true, clamp: false})`,
    });
  }, [value]);

  return (
    <div className="bg-gray-200 w-full h-4 rounded-full overflow-hidden">
      <div
        ref={barRef}
        className="bg-black h-full"
        style={{ width: "0%" }}
      ></div>
    </div>
  );
};
