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
if(width1>490){
  alert(width1);
  $(".subnavbar").addClass(".black");

}
