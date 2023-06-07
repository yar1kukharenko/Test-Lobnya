/* eslint-disable no-undef */

$(document).ready(() => {
  $('.projects__items').slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  });
  $(document).ready(() => {
    $('.bakery__items').slick({
      slidesToShow: 3.5,
      slidesToScroll: 1,
      autoplay: true,
      // centerMode: true,
      // variableWidth: true,
    });
  });
});
