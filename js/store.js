'use strict';

let store = (function() {
  let projects = [
    {
      id: 1,
      title: 'Star Wars Search',
      img: 'img/proj2.png',
      href_live: 'https://andre-kw-star-wars.now.sh',
      href_repo: 'https://github.com/andre-kw/thinkful-star-wars',
      description: 'A Thinkful assignment that uses the Star Wars API to search for infomation.',
      stack: ['React', 'Nodejs'],
    },
    {
      id: 2,
      title: 'The Culture Quiz',
      img: 'img/proj1.png',
      href_live: 'https://thinkful-ei-armadillo.github.io/quiz-andre-ali',
      href_repo: 'https://github.com/thinkful-ei-armadillo/quiz-andre-ali',
      description: 'A Thinkful assignment created by Ali Lahrime and myself that features responsive design and accessibilty; use it to test your knowledge of hip-hop culture.',
      stack: ['HTML5', 'Javascript', 'jQuery'],
    },
    {
      id: 3,
      title: 'TBA',
      img: 'https://via.placeholder.com/350',
      href_live: '#',
      href_repo: '#',
      description: 'There will be a project here soon.',
      stack: ['HTML5'],
    }
  ];

  let hobbies = [
    { text: 'free music samples' },
    { text: 'picking color schemes' },
    { text: 'meditation' },
    { text: 'Youtube tutorials' },
    { text: 'staying up way too late' },
    { text: 'Thinkful' },
    { text: 'playing Destiny' },
    { text: 'Windows desktop customization' },
    {
      text: 'old Flash games',
      href: 'http://ferryhalim.com/orisinal/',
      alt: 'Orisinal'
    },
    {
      text: 'Vocabulary.com',
      href: 'https://www.vocabulary.com/',
      alt: 'Vocabulary.com: Learn Words'
    },
    {
      text: 'neovim',
      href: 'https://neovim.io',
      alt: 'Neovim: a fork of Vim'
    },
    {
      text: 'learning new VS Code shortcuts',
      href: 'https://code.visualstudio.com/shortcuts/keyboard-shortcuts-windows.pdf',
      alt: 'Keyboard shortcuts for Visual Studio Code',
    },
    {
      text: 'random Chrome Experiments',
      href: 'https://chromeexperiments.com',
      alt: 'Experiments with Google',
    },
    {
      text: 'the Reddit front page',
      href: 'https://reddit.com',
      alt: 'Reddit',
    },
  ];

  let hobbiesSelected = [];

  let shuffleSelectedHobbies = function() {
    let roulette = [];
    hobbiesSelected = [];

    hobbies.forEach((h, index) => {
      roulette.push(index);
    });

    for(let j = 0; j < 3; j++) {
      hobbiesSelected.push(roulette.splice(Math.floor(Math.random() * (roulette.length)), 1));
    }
  };

  let generateHobbiesHtml = function(hobby) {
    let html = '';

    hobbiesSelected.forEach(i => {
      let inner = (hobbies[i].hasOwnProperty('href')) ? `<a target="_blank" href="${hobbies[i].href}">${hobbies[i].text}</a>` : hobbies[i].text;
      html += `<li>${inner}</li>`;
    });

    return html;
  };

  // generate html for an individual project
  let generateProjectHtml = function(proj) {
    let stackHtml = '';
    proj.stack.forEach(i => {
      //stackHtml += `<i class="fab fa-${i}"></i>`;
      stackHtml += `<i class="devicon-${i.toLowerCase()}-plain colored" title="This project uses ${i}." aria-label="${i}"></i>`;
    });

    return `
      <figure>
        <img src="${proj.img}" alt="A screenshot of ${proj.title}">
        <figcaption>${proj.title}</figcaption>
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
    document.getElementById('projects').innerHTML = generateHtml();
    document.getElementById('random-thing-list').innerHTML = generateHobbiesHtml();
  };

  return {
    shuffleSelectedHobbies,
    render
  };
}());