$(function () {
  let header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();

  /* Fixed header */

  checkedScroll(scrollOffset);

  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();

    checkedScroll(scrollOffset);
  });

  function checkedScroll(scrollOffset) {
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }

  /* Smooth scroll */
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $(this).data("scroll"),
      blockOffset = $(blockId).offset().top;

    $("#nav a").removeClass("active");
    $this.addClass("active");

    $("html, body").animate({ scrollTop: blockOffset });
  });

  /* Menu nav-toggle */
  $("#nav__toggle").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });

  /* Collapse */
  $("[data-collapse]").on("click", function (event) {
    event.preventDefault();

    var $this = $(this),
      blockId = $this.data("collapse");

    $this.toggleClass("active");
    $(blockId).slideToggle();
  });

  /* Slider */

  $("[data-slider").slick({
    infinite: true,
    fade: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});
