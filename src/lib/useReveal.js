import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "./gsap";

/**
 * Révélation au scroll via GSAP ScrollTrigger.
 * Contenu visible par défaut (pas de blank si JS/ST absent).
 * stagger > 0 : anime les enfants directs.
 */
export const useReveal = ({
  y = 20,
  duration = 0.7,
  stagger = 0,
  delay = 0,
  blur = 0,
  ease = "power4.out",
  start = "top 88%",
} = {}) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const targets = stagger > 0 ? Array.from(el.children) : el;
    if (!targets || (Array.isArray(targets) && targets.length === 0)) return;

    if (prefersReducedMotion()) return;

    const from = { opacity: 0, y };
    const to = {
      opacity: 1,
      y: 0,
      duration,
      delay,
      ease,
      stagger: stagger || 0,
      immediateRender: false,
      scrollTrigger: {
        trigger: el,
        start,
        toggleActions: "play none none none",
      },
    };

    if (blur > 0) {
      from.filter = `blur(${blur}px)`;
      to.filter = "blur(0px)";
    }

    const tween = gsap.fromTo(targets, from, to);

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [y, duration, stagger, delay, blur, ease, start]);

  return ref;
};
