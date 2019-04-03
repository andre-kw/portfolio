/* global $, store */

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
    const overlay = document.getElementsByClassName('overlay')[0];
    overlay.classList.remove('hide');

    setTimeout(() => {
      overlay.classList.add('hide');
      store.shuffleSelectedHobbies();
      store.render();
    }, 250);
  });
}

function main() {
  bindShowOnScroll();
  bindRandomListBtn();

  store.shuffleSelectedHobbies();
  store.render();
}

$(main);