'use strict';

function bindShowOnScroll() {
  $(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
      $('#totop').removeClass('hidden');
    } else {
      $('#totop').addClass('hidden');
    }
  });
}

function bindRandomListBtn() {
  $('#random-things').click(event => {
    event.preventDefault();
    store.shuffleSelectedHobbies();
    store.render();
  });
}

function main() {
  bindShowOnScroll();
  bindRandomListBtn();

  store.shuffleSelectedHobbies();
  store.render();
}

$(main);