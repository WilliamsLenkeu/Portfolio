import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HiMenuAlt3, HiX, HiOutlineSun, HiOutlineMoon } from "react-icons/hi";
import { gsap, ScrollTrigger, prefersReducedMotion } from "../../lib/gsap";
import cvPDF from "../../Assets/curriculum_vitae.pdf";

const links = [
  { name: "Profil", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projets", href: "#projects" },
  { name: "Parcours", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("");
  const [onCobalt, setOnCobalt] = useState(true);
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark")
  );

  const progressRef = useRef(null);
  const listRef = useRef(null);
  const pillRef = useRef(null);
  const menuRef = useRef(null);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  // Barre de progression de lecture
  useLayoutEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    gsap.set(bar, { scaleX: 0 });
    const st = ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => gsap.set(bar, { scaleX: self.progress }),
    });
    return () => st.kill();
  }, []);

  // Pastille de lien actif
  useEffect(() => {
    const pill = pillRef.current;
    const list = listRef.current;
    if (!pill || !list) return;

    const link = list.querySelector(`a[href="${active}"]`);
    if (!link) {
      gsap.to(pill, { opacity: 0, duration: 0.2 });
      return;
    }
    const li = link.parentElement;
    gsap.to(pill, {
      x: li.offsetLeft,
      width: li.offsetWidth,
      opacity: 1,
      duration: prefersReducedMotion() ? 0 : 0.35,
      ease: "power3.out",
    });
  }, [active]);

  // Menu mobile
  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    gsap.to(menu, {
      height: isOpen ? "auto" : 0,
      autoAlpha: isOpen ? 1 : 0,
      duration: prefersReducedMotion() ? 0 : 0.4,
      ease: "power3.inOut",
    });
  }, [isOpen]);

  useEffect(() => {
    const hero = document.querySelector("#hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setOnCobalt(entry.isIntersecting),
      { rootMargin: "-64px 0px 0px 0px", threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = links.map((link) => document.querySelector(link.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const themeButton = (
    <button
      onClick={toggleTheme}
      aria-label={dark ? "Activer le thème clair" : "Activer le thème sombre"}
      className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 ${
        onCobalt ? "text-frost hover:bg-white/10 hover:text-white" : "text-muted hover:bg-ink/5 hover:text-ink"
      }`}
    >
      {dark ? <HiOutlineSun size={18} /> : <HiOutlineMoon size={18} />}
    </button>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        onCobalt ? "on-cobalt surface-cobalt" : "border-b border-ink/10 bg-paper/90 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-page items-center justify-between px-6">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#top");
          }}
          className={`font-mono text-base font-medium tracking-tight ${onCobalt ? "text-white" : "text-ink"}`}
        >
          WL<span className={onCobalt ? "text-frost" : "text-cobalt"}>·</span>
        </a>

        <ul ref={listRef} className="relative hidden items-center gap-1 md:flex">
          <span
            ref={pillRef}
            aria-hidden="true"
            className={`absolute inset-y-0 left-0 w-0 rounded-full opacity-0 ${
              onCobalt ? "bg-white/15" : "bg-cobalt/10"
            }`}
          />
          {links.map((link) => (
            <li key={link.name} className="relative">
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(link.href);
                }}
                className={`relative z-10 block px-3 py-2 text-sm transition-colors duration-200 ${
                  onCobalt
                    ? active === link.href
                      ? "text-white"
                      : "text-frost hover:text-white"
                    : active === link.href
                    ? "text-cobalt"
                    : "text-muted hover:text-ink"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a
              href={cvPDF}
              download="williams-lenkeu-cv.pdf"
              className={`rounded-full border px-4 py-1.5 text-sm transition-colors duration-200 ${
                onCobalt
                  ? "border-white/40 text-white hover:border-white hover:bg-white/10"
                  : "border-ink/20 text-ink hover:border-cobalt hover:text-cobalt"
              }`}
            >
              CV
            </a>
          </li>
          <li className="ml-1">{themeButton}</li>
        </ul>

        <div className="flex items-center gap-2 md:hidden">
          {themeButton}
          <button
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
            className={onCobalt ? "text-white" : "text-ink"}
          >
            {isOpen ? <HiX size={22} /> : <HiMenuAlt3 size={22} />}
          </button>
        </div>
      </nav>

      <div
        ref={progressRef}
        className={`h-px w-full origin-left ${onCobalt ? "bg-white/60" : "bg-cobalt"}`}
      />

      <ul
        ref={menuRef}
        style={{ height: 0 }}
        className={`invisible overflow-hidden opacity-0 md:hidden ${
          onCobalt ? "surface-cobalt border-t border-white/20 dark:border-white/10" : "border-t border-ink/10 bg-paper"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.name}
            className={`border-b last:border-none ${onCobalt ? "border-white/10" : "border-ink/5"}`}
          >
            <a
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link.href);
              }}
              tabIndex={isOpen ? 0 : -1}
              className={`block px-6 py-4 text-sm ${
                onCobalt
                  ? active === link.href
                    ? "text-white"
                    : "text-frost"
                  : active === link.href
                  ? "text-cobalt"
                  : "text-muted"
              }`}
            >
              {link.name}
            </a>
          </li>
        ))}
        <li>
          <a
            href={cvPDF}
            download="williams-lenkeu-cv.pdf"
            tabIndex={isOpen ? 0 : -1}
            className={`block px-6 py-4 text-sm ${onCobalt ? "text-frost" : "text-muted"}`}
          >
            Télécharger le CV
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
