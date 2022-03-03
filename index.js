// $(document).ready(function(){
//   $("h1").click(function(){
//       $("h1").toggleClass("sticky-top");
//      $("h1").toggleClass("fixed-top");
//
//
//   });
// });
$(document).ready(function() {
  $(document).scroll(function() {
    var $nav1 = $(".top-section");
    var $nav = $(".navbaralter");
    var $nav2 = $(".subnavbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav1.height());

  });
});
var width1 = window.innerWidth;
if(width1<992){
  $(".subnavbar").addClass("black");

}

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".card").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();

      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
