import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap/index";

type Props = {
  value: number;
};

export const AnimatedValue = ({ value }: Props) => {
  const valueRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const context = gsap.context(() => {
      gsap.effects.counterAnimation(
        valueRef.current,
        {
          end: value,
          ease: "linear",
          // duration: 0.5,
        },
        "-=0.02"
      );
    });

    return () => {
      context.revert();
    };
  }, []);

  return (
    <span className="" ref={valueRef}>
      0.00
    </span>
  );
};
