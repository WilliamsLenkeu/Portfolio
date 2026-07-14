import React, { useLayoutEffect, useRef } from "react";
import cvPDF from "../../Assets/curriculum_vitae.pdf";
import Arrow from "../../components/ui/Arrow";
import { gsap, prefersReducedMotion } from "../../lib/gsap";

const footerLinks = [
  { name: "GitHub", url: "https://github.com/WilliamsLenkeu" },
  { name: "LinkedIn", url: "https://linkedin.com/in/williams-lenkeu" },
];

const Contact = () => {
  const year = new Date().getFullYear();
  const sectionRef = useRef(null);
  const emailRef = useRef(null);
  const introRef = useRef(null);
  const noteRef = useRef(null);
  const footerRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion()) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });

    if (introRef.current) {
      tl.fromTo(
        introRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", immediateRender: false }
      );
    }

    if (emailRef.current) {
      tl.fromTo(
        emailRef.current,
        { clipPath: "inset(0 100% 0 0)", opacity: 0 },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power4.inOut",
          immediateRender: false,
        },
        "-=0.2"
      );
    }

    if (noteRef.current) {
      tl.fromTo(
        noteRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", immediateRender: false },
        "-=0.4"
      );
    }

    if (footerRef.current) {
      tl.fromTo(
        footerRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.45, ease: "power2.out", immediateRender: false },
        "-=0.2"
      );
    }

    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
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
