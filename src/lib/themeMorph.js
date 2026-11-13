import { gsap, prefersReducedMotion } from "./gsap";

const LIGHT = {
  paper: { r: 255, g: 255, b: 255 },
  ink: { r: 12, g: 12, b: 14 },
  muted: { r: 70, g: 70, b: 76 },
};

const DARK = {
  paper: { r: 12, g: 12, b: 14 },
  ink: { r: 245, g: 245, b: 245 },
  muted: { r: 160, g: 160, b: 168 },
};

const toRgb = ({ r, g, b }) =>
  `${Math.round(r)} ${Math.round(g)} ${Math.round(b)}`;

const clearInline = (root) => {
  root.style.removeProperty("--paper");
  root.style.removeProperty("--ink");
  root.style.removeProperty("--muted");
};

export const runThemeMorph = ({ nextDark, onApply, onDone }) => {
  const root = document.documentElement;

  if (prefersReducedMotion()) {
    clearInline(root);
    onApply(nextDark);
    onDone?.();
    return;
  }

  const from = nextDark ? LIGHT : DARK;
  const to = nextDark ? DARK : LIGHT;

  const paper = { ...from.paper };
  const ink = { ...from.ink };
  const muted = { ...from.muted };

  const paint = () => {
    root.style.setProperty("--paper", toRgb(paper));
    root.style.setProperty("--ink", toRgb(ink));
    root.style.setProperty("--muted", toRgb(muted));
  };

  paint();

  const tl = gsap.timeline({
    defaults: { duration: 0.55, ease: "power2.inOut" },
    onComplete: () => {
      onApply(nextDark);
      clearInline(root);
      onDone?.();
    },
  });

  tl.to(paper, { ...to.paper, onUpdate: paint }, 0);
  tl.to(ink, { ...to.ink, onUpdate: paint }, 0);
  tl.to(muted, { ...to.muted, onUpdate: paint }, 0);

  return tl;
};
