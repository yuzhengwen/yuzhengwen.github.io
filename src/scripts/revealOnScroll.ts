function setupScrollReveal() {
  const elements = document.querySelectorAll<HTMLElement>(
    ".card, .skill-card"
  );

  if (elements.length === 0) return;

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          element.classList.add("is-visible");
        } else if (entry.boundingClientRect.top > 0) {
          element.classList.remove("is-visible");
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  elements.forEach((element, index) => {
    element.style.setProperty("--reveal-delay", `${(index % 3) * 60}ms`);
    observer.observe(element);
  });
}

document.addEventListener("astro:page-load", setupScrollReveal);