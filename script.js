const goto = (url) => {
  window.open(url, '_blank');
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
  const items = document.querySelectorAll(".projectItem");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px"
    }
  );

  items.forEach(el => observer.observe(el));
})();


(() => {
  const items = document.querySelectorAll(".experienceItem");
  if (!items.length) return;

  const isTouchLike = window.matchMedia("(hover: none), (pointer: coarse)").matches;
  if (!isTouchLike) return;

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 1 }
  );

  items.forEach(el => observer.observe(el));
})();
