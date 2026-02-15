"use client";

import { useEffect, type ReactNode } from "react";

const ROOT_MARGIN = "0px 0px -8% 0px";
const THRESHOLD = 0.05;

export function AnimateOnScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".animate-on-scroll, .animate-on-scroll-stagger"
    );

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in-view");
          }
        });
      },
      { rootMargin: ROOT_MARGIN, threshold: THRESHOLD }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const bgSections = document.querySelectorAll("[data-bg-url]");
    if (bgSections.length === 0) return;

    const bgObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const url = entry.target.getAttribute("data-bg-url");
          if (url && entry.target instanceof HTMLElement) {
            entry.target.style.backgroundImage = `url("${url.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}")`;
            entry.target.removeAttribute("data-bg-url");
          }
          bgObserver.unobserve(entry.target);
        });
      },
      { rootMargin: "200px", threshold: 0 }
    );

    bgSections.forEach((el) => bgObserver.observe(el));

    return () => bgObserver.disconnect();
  }, []);

  return <>{children}</>;
}
