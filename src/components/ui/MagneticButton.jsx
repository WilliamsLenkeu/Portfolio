import React, { useRef } from "react";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const MagneticButton = ({ as: Component = "button", strength = 0.35, className = "", children, ...props }) => {
  const ref = useRef(null);
  const quickX = useRef(null);
  const quickY = useRef(null);

  const handleMouseMove = (e) => {
    if (prefersReducedMotion() || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;

    if (!quickX.current) quickX.current = gsap.quickTo(ref.current, "x", { duration: 0.4, ease: "power3.out" });
    if (!quickY.current) quickY.current = gsap.quickTo(ref.current, "y", { duration: 0.4, ease: "power3.out" });

    quickX.current(relX * strength);
    quickY.current(relY * strength);
  };

  const handleMouseLeave = () => {
    quickX.current?.(0);
    quickY.current?.(0);
  };

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export default MagneticButton;
