import { prefersReducedMotion } from "./gsap";

/**
 * Reveal circulaire du nouveau thème depuis le bouton.
 * View Transitions : l'ancien et le nouveau coexistent — le cercle
 * découpe le nouveau par-dessus l'ancien (couleurs visibles en live).
 */
export const runThemeWipe = async ({ nextDark, originEl, event, onApply, onDone }) => {
  const finish = () => onDone?.();

  if (prefersReducedMotion() || typeof document.startViewTransition !== "function") {
    onApply(nextDark);
    finish();
    return;
  }

  let cx;
  let cy;
  if (event?.clientX != null) {
    cx = event.clientX;
    cy = event.clientY;
  } else if (originEl) {
    const rect = originEl.getBoundingClientRect();
    cx = rect.left + rect.width / 2;
    cy = rect.top + rect.height / 2;
  } else {
    cx = window.innerWidth - 40;
    cy = 32;
  }

  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const maxR = Math.ceil(Math.hypot(Math.max(cx, vw - cx), Math.max(cy, vh - cy))) + 8;

  document.documentElement.classList.add("theme-revealing");

  try {
    const transition = document.startViewTransition(() => {
      onApply(nextDark);
    });

    await transition.ready;

    const animation = document.documentElement.animate(
      {
        clipPath: [`circle(0px at ${cx}px ${cy}px)`, `circle(${maxR}px at ${cx}px ${cy}px)`],
      },
      {
        duration: 750,
        easing: "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    await Promise.all([transition.finished, animation.finished]).catch(() => {});
  } catch {
    onApply(nextDark);
  } finally {
    document.documentElement.classList.remove("theme-revealing");
    finish();
  }
};
