// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  $("#we-mask").hide();
  $(".section").hide();

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

  // we page 
  $("#link-work").click(function() {
    $("#we-mask").fadeIn();
    $("#we-work").show();
    $("#we-work .article").hide();
    $("#we-work .article").delay(300).slideDown();
  });
  $("#link-code").click(function() {
    $("#we-mask").fadeIn();
    $("#we-code").show();
    $("#we-code .article").hide();
    $("#we-code .article").delay(300).slideDown();
  });
  $("#link-play").click(function() {
    $("#we-mask").fadeIn();
    $("#we-play").show();
    $("#we-play .article").hide();
    $("#we-play .article").delay(300).slideDown();
  });
  $("#link-write").click(function() {
    $("#we-mask").fadeIn();
    $("#we-write").show();
    $("#we-write .article").hide();
    $("#we-write .article").delay(300).slideDown();
  });
  $(".section .we-back").click(function() {
    $("#we-mask").fadeOut();
    $("#we-work .article").slideUp(200);
    $("#we-work").fadeOut();
    $("#we-write .article").slideUp(200);
    $("#we-write").fadeOut();
    $("#we-code .article").slideUp(200);
    $("#we-code").fadeOut();
    $("#we-play .article").slideUp(200);
    $("#we-play").fadeOut();
  });

});
