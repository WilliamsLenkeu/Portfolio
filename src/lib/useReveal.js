import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./gsap";

/**
 * Révélation au scroll (opacité + translation) via GSAP ScrollTrigger.
 * stagger > 0 : anime les enfants directs de l'élément au lieu de l'élément.
 */
export const useReveal = ({ y = 18, duration = 0.6, stagger = 0, delay = 0 } = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger > 0 ? Array.from(el.children) : el;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(targets, { opacity: 0, y });
    const tween = gsap.to(targets, {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease: "power3.out",
      stagger,
      scrollTrigger: { trigger: el, start: "top 85%", toggleActions: "play none none none" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, duration, stagger, delay]);

  return ref;
};
