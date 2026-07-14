import { gsap, prefersReducedMotion } from "./gsap";

const LIGHT = {
  paper: { r: 255, g: 255, b: 255 },
  ink: { r: 11, g: 13, b: 26 },
  muted: { r: 64, g: 68, b: 92 },
  surface: { r: 21, g: 51, b: 217 }, // cobalt
};

const DARK = {
  paper: { r: 11, g: 13, b: 26 },
  ink: { r: 242, g: 243, b: 250 },
  muted: { r: 154, g: 160, b: 186 },
  surface: { r: 11, g: 13, b: 26 }, // fond sombre
};

const toRgb = ({ r, g, b }) =>
  `${Math.round(r)} ${Math.round(g)} ${Math.round(b)}`;

const toHex = ({ r, g, b }) =>
  `#${[r, g, b]
    .map((n) => Math.round(n).toString(16).padStart(2, "0"))
    .join("")}`;

const clearInline = (root) => {
  root.style.removeProperty("--paper");
  root.style.removeProperty("--ink");
  root.style.removeProperty("--muted");
  root.style.removeProperty("--surface-cobalt");
};

/**
 * Morph en direct des tokens couleur (pas d'overlay).
 * On voit paper / ink / muted / surface-cobalt interpoler pendant le switch.
 */
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
  const surface = { ...from.surface };

  const paint = () => {
    root.style.setProperty("--paper", toRgb(paper));
    root.style.setProperty("--ink", toRgb(ink));
    root.style.setProperty("--muted", toRgb(muted));
    root.style.setProperty("--surface-cobalt", toHex(surface));
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
  tl.to(surface, { ...to.surface, onUpdate: paint }, 0);

  return tl;
};
