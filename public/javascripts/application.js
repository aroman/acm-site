// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {

  var currentPosition = 0;
  var slides = $('.slide');
  var numSlides = slides.length;
  var slideNames = ['home','work','code','play','write'];

  manageControls(currentPosition);
  $('.article').hide();

  $('.control').bind('click',
    function(){
      switch ($(this).attr('id')) {
        case 'home-slide': currentPosition = 0; break;
        case 'work-slide': currentPosition = 1; break;
        case 'code-slide': currentPosition = 2; break;
        case 'play-slide': currentPosition = 3; break;
        case 'write-slide':currentPosition = 4; break;
        case 'next-slide': currentPosition+= 1; break;
        case 'last-slide': currentPosition-= 1; break;
      }
      manageControls(currentPosition);
      $('#slide-container').animate({
        'marginLeft' : 860*(-currentPosition)
      });
      openArticle(currentPosition);
   }); 

  function manageControls(position){
    if (position == 0) 
      $('#last-slide').hide(); 
    else 
      $('#last-slide').show();
    if (position == numSlides-1) 
      $('#next-slide').hide(); 
    else 
      $('#next-slide').show();
    
    $('#slide-links .control').css('backgroundColor', '#8e8e8e');
    $('#'+slideNames[position]+'-slide').css('backgroundColor', '#0182ac');
  }

  function openArticle(position){
    $('.article').slideUp();
    $('#'+slideNames[position]+'-article').delay(400).slideDown();
  }

  // login box
  $("#l-open").click(function() {
    $("#l-open").slideUp(200);
    $("#auth").slideDown();
    $("#l-close").delay(500).fadeIn(200);
  });
  $("#l-close").click(function() {
    $("#l-close").slideUp(200);
    $("#auth").slideUp();
    $("#l-open").delay(500).fadeIn(200);
  });
});
