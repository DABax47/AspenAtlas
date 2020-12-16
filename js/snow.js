const $home = $(".home-content");
const santaHat = '<img class="santa-hat" src="./images/hat.png" alt="santa hat" />';
const snowEle =
  '<div class="snow a "></div><div class="snow b "></div><div class="snow c   "></div><div class="snow d "></div><div class="snow  e"></div><div class="snow f  "></div><div class="snow g "></div><div class="snow h"></div><div class="snow   i"></div>';
  // const snowEle =
  //   '<div class="snow a "></div><div class="snow b "></div><div class="snow c   "></div>';
  $home.append(santaHat);
$home.append(snowEle);
const snowflake = document.querySelectorAll(".snow");

snow();
function snow() {

  for (var i = 0; i < snowflake.length; i++) {
    var   rand=  Math.random() * 953;
    $(snowflake[i]).css({ "right": rand});

  }

}

// document.querySelectorAll(".snow");
