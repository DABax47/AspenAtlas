$(document).ready(() => {
  const $projCards = $('.project-cards');
  if (window.innerWidth > 580) {
    $projCards.mouseover((e) => {
      $(e.target).children().next().addClass('project-slider-move');
    }).mouseout(e => {
      $(e.target).children().next().removeClass('project-slider-move');
    });
  }

});