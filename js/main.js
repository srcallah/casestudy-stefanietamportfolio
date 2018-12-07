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

/* Titles on left in viewfinder-------*/
  $(".project-info-no, .project-title-lg").hover(function() {
     $("#name-hover, #information-hover").hide();
      });

  $("#nav-title-1").hover(function() {
     $("#slide0-1, #title0-1, #acro1").show();
    },
  function(){
        $("#slide0-1, #title0-1, #acro1").hide();
  });

  $("#nav1-1").hover(function() {
     $("#slide1-1, #image1-1, #acro1").show();
    },
  function(){
        $("#slide1-1, #image1-1, #acro1").hide();
  });

  $("#nav2-1").hover(function() {
     $("#slide2-1, #image2-1, #acro1").show();
    },
  function(){
        $("#slide2-1, #image2-1, #acro1").hide();
  });

  $("#nav3-1").hover(function() {
     $("#slide3-1, #image3-1, #acro1").show();
    },
  function(){
        $("#slide3-1, #image3-1, #acro1").hide();
  });

  $("#nav4-1").hover(function() {
     $("#slide4-1, #image4-1, #acro1").show();
    },
  function(){
        $("#slide4-1, #image4-1, #acro1").hide();
  });



  $("#nav5-1").hover(function() {
     $("#slide5-1, #image5-1, #acro1").show();
    },
  function(){
        $("#slide5-1, #image5-1, #acro1").hide();
  });

  $("#navabc-1").hover(function() {
     $("#slide6-abc1, #image6-1, #acro1").show();
    },
  function(){
        $("#slide6-abc1, #image6-1, #acro1").hide();
  });


/*End javascripti---------------------------------*/
});
