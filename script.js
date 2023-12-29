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