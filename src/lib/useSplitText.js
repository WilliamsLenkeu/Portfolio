import { useLayoutEffect, useRef } from "react";
import { gsap, SplitText, prefersReducedMotion } from "./gsap";

/**
 * Reveal texte propre via GSAP SplitText (mask lines + stagger words).
 * Pattern officiel GreenSock — pas de y custom bricolé.
 */
export const useSplitText = ({
  type = "words,lines",
  mask = "lines",
  duration = 0.65,
  stagger = 0.04,
  delay = 0,
  ease = "power2.out",
  start = "top 90%",
  scrub = false,
} = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let split;
    let tween;

    const ctx = gsap.context(() => {
      split = SplitText.create(el, {
        type,
        mask,
        autoSplit: true,
        aria: "auto",
        onSplit(self) {
          const targets = self.words?.length ? self.words : self.lines;
          tween = gsap.from(targets, {
            yPercent: 110,
            duration,
            delay,
            stagger,
            ease,
            scrollTrigger: scrub
              ? { trigger: el, start: "top 90%", end: "top 40%", scrub: true }
              : {
                  trigger: el,
                  start,
                  toggleActions: "play none none none",
                  once: true,
                },
          });
          return tween;
        },
      });
    }, el);

    return () => {
      tween?.scrollTrigger?.kill();
      tween?.kill();
      split?.revert?.();
      ctx.revert();
    };
  }, [type, mask, duration, stagger, delay, ease, start, scrub]);

  return ref;
};
