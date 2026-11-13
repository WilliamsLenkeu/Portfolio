import React from "react";
import cvPDF from "../../Assets/curriculum_vitae_lenkeu_djache_prince_williams.pdf";
import Arrow from "../../components/ui/Arrow";
import { useSplitText } from "../../lib/useSplitText";

const footerLinks = [
  { name: "GitHub", url: "https://github.com/WilliamsLenkeu" },
  { name: "LinkedIn", url: "https://linkedin.com/in/williams-lenkeu" },
];

const Contact = () => {
  const year = new Date().getFullYear();
  const emailRef = useSplitText({ stagger: 0.02, duration: 0.65, start: "top 85%" });

  return (
    <section id="contact" className="on-ink surface-ink">
      <div className="grid min-h-[60dvh] grid-cols-1 lg:grid-cols-[1.3fr_0.7fr]">
        <div className="flex flex-col justify-end px-gutter pb-12 pt-20 lg:pb-16 lg:pt-28">
          <p className="text-sm text-white/65">Pour une mission ou une collab.</p>
          <a
            ref={emailRef}
            href="mailto:williams25prince@gmail.com"
            className="mt-4 break-all text-[clamp(1.4rem,5.5vw,3.75rem)] font-extrabold leading-[1.05] tracking-tight text-white underline decoration-white/25 decoration-2 underline-offset-8 hover:decoration-white"
          >
            williams25prince@gmail.com
          </a>
          <a href="tel:+237694903123" className="mt-5 text-sm text-white/65 hover:text-white">
            +237 6 94 90 31 23
          </a>
        </div>

        <div className="flex flex-col justify-end gap-6 border-t border-white/15 px-gutter py-10 lg:border-l lg:border-t-0 lg:py-16">
          <p className="max-w-[28ch] text-sm leading-relaxed text-white/65">
            Freelance et collaborations ponctuelles.{" "}
            <a
              href={cvPDF}
              download="williams-lenkeu-cv.pdf"
              className="text-white underline underline-offset-4 hover:opacity-70"
            >
              CV
            </a>
          </p>
          <div className="flex flex-wrap gap-5">
            {footerLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-white/65 hover:text-white"
              >
                {link.name} <Arrow dir="out" className="ml-0.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/15 px-gutter py-4 text-xs text-white/55">
        <p>© {year} Williams Lenkeu</p>
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="hover:text-white"
        >
          Haut de page <Arrow dir="up" className="ml-0.5" />
        </a>
      </div>
    </section>
  );
};

export default Contact;
