// Place your application-specific JavaScript functions and classes here
// This file is automatically included by javascript_include_tag :defaults

$(document).ready(function() {
  
  /* auth module */
  $('table tr:even').addClass('alt');

  /* generate links 
  if ($('#auth').attr('class') == 'form') {
    $('#auth').hide();
    $('#auth .container')
      .append('<span id="l-close">close</span>');
    $('#header .container')
      .prepend('<span id="l-open">open</span>');
  }
  */

  $("#l-open").click(function() {
    $("#l-open").slideUp(200);
    $("#auth").slideDown();
   // $("#l-close").delay(500).fadeIn(200);
  });
  $("#l-close").click(function() {
   // $("#l-close").slideUp(200);
    $("#auth").slideUp();
    $("#l-open").delay(300).slideDown(200);
  });
});
