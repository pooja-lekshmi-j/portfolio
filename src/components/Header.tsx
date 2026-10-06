"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import FadeIn from "@/shared/FadeIn";
import SocialLink from "@/shared/SocialLink";
import TypewriterText from "@/shared/TypewriterText";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/pooja-lekshmi-j",
    viewBox: "0 0 16 16",
    path: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/pooja-lekshmi-j-777418222/",
    viewBox: "0 0 24 24",
    path: "M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z",
  },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <FadeIn delay={0}>
          <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
            <Link
              href="/"
              className="name-glow name-gradient hover:text-teal-400 transition-colors"
            >
              Pooja Lekshmi J
            </Link>
          </h1>
        </FadeIn>
        <FadeIn delay={100}>
          <h2 className="mt-3 flex items-center gap-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
            <TypewriterText text="Senior Software Engineer" />
          </h2>
        </FadeIn>
        <FadeIn delay={200}>
          <p className="mt-4 max-w-xs text-base leading-relaxed text-slate-400">
            5+ years building high-performance, accessible web experiences at
            scale
          </p>
        </FadeIn>

        <FadeIn delay={300}>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <li key={item.href}>
                    <a
                      className="group flex items-center py-3"
                      href={item.href}
                    >
                      <span
                        className={`nav-indicator mr-4 h-px transition-all duration-300 group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none ${
                          isActive
                            ? "w-16 bg-slate-200 nav-active-glow"
                            : "w-8 bg-slate-500"
                        }`}
                      />
                      <span
                        className={`nav-text text-xs font-bold uppercase tracking-widest transition-colors duration-300 group-hover:text-slate-200 group-focus-visible:text-slate-200 ${
                          isActive ? "text-slate-200" : "text-slate-500"
                        }`}
                      >
                        {item.label}
                      </span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </FadeIn>
      </div>

      <FadeIn delay={400}>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          {socialLinks.map((social) => (
            <SocialLink key={social.label} {...social} />
          ))}
        </ul>
      </FadeIn>
    </header>
  );
}
