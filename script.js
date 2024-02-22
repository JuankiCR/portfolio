const goto = (url) => {
  window.open(url, '_blank');
};

const getProjects = () => {
  projectExhibitor = document.getElementById('projectExhibitor');
  projectExhibitor.innerHTML = '';
  let projectCards = '';

  // /* gradiente con trasparencia */
  // background: -webkit-linear-gradient(315deg, var(--project-color-0), var(--project-color-100));
  // background: linear-gradient(315deg, var(--project-color-0), var(--project-color-100

  fetch('https://api.juankicr.dev/projects/list')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((project) => {
      let imageStyle = `
        background: -webkit-linear-gradient(315deg, var(--project-color-0), var(--project-color-100)), url('https://api.juankicr.dev/media/image/${project.picture}') no-repeat center center / cover;
        background: linear-gradient(315deg, var(--project-color-0), var(--project-color-100)), url('https://api.juankicr.dev/media/image/${project.picture}') no-repeat center center / cover;
      `;

      console.log(project);
      projectCards += `
        <div class="projectItem" style = "${imageStyle}">
          <div class="projectTitle"> ${project.name} </div>
          <div class="projectDescription"> ${project.description} </div>
          <button class="primaryButton" onclick="goto('${project.link}')">visit</button>
        </div>
      `;
    });
    projectExhibitor.innerHTML = projectCards;
  });
};

getProjects();