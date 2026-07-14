import React, { useEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

/** Compteur animé au scroll. Valeur non numérique (ex. "—") rendue telle quelle. */
const CountUp = ({ value, suffix = "", className = "" }) => {
  const ref = useRef(null);
  const target = typeof value === "number" ? value : parseInt(value, 10);

  useEffect(() => {
    const el = ref.current;
    if (!el || Number.isNaN(target)) return;

    if (prefersReducedMotion()) {
      el.textContent = String(target);
      return;
    }

    const counter = { n: 0 };
    const tween = gsap.to(counter, {
      n: target,
      duration: 1.2,
      ease: "power2.out",
      snap: { n: 1 },
      onUpdate: () => {
        el.textContent = String(Math.round(counter.n));
      },
      scrollTrigger: { trigger: el, start: "top 90%", toggleActions: "play none none none" },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, [target]);

  if (Number.isNaN(target)) return <span className={className}>{value}</span>;

  return (
    <span className={className}>
      <span ref={ref}>0</span>
      {suffix}
    </span>
  );
};

export default CountUp;
