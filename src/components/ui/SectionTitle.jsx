import React, { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const SectionTitle = ({ children, subtitle, className = "" }) => {
  const wrapRef = useRef(null);
  const titleRef = useRef(null);
  const subRef = useRef(null);

  useLayoutEffect(() => {
    const wrap = wrapRef.current;
    const title = titleRef.current;
    if (!wrap || !title) return;

    if (prefersReducedMotion()) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrap,
        start: "top 88%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      title,
      { clipPath: "inset(0 0 100% 0)", y: 18, opacity: 0 },
      { clipPath: "inset(0 0 0% 0)", y: 0, opacity: 1, duration: 0.85, ease: "power4.out", immediateRender: false }
    );

    if (subRef.current) {
      tl.fromTo(
        subRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", immediateRender: false },
        "-=0.45"
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <div ref={wrapRef} className={`mb-12 ${className}`}>
      <h2
        ref={titleRef}
        className="text-[clamp(2rem,4.5vw,3rem)] font-extrabold tracking-tight text-ink"
      >
        {children}
        <span className="text-cobalt">.</span>
      </h2>
      {subtitle && (
        <p ref={subRef} className="mt-3 max-w-[60ch] text-[15px] leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
