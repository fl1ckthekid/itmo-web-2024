$(document).ready(function () {
  // Initializing Slick plugin for element with "offer-list" class
  $(".offer-list").slick({
    infinite: true, // Enable infinite scrolling
    slidesToShow: 3, // Show 3 slides at once
    slidesToScroll: 3, // Scroll 3 slides at once
  });
});
