const goto = (url) => {
  window.open(url, "_blank");
};

const toggleExpanded = (targetId) => {
  const targetElement = document.querySelector(`#${targetId}`);

  if (!targetElement) {
    console.warn("Elemento no encontrado");
    return;
  }

  targetElement.classList.toggle("expanded");
};

(() => {
  const projectItems = document.querySelectorAll(".projectItem");
  const experienceItems = document.querySelectorAll(".experienceItem");

  const hasProjects = projectItems.length > 0;
  const hasExperience = experienceItems.length > 0;
  if (!hasProjects && !hasExperience) return;

  const isTouchLike = window.matchMedia("(hover: none), (pointer: coarse)").matches;

  const elementsToObserve = [
    ...projectItems,
    ...(isTouchLike ? experienceItems : []),
  ];

  if (!elementsToObserve.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("in-view");
        obs.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px",
    }
  );

  elementsToObserve.forEach((el) => observer.observe(el));
})();