$(document).ready(function(){

  //scroll to original position on refresh
  $(document).scrollTop(0);

  //move navbar and make arrow appear on scroll
  //image appears after scroll position reaches 450
  $(document).scroll(function() {

    $('nav').removeClass('navbar-fixed-bottom').addClass('navbar-fixed-top');

    if($('#arrow').css('opacity') == '0'){
      $('#arrow').css({
        opacity:1
      });
    }
    if ($(document).scrollTop() >= '450'){
      $('#section_two_pic').css({
        opacity:1
      });
    }
  });

  //arrow animation and click function
  $('#arrowpath').click(function(){
    if($('#arrow').css('opacity') == '1') {
      $("html, body").animate({ scrollTop: $(document).height() }, "slow");
      return false;
    };
  });

  //main image loader
  var load;

  function loadFunction() {
    load = setTimeout(showPage, 1000);
  }

  function showPage() {
    document.querySelector(".loader").style.opacity = "0";
    document.querySelector(".img-container").style.opacity = "1";
  }

  loadFunction();


});
