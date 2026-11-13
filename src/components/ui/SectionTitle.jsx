import React from "react";
import { useSplitText } from "../../lib/useSplitText";

const SectionTitle = ({ children, subtitle, side = false, className = "" }) => {
  const titleRef = useSplitText({ stagger: 0.04, duration: 0.65 });
  const subRef = useSplitText({ stagger: 0.025, duration: 0.5, delay: 0.06 });

  if (side) {
    return (
      <div
        className={`grid grid-cols-1 gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(12rem,28%)] sm:items-end sm:gap-10 ${className}`}
      >
        <h2
          ref={titleRef}
          className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight text-ink"
        >
          {children}.
        </h2>
        {subtitle && (
          <p
            ref={subRef}
            className="max-w-[36ch] text-sm leading-relaxed text-muted sm:pb-1 sm:text-right"
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <h2
        ref={titleRef}
        className="text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold tracking-tight text-ink"
      >
        {children}.
      </h2>
      {subtitle && (
        <p ref={subRef} className="mt-2 max-w-[48ch] text-sm leading-relaxed text-muted">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
