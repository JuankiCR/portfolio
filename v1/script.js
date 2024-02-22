const skillList = [
  {
    name: 'AWS',
  },
  {
    name: 'CSS',
  },
  {
    name: 'GIT',
  },
  {
    name: 'HTML',
  },
  {
    name: 'JAVASCRIPT',
  },
  {
    name: 'NGINX',
  },
  {
    name: 'NODEJS',
  },
  {
    name: 'PHP',
  },
];

const api = 'https://api.juankicr.dev/';

const goto = (url) => {
  window.open(url, '_blank');
};

const loadSkills = () => {
  const expositorWrapper = document.getElementById('expositorWrapper');

  skillList.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.classList.add('skill_card', skill.name);

    const skillIcon = document.createElement('div');
    skillIcon.classList.add('skill_ico');

    skillItem.appendChild(skillIcon);

    expositorWrapper.appendChild(skillItem);
  });
}

const loadProjects = () => {
  const projectsWrapper = document.getElementById('projectsWrapper');

  fetch(api + 'projects/list')
    .then(response => response.json())
    .then(projects => {
      projects.forEach(project => {
        const projectID = project.name.replace(/\s/g, '');
        const projectItem = document.createElement('div');
        projectItem.classList.add('project_card');
        projectItem.setAttribute('id', projectID);

        const projectImage = document.createElement('img');
        projectImage.classList.add('project_image');
        projectImage.src = `${api}media/image/${project.picture}`;

        const projectInfo = document.createElement('div');
        projectInfo.classList.add('project_info');

        const infoWrapper = document.createElement('div');

        const projectName = document.createElement('h3');
        projectName.classList.add('project_name');
        projectName.innerHTML = project.name;

        const projectDescription = document.createElement('div');
        projectDescription.classList.add('project_description');
        projectDescription.innerHTML = project.description;

        const projectLink = document.createElement('div');
        projectLink.classList.add('project_link');
        projectLink.setAttribute('onclick', `goto('${project.link}')`);
        projectLink.innerHTML = 'See project';

        infoWrapper.appendChild(projectName);
        infoWrapper.appendChild(projectDescription);
        projectInfo.appendChild(infoWrapper);
        projectInfo.appendChild(projectLink);

        projectItem.appendChild(projectImage);
        projectItem.appendChild(projectInfo);

        projectsWrapper.appendChild(projectItem);
      });
    })
    .catch(error => console.log(error));
}

document.getElementById('jPhonix').addEventListener('mousemove', function (e) {
  var visitLabel = document.querySelector('#jPhonix .job_header .visit_label');
  visitLabel.style.left = (e.pageX + 16) + 'px';
  visitLabel.style.top = e.pageY + 'px';
});

document.getElementById('DClariss').addEventListener('mousemove', function (e) {
  var visitLabel = document.querySelector('#DClariss .job_header .visit_label');
  visitLabel.style.left = (e.pageX + 16) + 'px';
  visitLabel.style.top = e.pageY + 'px';
});

document.getElementById('FarmaEnvios').addEventListener('mousemove', function (e) {
  var visitLabel = document.querySelector('#FarmaEnvios .job_header .visit_label');
  visitLabel.style.left = (e.pageX + 16) + 'px';
  visitLabel.style.top = e.pageY + 'px';
});