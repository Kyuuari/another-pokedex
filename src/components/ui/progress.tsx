"use client";
import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type Props = React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> & {
  value?: number;
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  Props
>(({ className, value = 0, ...props }, ref) => {
  const indicatorRef = React.useRef(null);
  const [progressValue, setProgressValue] = React.useState(0);

  React.useEffect(() => {
    const tl = gsap.timeline();
    tl.to(indicatorRef.current, {
      duration: 0.8,
      width: `${(value / 255) * 100}%`,
      ease: `rough({ template: bounce.out, strength: 1, points: 10, taper: out, randomize: true, clamp: false})`,
      onUpdate: () => {
        setProgressValue(Math.round((value / 255) * 100));
      },
    });
  }, [value]);

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        ref={indicatorRef}
        className="h-full w-0 bg-primary transition-all"
        style={{ width: `${progressValue}%` }}
      />
    </ProgressPrimitive.Root>
  );
});
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
