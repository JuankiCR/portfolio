const goto = (url) => {
  window.open(url, '_blank');
};

const getProjects = () => {
  projectsTitle = document.getElementById('projectsTitle');
  let projectCards = '';

  fetch('https://api.juankicr.dev/projects/list')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project, count) => {
      projectCards += `
        <section id="_PID${project._id}" class="resumeCard ${count % 2 == 0 ? "alt" : ""} projectCard"> 
          <div class="projectImageWrapper">
            <img src="https://api.juankicr.dev/media/image/${project.picture}" alt="Screenshot for project: ${project.name}" loading="lazy">
          </div>
          <div class="projectInfoWrapper">
            <div class="projectName">${project.name}</div>
            <div class="projectDescription">${project.description}</div>
            <button class="secundaryButton" onclick="goto('${project.link}')">See project</button>
          </div>
        </section> 
      `;
    });

    projectsTitle.insertAdjacentHTML('afterend', projectCards);
  });
};

getProjects();