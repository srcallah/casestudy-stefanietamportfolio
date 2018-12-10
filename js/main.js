$(document).ready(function() {

/*Header Links: Stefanie Tam and Information, Hover and stay*/
  $("#name-hover").show();

  $("#header-name").hover(function() {
     $("#name-hover").show();
     $("#information-hover").hide();
  });

  $("#header-information").hover(function() {
     $("#information-hover").show();
     $("#name-hover").hide();
  });

  //SCROLL

    var scroll = 0;

$("#scrollright").click(function() {
    console.log(scroll);
    if(scroll == 0){
      $("html, body").animate({ scrollLeft: $("#title0-1").offset().left }, 750,);
      scroll ++;
    } else if(scroll == 1){
      $("html, body").animate({ scrollLeft: $("#title0-2").offset().left }, 750,);
      scroll ++;
    } else if(scroll == 2){
      $("html, body").animate({ scrollLeft: $("#title0-3").offset().left }, 750,);
      scroll ++;
    } else if(scroll == 3){
      $("html, body").animate({ scrollLeft: $("#title0-4").offset().left }, 750,);
      scroll ++;
    } else if(scroll == 4){
      $("html, body").animate({ scrollLeft: $("#title0-5").offset().left }, 750,);
      scroll ++;
    }
    });

$("#scrollleft").click(function() {
    console.log(scroll);
    if(scroll == 0){
      $("html, body").animate({ scrollLeft: $("#title0-5").offset().left }, 750,);
      scroll = 7;
    } else if(scroll == 1){
      $("html, body").animate({ scrollLeft: $("#title0-4").offset().left }, 750,);
      scroll --;
    } else if(scroll == 2){
      $("html, body").animate({ scrollLeft: $("#title0-3").offset().left }, 750,);
      scroll --;
    } else if(scroll == 3){
      $("html, body").animate({ scrollLeft: $("#title0-2").offset().left }, 750,);
      scroll --;
    } else if(scroll == 4){
      $("html, body").animate({ scrollLeft: $("##title0-1").offset().left }, 750,);
      scroll --;
    }
    });

/* Titles on left in viewfinder-------*/
/*Titles */

$("#nav-title-1").hover(function() {
   $("#title0-1, #acro1, #slide0-1").show();
  },
function(){
      $("#title0-1, #acro1, #slide0-1").hide();
});

$("#nav-title-2").hover(function() {
   $("#title0-2, #acro2, #slide0-2").show();
  },
function(){
      $("#title0-2, #acro2, #slide0-2").hide();
});

$("#nav-title-3").hover(function() {
   $("#title0-3, #acro3, #slide0-3").show();
  },
function(){
      $("#title0-3, #acro3, #slide0-3").hide();
});

$("#nav-title-4").hover(function() {
   $("#title0-4, #acro4, #slide0-4").show();
  },
function(){
      $("#title0-4, #acro4, #slide0-4").hide();
});

/*Project 1*/

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

  /*Project 2*/

  $("#nav1-2").hover(function() {
     $("#slide1-2, #image1-2, #acro2").show();
    },
  function(){
        $("#slide1-2, #image1-2, #acro2").hide();
  });

  $("#nav2-2").hover(function() {
     $("#slide2-2, #image2-2, #acro2").show();
    },
  function(){
        $("#slide2-2, #image2-2, #acro2").hide();
  });

  $("#nav3-2").hover(function() {
     $("#slide3-2, #image3-2, #acro2").show();
    },
  function(){
        $("#slide3-2, #image3-2, #acro2").hide();
  });

  $("#nav4-2").hover(function() {
     $("#slide4-2, #image4-2, #acro2").show();
    },
  function(){
        $("#slide4-2, #image4-2, #acro2").hide();
  });

  $("#nav5-2").hover(function() {
     $("#slide5-2, #image5-2, #acro2").show();
    },
  function(){
        $("#slide5-2, #image5-2, #acro2").hide();
  });

  $("#navabc2").hover(function() {
     $("#slide6-abc2, #image6-2, #acro2").show();
    },
  function(){
        $("#slide6-abc2, #image6-2, #acro2").hide();
  });

  /*project 3*/

  $("#nav1-3").hover(function() {
     $("#slide1-3, #image1-3, #acro3").show();
    },
  function(){
        $("#slide1-3, #image1-3, #acro3").hide();
  });

  $("#nav2-3").hover(function() {
     $("#slide2-3, #image2-3, #acro3").show();
    },
  function(){
        $("#slide2-3, #image2-3, #acro3").hide();
  });

  $("#nav3-3").hover(function() {
     $("#slide3-3, #image3-3, #acro3").show();
    },
  function(){
        $("#slide3-3, #image3-3, #acro3").hide();
  });

  $("#nav4-3").hover(function() {
     $("#slide4-3, #image4-3, #acro3").show();
    },
  function(){
        $("#slide4-3, #image4-3, #acro3").hide();
  });

  $("#nav5-3").hover(function() {
     $("#slide5-3, #image5-3, #acro3").show();
    },
  function(){
        $("#slide5-3, #image5-3, #acro3").hide();
  });

  $("#nav6-3").hover(function() {
     $("#slide6-3, #image6-3, #acro3").show();
    },
  function(){
        $("#slide6-3, #image6-3, #acro3").hide();
  });

  $("#navabc3").hover(function() {
     $("#slide7-abc3, #image7-3, #acro3").show();
    },
  function(){
        $("#slide7-abc3, #image7-3, #acro3").hide();
  });

  /*Project 4*/

  $("#nav1-4").hover(function() {
     $("#slide1-4, #image1-4, #acro4").show();
    },
  function(){
        $("#slide1-4, #image1-4, #acro4").hide();
  });

  $("#nav2-4").hover(function() {
     $("#slide2-4, #image2-4, #acro4").show();
    },
  function(){
        $("#slide2-4, #image2-4, #acro4").hide();
  });

  $("#nav3-4").hover(function() {
     $("#slide3-4, #image3-4, #acro4").show();
    },
  function(){
        $("#slide3-4, #image3-4, #acro4").hide();
  });

  $("#navabc4").hover(function() {
     $("#slide4-abc4, #image4-4, #acro4").show();
    },
  function(){
        $("#slide4-abc4, #image4-4, #acro4").hide();
  });




/*End javascripti---------------------------------*/
});
