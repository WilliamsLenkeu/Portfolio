import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./gsap";

/** Fade simple pour blocs non textuels (stats, listes, etc.). */
export const useReveal = ({
  duration = 0.5,
  stagger = 0,
  delay = 0,
  ease = "power2.out",
  start = "top 90%",
} = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger > 0 ? Array.from(el.children) : el;
    if (!targets || (Array.isArray(targets) && targets.length === 0)) return;
    if (prefersReducedMotion()) return;

    const tween = gsap.from(targets, {
      autoAlpha: 0,
      duration,
      delay,
      ease,
      stagger: stagger || 0,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
      gsap.set(targets, { clearProps: "opacity,visibility" });
    };
  }, [duration, stagger, delay, ease, start]);

  return ref;
};
