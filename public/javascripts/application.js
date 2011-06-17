// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {

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
    $("#we-menu").slideUp(300);
    $("#we-work").delay(300).slideDown();
  });
  $("#link-code").click(function() {
    $("#we-menu").slideUp(300);
    $("#we-code").delay(300).slideDown();
  });
  $("#link-play").click(function() {
    $("#we-menu").slideUp(300);
    $("#we-play").delay(300).slideDown();
  });
  $("#link-write").click(function() {
    $("#we-menu").slideUp(300);
    $("#we-write").delay(300).slideDown();
  });
  $(".we-back").click(function() {
    $("#we-work").slideUp(200);
    $("#we-code").slideUp(200);
    $("#we-play").slideUp(200);
    $("#we-write").slideUp(200);
    $("#we-menu").delay(300).slideDown();
  });

});
