import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const SectionTitle = ({ children, subtitle, className = "" }) => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    if (!ref.current) return;

    if (prefersReducedMotion()) {
      gsap.set(ref.current, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(ref.current, { opacity: 0, y: 16 });
    const tween = gsap.to(ref.current, {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ref.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <div ref={ref} className={`mb-12 ${className}`}>
      <h2 className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight text-ink">
        {children}
        <span className="text-cobalt">.</span>
      </h2>
      {subtitle && <p className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
