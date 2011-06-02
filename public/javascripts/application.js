// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
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
