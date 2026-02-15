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