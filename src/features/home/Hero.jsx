import React, { useLayoutEffect, useRef } from "react";
import avatarImage from "../../Assets/avatar.webp";
import cvPDF from "../../Assets/curriculum_vitae_lenkeu_djache_prince_williams.pdf";
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

      const tl = gsap.timeline({ delay: 0.08 });

      tl.to(fadeItems[0], { autoAlpha: 1, duration: 0.35, ease: "power2.out" });

      split = SplitText.create(nameEl, {
        type: "words,lines",
        mask: "lines",
        aria: "auto",
        onSplit(self) {
          tl.from(
            self.words,
            { yPercent: 110, duration: 0.7, stagger: 0.07, ease: "power3.out" },
            "-=0.12"
          );
        },
      });

      tl.to(
        portraitRef.current,
        { clipPath: "inset(0% 0% 0% 0%)", duration: 0.9, ease: "power2.inOut" },
        "-=0.65"
      );
      tl.to(
        Array.from(fadeItems).slice(1),
        { autoAlpha: 1, duration: 0.4, ease: "power2.out", stagger: 0.07 },
        "-=0.45"
      );
      if (rail) {
        tl.to(rail, { autoAlpha: 1, duration: 0.35, ease: "power2.out" }, "-=0.2");
      }

      gsap.to(portraitImgRef.current, {
        yPercent: 6,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
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
      className="flex min-h-dvh flex-col border-b border-ink/10 bg-paper pt-16 text-ink"
    >
      <div className="relative mx-auto grid w-full max-w-[1400px] flex-1 grid-cols-1 lg:grid-cols-[1fr_36%]">
        <div className="relative z-10 flex flex-col justify-center px-gutter py-12 lg:pl-[max(var(--gutter),calc((100vw-1400px)/2+var(--gutter)))] lg:pr-10 lg:py-14">
          <p data-hero-fade className="text-sm text-muted">
            Backend · DevOps · Data. Yaoundé.
          </p>

          <h1
            ref={nameRef}
            className="mt-5 text-[clamp(3.25rem,9vw,5.75rem)] font-extrabold leading-[0.96] tracking-[-0.03em] lg:-mr-20"
          >
            <span className="block">Williams</span>
            <span className="block">Lenkeu.</span>
          </h1>

          <p data-hero-fade className="mt-7 max-w-[38ch] text-[15px] leading-relaxed text-muted sm:text-base">
            APIs, infra et traitement de données pour des produits en production.
          </p>

          <div data-hero-fade className="mt-8 flex flex-wrap items-baseline gap-x-7 gap-y-2">
            <a
              href="mailto:williams25prince@gmail.com"
              className="text-sm font-semibold text-ink underline decoration-ink/30 decoration-2 underline-offset-6 hover:decoration-ink"
            >
              Me contacter
            </a>
            <a
              href={cvPDF}
              download="williams-lenkeu-cv.pdf"
              className="group inline-flex items-baseline gap-1 text-sm text-muted hover:text-ink"
            >
              CV <Arrow dir="down" />
            </a>
          </div>
        </div>

        <div
          ref={portraitRef}
          className="relative min-h-[320px] overflow-hidden border-t border-ink/10 lg:min-h-0 lg:border-l lg:border-t-0"
        >
          <img
            ref={portraitImgRef}
            src={avatarImage}
            alt="Portrait de Williams Lenkeu"
            className="absolute inset-0 h-full w-full scale-110 object-cover object-top grayscale"
          />
        </div>
      </div>

      <div data-hero-rail className="border-t border-ink/10">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-2 px-gutter py-3.5 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <a
            href={`https://github.com/${USERNAME_GITHUB}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink"
          >
            {data
              ? `${data.repos} dépôts · ${data.stars} étoiles · ${data.followers} abonnés`
              : "GitHub…"}
          </a>
          <span>Freelance disponible</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
