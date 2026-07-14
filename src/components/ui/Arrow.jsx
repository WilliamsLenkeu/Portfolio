import React from "react";

const glyphs = {
  out: "↗",
  down: "↓",
  up: "↑",
};

/** Flèche typographique animée au hover/focus du lien parent. */
const Arrow = ({ dir = "out", className = "" }) => (
  <span aria-hidden="true" className={`arrow-hint arrow-hint--${dir} ${className}`.trim()}>
    {glyphs[dir] ?? glyphs.out}
  </span>
);

export default Arrow;
