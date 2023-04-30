import gsap from "gsap";

interface AnimatedValueEffectOptions {
  value: number;
}

interface AnimatedCounterEffectOptions {
  duration: number;
  end: number;
  increment: number;
  ease: string;
}


export const animatedValueEffect = (targets: any, options: AnimatedValueEffectOptions) => {
  return gsap.fromTo(
    targets,
    { innerText: 0.00 },
    {
      duration: 0.2,
      innerText: (options.value * 0.1),
      ease: "none",
    }
  );
};


export function counterAnimation(targets: any, config: AnimatedCounterEffectOptions) {
  let tl = gsap.timeline()
  let num = targets[0].innerText.replace(/\,/g,'')
  targets[0].innerText = num
  
  tl.to(targets, {
    duration: config.duration,
    innerText: config.end,
    modifiers: {
      innerText: function(innerText) {
        return gsap.utils.snap(config.increment, innerText)
          .toFixed(2)
          .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
    },
    ease: config.ease
  }, 0)
  
  return tl;
}

gsap.registerEffect({
  name: "counterAnimation",
  extendTimeline: true,
  defaults: {
    end: 0,
    duration: 0.5,
    ease: "power1",
    increment: 1
  },
  effect: counterAnimation
});




gsap.registerEffect({
  name: "animatedValueEffect",
  effect: animatedValueEffect,
  extendTimeline: true
});


export {gsap}