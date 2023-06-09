$(document).scroll(function () {
  var $nav = $(".site-header");
  $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
});

$(document).ready(function () {
  var colors = ["#1565d808", "#009c3408", "#ff99000d", "#8f5aff08"];
  var bordercolors = ["#1565d8", "#009c34", "#ff9900", "#8f5aff"];
  // var randomColor = colors[Math.floor(Math.random() * colors
  // .length)];
  // $('.masking-btn').css('background-color', randomColor);
  $(".report-card").each(function (index) {
    // var randomColor = color;
    $(this).css("background-color", colors[index]);
    $(this).css("border", `1px solid ${bordercolors[index]}`);
  });

  // show first letters
  $(".user-name").each(function () {
    var text = $(this).text();
    var words = text.split(" ");
    var modifiedWords = words.map(function (word) {
      return word.charAt(0);
    });
    var modifiedText = modifiedWords.join("");
    $(this).text(modifiedText);
  });
});
