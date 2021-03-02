$("body").hide().delay(300);
$(document).ready(() => {
  $("body").fadeIn();
  //animate the two containers to fade in after 2s
  function showContactInfo() {
    const $text_Container = $(".text-container");
    const $contact_container = $(".contact-container");
    const $about_slider = $(".about-content-slider");

    $contact_container.hide().delay(950).fadeIn(2000);
    $text_Container.hide().delay(950).fadeIn(2000);
  }

  //home content container animation
  //get home container
  //on click of the corresponding nav item trigger animation by adding class.
  //on page load the home container is showing
  const toggleHome = (e) => {
    if (e.target.id === "home") {
      // abstract to function
      //show about slider
      $home.removeClass("hide-home");
      $home.addClass("move-home");
    } else {
      $home.removeClass("move-home");
      $home.addClass("hide-home");
    }
  };
  const $home = $(".about-content-slider");
  $home.addClass("move-home");
  showContactInfo();

  $(".active").prepend(
    '<lottie-player class="lottie " src="https://assets5.lottiefiles.com/private_files/lf30_75f9senm.json" mode="bounce" background="transparent"  speed="2"  "  loop  autoplay></lottie-player>'
  );
  //nav animation
  //get the navigation li
  //on click add ::before element class
  const $navLi = $(".vertical-nav li");
  $navLi.on("click", (e) => {
    toggleHome(e);
    console.log(e.target);
    if (!$(e.target).hasClass("active")) {
      console.log("!!!!!!");
      $(e.target)
        .addClass("active")
        .prepend(
          '<lottie-player class="lottie " src="https://assets5.lottiefiles.com/private_files/lf30_75f9senm.json" mode="bounce" background="transparent"  speed="2"  "  loop  autoplay></lottie-player>'
        )
        .children()
        .addClass("float");
      if ($(e.target).siblings().hasClass("active")) {
        $(e.target)
          .siblings()
          .delay(50000)
          .removeClass("active")
          .children()
          .remove();
      }
    }
  });
  //card animations
  //get the project cards
  //on hover add move slider class
  const $projCard = $(".project-card");

  $projCard
    .mouseover((e) => {
      $(e.target).next().addClass("project-slider-move");
    })
    .mouseout((e) => {
      $(e.target).next().removeClass("project-slider-move");
    });

  var docWidth = document.documentElement.offsetWidth;

  [].forEach.call(document.querySelectorAll("*"), function (el) {
    console.log("searching...");
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  });
});
