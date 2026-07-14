import React, { useLayoutEffect, useRef } from "react";
import avatarImage from "../../Assets/avatar.webp";
import cvPDF from "../../Assets/curriculum_vitae.pdf";
import Arrow from "../../components/ui/Arrow";
import { gsap, SplitText, prefersReducedMotion } from "../../lib/gsap";
import { useGithubStats, USERNAME_GITHUB } from "../../lib/useGithubStats";

const Hero = () => {
  const { data } = useGithubStats();
  const sectionRef = useRef(null);
  const nameRef = useRef(null);
  const portraitRef = useRef(null);
  const portraitImgRef = useRef(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const nameEl = nameRef.current;
    if (!section || !nameEl) return;

    const fadeItems = section.querySelectorAll("[data-hero-fade]");
    const rail = section.querySelector("[data-hero-rail]");

    if (prefersReducedMotion()) {
      gsap.set(portraitRef.current, { clipPath: "inset(0% 0% 0% 0%)" });
      gsap.set(fadeItems, { autoAlpha: 1 });
      if (rail) gsap.set(rail, { autoAlpha: 1 });
      return;
    }

    let split;
    const ctx = gsap.context(() => {
      gsap.set(portraitRef.current, { clipPath: "inset(0% 0% 100% 0%)" });
      gsap.set(fadeItems, { autoAlpha: 0 });
      if (rail) gsap.set(rail, { autoAlpha: 0 });

      const tl = gsap.timeline({ delay: 0.1 });

      tl.to(fadeItems[0], { autoAlpha: 1, duration: 0.4, ease: "power2.out" });

      split = SplitText.create(nameEl, {
        type: "words,lines",
        mask: "lines",
        aria: "auto",
        onSplit(self) {
          tl.from(
            self.words,
            { yPercent: 110, duration: 0.75, stagger: 0.08, ease: "power2.out" },
            "-=0.15"
          );
        },
      });

      tl.to(
        portraitRef.current,
        { clipPath: "inset(0% 0% 0% 0%)", duration: 1, ease: "power2.inOut" },
        "-=0.7"
      );
      tl.to(
        Array.from(fadeItems).slice(1),
        { autoAlpha: 1, duration: 0.45, ease: "power2.out", stagger: 0.08 },
        "-=0.5"
      );
      if (rail) {
        tl.to(rail, { autoAlpha: 1, duration: 0.4, ease: "power2.out" }, "-=0.25");
      }

      gsap.to(portraitImgRef.current, {
        yPercent: 8,
        ease: "none",
        scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
      });
    }, section);

    return () => {
      split?.revert?.();
      ctx.revert();
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
            <span className="block">Williams</span>
            <span className="block">
              Lenkeu<span className="text-frost dark:text-cobalt">.</span>
            </span>
          </h1>

          <p data-hero-fade className="mt-8 max-w-[44ch] text-lg leading-relaxed text-frost">
            Interfaces React et Flutter, serveurs Node.js, Django et Spring Boot.
            Toute la chaîne, prouvée par du code réel.
          </p>

          <div data-hero-fade className="mt-10 flex flex-wrap items-baseline gap-x-8 gap-y-3">
            <a
              href="mailto:williamslenkeu.u@gmail.com"
              className="text-base font-semibold text-white underline decoration-white/40 decoration-2 underline-offset-8 transition-colors duration-200 hover:decoration-white"
            >
              Me contacter
            </a>
            <a
              href={cvPDF}
              download="williams-lenkeu-cv.pdf"
              className="group inline-flex items-baseline gap-1.5 font-mono text-xs tracking-wide text-frost transition-colors duration-200 hover:text-white"
            >
              CV
              <Arrow dir="down" />
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

      <div
        data-hero-rail
        className="surface-cobalt relative z-10 border-t border-white/25 dark:border-white/10"
      >
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-6 py-4 font-mono text-xs text-frost sm:flex-row sm:items-center sm:justify-between">
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
          <span className="font-mono text-xs text-frost">
            Disponible pour du freelance
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
