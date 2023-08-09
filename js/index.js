window.onscroll = function() {onScroll()};
var body = document.getElementById("body");

// Animacion navbar
function onScroll() {
  const isScroll = document.body.scrollTop > 400 || document.documentElement.scrollTop > 400
  if (isScroll) {
      $(".navbar").addClass("fixed-top");
      body.classList.add("header-small");
      $("body").addClass("body-top-padding");

  } else {
      $(".navbar").removeClass("fixed-top");
      body.classList.remove("header-small");
      $("body").removeClass("body-top-padding");
  }
}

// Carrusel
$('.owl-carousel').owlCarousel({
    items: 3,
    loop:true,
    nav:false,
    dot:true,
    autoplay: true,
    slideTransition: 'linear',
    autoplayHoverPause: true,
    responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})

// Backdrop sidebar
$('#navbarSupportedContent').on('hidden.bs.collapse', function () {
  $("body").removeClass("sidebar-open");
})

$('#navbarSupportedContent').on('shown.bs.collapse', function () {
  $("body").addClass("sidebar-open");
})

// Responsive sidebar
window.onresize = function() {
  var w = window.innerWidth;
  if(w>=992) {
    $('body').removeClass('sidebar-open');
    $('#navbarSupportedContent').removeClass('show');
  }
}