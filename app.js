'use strict';

let store = (function() {
  let projects = [
    {
      id: 1,
      title: 'The Culture Quiz',
      img: 'img/proj1.png',
      href_live: 'https://thinkful-ei-armadillo.github.io/quiz-andre-ali',
      href_repo: 'https://github.com/thinkful-ei-armadillo/quiz-andre-ali',
      description: 'A Thinkful assignment created by Ali Lahrime and myself that features responsive design and accessibilty; use it to test your knowledge of hip-hop culture.',
      stack: ['html5', 'javascript', 'jquery'],
    },
    {
      id: 2,
      title: 'TBA',
      img: 'https://via.placeholder.com/350',
      href_live: '#',
      href_repo: '#',
      description: 'There will be a project here soon.',
      stack: ['html5', 'javascript', 'jquery'],
    },
    {
      id: 3,
      title: 'TBA',
      img: 'https://via.placeholder.com/350',
      href_live: '#',
      href_repo: '#',
      description: 'There will be a project here soon.',
      stack: ['html5', 'javascript', 'jquery'],
    }
  ];

  // generate html for an individual project
  let generateProjectHtml = function(proj) {
    let stackHtml = '';
    proj.stack.forEach(i => {
      //stackHtml += `<i class="fab fa-${i}"></i>`;
      stackHtml += `<i class="devicon-${i}-plain colored"></i>`;
    });

    return `
      <figure>
        <img src="${proj.img}" alt="A screenshot of ${proj.title}">
        <figcaption>${proj.title} </figcaption>
        <p class="links">
          <a target="_blank" href="${proj.href_live}">live site</a> | 
          <a target="_blank" href="${proj.href_repo}">repo</a>

          <span>${stackHtml}</span>
        </p>
        <p>${proj.description}</p>
      </figure>
    `;
  };

  // generate html for all projects
  let generateHtml = function() {
    let html = '';

    projects.forEach(proj => {
      html += generateProjectHtml(proj);
    });

    return html;
  };

  let render = function() {
    let html = generateHtml();
    let el = document.getElementById('projects');
    el.innerHTML = html;
  };

  return {
    projects,
    render
  };
}());

function bindShowOnScroll() {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
      $('#totop').removeClass('hidden');
    } else {
      $('#totop').addClass('hidden');
    }
  });
}

function main() {
  bindShowOnScroll();

  store.render();
}

$(main);