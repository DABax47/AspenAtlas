$(document).ready(() => {
  const toggleHome = (e) => {
    if (e.target.id === "home") {
      // abstract to function
      $home.removeClass("hide-home");
      $home.addClass("move-home");
    } else {
      $home.removeClass("move-home");
      $home.addClass("hide-home");
    }
  };
  // console.log($navLi);
  //home content container animation
  //get home container
  //on click of the corresponding nav item trigger animation by adding class.
  //on page load the home container is showing
  const $home = $(".home-content");
  $home.addClass("move-home");
  //nav animation
  //get the navigation li
  //on click add ::before element class
  const $navLi = $(".vertical-nav li");
  $navLi.on("click", (e) => {
    toggleHome(e);
    $(e.target).addClass("active");
    if ($(e.target).siblings().hasClass("active")) {
      $(e.target).siblings().removeClass("active");
    }
    // $(e.target).siblings().hasClass("active").removeClass("active");
    console.log($(e.target).siblings());
    //find some cool navigation animations to play with
  });
  //card animations
  //get the project cards
  //on hover add move slider class
  const $projCard = $(".project-card");
  $projCard
    .mouseover((e) => {
      $(e.target).next().addClass("project-slider-move");
      console.log(1);
    })
    .mouseout((e) => {
      $(e.target).next().removeClass("project-slider-move");
      console.log(2);
    });

  // toggle animation on when tablet or desktop or larger
  // off on mobile devices
  // if (window.innerWidth > 580) {
  //   $projCards
  //     .mouseover((e) => {
  //       $(e.target).children().next().addClass("project-slider-move");
  //     })
  //     .mouseout((e) => {
  //       $(e.target).children().next().removeClass("project-slider-move");
  //     });
  // }
});
