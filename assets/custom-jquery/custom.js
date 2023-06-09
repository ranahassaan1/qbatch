$(document).scroll(function () {
  var $nav = $(".site-header");
  $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});



$(document).ready(function () {
  $('.user-name').each(function() {
    var text = $(this).text();
    var words = text.split(' ');
    var modifiedWords = words.map(function(word) {
      return word.charAt(0);
    });
    var modifiedText = modifiedWords.join('');
    $(this).text(modifiedText);
  });
});
