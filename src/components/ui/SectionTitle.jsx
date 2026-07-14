import React from "react";
import { useSplitText } from "../../lib/useSplitText";

const SectionTitle = ({ children, subtitle, className = "" }) => {
  const titleRef = useSplitText({ stagger: 0.05, duration: 0.7 });
  const subRef = useSplitText({ stagger: 0.03, duration: 0.55, delay: 0.08 });

  return (
    <div className={`mb-12 ${className}`}>
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
