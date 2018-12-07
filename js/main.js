$(document).ready(function() {

/*Header Links: Stefanie Tam and Information, Hover and stay*/

  $("#header-name").hover(function() {
     $("#name-hover").show();
     $("#information-hover").hide();
  });

  $("#header-information").hover(function() {
     $("#information-hover").show();
     $("#name-hover").hide();
  });

/* Titles on left in viewfinder

  $("#header-information").hover(function() {
     $("#information-hover").show();
    },
  function(){
        $("#information-hover").hide();
  });

*/

/*End javascripti---------------------------------*/
});
