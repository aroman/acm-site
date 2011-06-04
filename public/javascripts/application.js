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
  $("#link-jobs").click(function() {
    $("#we-menu").slideUp(200);
    $("#we-jobs").delay(300).slideDown();
  });
  $("#link-code").click(function() {
    $("#we-menu").slideUp(200);
    $("#we-code").delay(300).slideDown();
  });
  $("#link-projects").click(function() {
    $("#we-menu").slideUp(200);
    $("#we-projects").delay(300).slideDown();
  });
  $("#link-journals").click(function() {
    $("#we-menu").slideUp(200);
    $("#we-journals").delay(300).slideDown();
  });
  $(".we-back").click(function() {
    $("#we-jobs").slideUp(200);
    $("#we-code").slideUp(200);
    $("#we-projects").slideUp(200);
    $("#we-journals").slideUp(200);
    $("#we-menu").delay(300).slideDown(200);
  });

});
