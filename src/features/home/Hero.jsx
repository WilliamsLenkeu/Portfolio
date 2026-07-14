import React, { useLayoutEffect, useRef } from "react";
import avatarImage from "../../Assets/avatar.webp";
import cvPDF from "../../Assets/curriculum_vitae.pdf";
import MagneticButton from "../../components/ui/MagneticButton";
import { gsap, prefersReducedMotion } from "../../lib/gsap";
import { useGithubStats, USERNAME_GITHUB } from "../../lib/useGithubStats";

const Hero = () => {
  const { data } = useGithubStats();
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const portraitRef = useRef(null);
  const portraitImgRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const lines = nameRef.current.querySelectorAll(".name-line");
    const fadeItems = section.querySelectorAll("[data-hero-fade]");

    if (prefersReducedMotion()) {
      gsap.set(lines, { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0 });
      gsap.set(portraitRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(fadeItems, { opacity: 1, y: 0 });
      return;
    }

    gsap.set(lines, { clipPath: "inset(0% 0% 100% 0%)", opacity: 0, y: 20 });
    gsap.set(portraitRef.current, { clipPath: "inset(0% 0% 100% 0%)" });
    gsap.set(fadeItems, { opacity: 0, y: 16 });

    const tl = gsap.timeline({ delay: 0.15 });
    tl.to(fadeItems[0], { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" });
    tl.to(
      lines,
      { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, y: 0, duration: 0.9, ease: "power4.out", stagger: 0.12 },
      "-=0.3"
    );
    tl.to(
      portraitRef.current,
      { clipPath: "inset(0% 0% 0% 0%)", duration: 1.1, ease: "power4.inOut" },
      "-=0.9"
    );
    tl.to(
      Array.from(fadeItems).slice(1),
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 },
      "-=0.6"
    );

    // Parallaxe discrète du portrait au scroll
    const parallax = gsap.to(portraitImgRef.current, {
      yPercent: 8,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
    });

    return () => {
      tl.kill();
      parallax.scrollTrigger?.kill();
      parallax.kill();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="on-cobalt surface-cobalt flex min-h-dvh flex-col pt-16 text-white"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 lg:grid-cols-[1fr_36%]">
        <div className="relative z-10 flex flex-col justify-center px-6 py-14 lg:pl-[max(1.5rem,calc((100vw-1400px)/2+1.5rem))] lg:pr-0">
          <p data-hero-fade className="font-mono text-sm text-frost">
            Développeur full stack — Yaoundé, Cameroun
          </p>

          <h1
            ref={nameRef}
            className="mt-6 text-[clamp(3.5rem,9.5vw,6rem)] font-extrabold leading-[0.98] tracking-[-0.02em] lg:-mr-28"
          >
            <span className="name-line block">Williams</span>
            <span className="name-line block">
              Lenkeu<span className="text-frost dark:text-cobalt">.</span>
            </span>
          </h1>

          <p data-hero-fade className="mt-8 max-w-[44ch] text-lg leading-relaxed text-frost">
            Interfaces React et Flutter, serveurs Node.js, Django et Spring Boot.
            Toute la chaîne, prouvée par du code réel.
          </p>

          <div data-hero-fade className="mt-10 flex flex-wrap items-center gap-6">
            <MagneticButton
              as="a"
              href="mailto:williamslenkeu.u@gmail.com"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-cobalt transition-transform duration-200 active:scale-95 dark:bg-cobalt dark:text-white"
            >
              Me contacter
            </MagneticButton>
            <a
              href={cvPDF}
              download="williams-lenkeu-cv.pdf"
              className="text-sm text-white underline underline-offset-4 transition-colors hover:text-frost"
            >
              Télécharger le CV
            </a>
          </div>
        </div>

        <div ref={portraitRef} className="relative min-h-[320px] overflow-hidden lg:min-h-0">
          <img
            ref={portraitImgRef}
            src={avatarImage}
            alt="Portrait de Williams Lenkeu"
            className="duotone-cobalt absolute inset-0 h-full w-full scale-110 object-cover object-top"
          />
        </div>
      </div>

      <div className="surface-cobalt relative z-10 border-t border-white/25 dark:border-white/10">
        <div
          data-hero-fade
          className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-6 py-4 font-mono text-xs text-frost sm:flex-row sm:items-center sm:justify-between"
        >
          <a
            href={`https://github.com/${USERNAME_GITHUB}`}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-white"
          >
            {data
              ? `${data.repos} dépôts publics · ${data.stars} étoiles · ${data.followers} abonnés GitHub`
              : "Activité GitHub en direct…"}
          </a>
          <span className="inline-flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
            </span>
            Disponible pour du freelance
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
