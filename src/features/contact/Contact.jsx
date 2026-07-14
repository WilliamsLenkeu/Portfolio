import React, { useLayoutEffect, useRef } from "react";
import cvPDF from "../../Assets/curriculum_vitae.pdf";
import Arrow from "../../components/ui/Arrow";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { useSplitText } from "../../lib/useSplitText";

const footerLinks = [
  { name: "GitHub", url: "https://github.com/WilliamsLenkeu" },
  { name: "LinkedIn", url: "https://linkedin.com/in/williams-lenkeu" },
];

const Contact = () => {
  const year = new Date().getFullYear();
  const introRef = useSplitText({ stagger: 0.04, start: "top 80%" });
  const emailRef = useSplitText({ stagger: 0.02, duration: 0.7, delay: 0.05, start: "top 80%" });
  const noteRef = useSplitText({ stagger: 0.03, delay: 0.1, start: "top 80%" });
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const footer = footerRef.current;
    if (!footer || prefersReducedMotion()) return;

    const tween = gsap.from(footer, {
      autoAlpha: 0,
      duration: 0.45,
      ease: "power2.out",
      scrollTrigger: {
        trigger: footer,
        start: "top 95%",
        once: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section
      id="contact"
      className="on-cobalt surface-cobalt border-t border-transparent text-white dark:border-white/10"
    >
      <div className="mx-auto flex min-h-[80dvh] max-w-page flex-col px-6 pt-28">
        <div className="flex flex-1 flex-col justify-center py-16">
          <p ref={introRef} className="font-mono text-sm text-frost">
            Un projet en tête ? Je réponds rapidement.
          </p>
          <a
            ref={emailRef}
            href="mailto:williamslenkeu.u@gmail.com"
            className="mt-6 inline-block break-words text-[clamp(1.35rem,5.5vw,4.25rem)] font-extrabold leading-tight tracking-tight text-white underline decoration-white/30 decoration-2 underline-offset-8 transition-colors duration-200 hover:decoration-white"
          >
            williamslenkeu.u@gmail.com
          </a>
          <p ref={noteRef} className="mt-10 text-base text-frost">
            Disponible pour missions freelance et collaborations ponctuelles —{" "}
            <a
              href={cvPDF}
              download="williams-lenkeu-cv.pdf"
              className="text-white underline underline-offset-4 transition-colors hover:text-frost"
            >
              télécharger le CV
            </a>
            .
          </p>
        </div>

        <div
          ref={footerRef}
          className="flex flex-col items-start justify-between gap-4 border-t border-white/25 py-6 dark:border-white/10 sm:flex-row sm:items-center"
        >
          <p className="font-mono text-xs text-frost">© {year} — Conçu et développé par Williams Lenkeu</p>
          <div className="flex items-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-frost transition-colors hover:text-white"
              >
                {link.name} <Arrow dir="out" className="ml-1" />
              </a>
            ))}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="font-mono text-xs text-frost transition-colors hover:text-white"
            >
              Haut de page <Arrow dir="up" className="ml-1" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
