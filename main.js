(function() {
  'use strict';
  $(".workItem").on("click",".fa",function(){
      $(this).toggleClass("fa-plus");
      $(this).toggleClass("fa-minus");
      $(this).siblings("ul").children().toggleClass("hidden");
  });
}());
