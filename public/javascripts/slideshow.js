$(document).ready(function() {

  var speed = 400;
  var slideWidth = 960;
  var currentSlide = 0;

  var slides = $('.slideshow .slideContainer .slide');
  var numSlides = slides.length;

  /* create .control elements */ 
  $('.slideshow').append('<span class="control last">last</span>');
  $('.slideshow').append('<span class="control next">next</span>');

  /* create links to slides */ 
  $('.slideshow').append('<ul class="slideLinks"></ul>');
  $.each(slides, function() {
    var title = $(this).attr('title');
    $('.slideshow .slideLinks').
      append('<li class="control" title="'+title+'"></li');
  });
  
  /* move articles out of the slide */
  var articles = $('.slideshow .slide .article.container');
  articles.remove().appendTo('#main');

  articles.hide();

  /* slideshow setup */ 
  var maxHeight = Math.max.apply(Math,
    slides.map(function() { return $(this).height(); }).get());
  $('.slideshow').height(0);
  $('.slideshow .slideContainer').width(numSlides * slideWidth);
  $('.slideshow .slideLinks').css( {
    width: numSlides * 20,
    left: slideWidth / 2 - numSlides * 10 - 5
  });
  $('span.we').eq(0).hide();

  /* hash change event listener  */
  $(window).hashchange(function() {
    newSlide = slides.index($('[title="'+location.hash.substr(1)+'"]'));
    if (newSlide >= 0)
      currentSlide = newSlide;
    refreshSlideshow(speed);
  });

  $(window).hashchange();

  /* .control click event listener */
  $('.slideshow .control').click(function() {
    if ($(this).attr('class') == 'control next')
      currentSlide += 1
    else if ($(this).attr('class') == 'control last')
      currentSlide -= 1
    else
      currentSlide = $('.slideLinks .control').index($(this));

    location.hash = '#'+slides.eq(currentSlide).attr('title');
  });
  
  function refreshSlideshow(speed) {
    var newHeight = slides.eq(currentSlide).height() + 30;
    $('.slideshow').stop().animate({ height: newHeight }, speed);
    $('.slideshow .slideContainer').stop()
      .animate({ left: currentSlide * -slideWidth}, speed);

    $('.slideshow .control').show();
    if (currentSlide == 0) {
      $('.slideshow .control.last').hide();
      $('span.we').eq(0).stop().fadeOut(200);
    } else {
      $('span.we').eq(0).stop().fadeIn();
    }
    if (currentSlide == numSlides-1) $('.slideshow .next').hide();

    $('.slideLinks .control').stop()
      .css({ backgroundColor:'#fff', opacity:0.4 });
    $('.slideLinks .control').eq(currentSlide)
      .css({ backgroundColor:'#0182ac' })
      .animate({ opacity:1.0 }, speed);
  }

  $('.slideLinks .control').mouseover(function() {
    if ($(this).index() != currentSlide)
      $(this).css({ opacity:0.6 });
  }).mouseout(function() {
    if ($(this).index() != currentSlide)
      $(this).css({ opacity:0.4 });
  });

});
