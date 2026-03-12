"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

const NAV_ITEMS: NavItem[] = [
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ["hero", ...NAV_ITEMS.map((item) => item.id)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target?.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        root: null,
        threshold: [0.2, 0.35, 0.6],
        rootMargin: "-35% 0px -45% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navClassName = useMemo(() => {
    if (isScrolled) {
      return "border-[var(--color-border)] bg-[rgba(13,18,16,0.86)] backdrop-blur-md";
    }
    return "border-transparent bg-transparent";
  }, [isScrolled]);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${navClassName}`}>
      <nav className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between py-4">
        <a
          href="#hero"
          aria-label="Go to top of page"
          className="display-face text-2xl italic tracking-wide text-[var(--color-text-primary)]"
        >
          AM
        </a>

        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex rounded-md border border-[var(--color-border)] p-2 text-[var(--color-text-primary)] md:hidden"
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-label={`Jump to ${item.label} section`}
                  className={`text-sm tracking-wide transition-colors ${
                    isActive ? "text-[var(--color-accent)]" : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {isOpen && (
        <div className="border-t border-[var(--color-border)] bg-[rgba(13,18,16,0.95)] px-4 py-4 backdrop-blur-md md:hidden">
          <ul className="mx-auto flex w-[min(1120px,92vw)] flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-label={`Jump to ${item.label} section`}
                  onClick={() => setIsOpen(false)}
                  className={`block rounded-md px-2 py-2 text-sm ${
                    activeSection === item.id
                      ? "bg-[rgba(76,175,125,0.15)] text-[var(--color-accent)]"
                      : "text-[var(--color-text-secondary)]"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
