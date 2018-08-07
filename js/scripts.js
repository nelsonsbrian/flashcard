$(document).ready(function() {
  $("button#bark").click(function() {
    // $('ul#dog').prepend('<img class="ruff" src="img/dog.png" />');
    $("ul#dog").prepend("<li>Bark!</li>");
    // $('ul#cat').prepend('<img class="meow" src="img/cat.jpeg" />');
    $("ul#cat").prepend("<li>meooww?</li>");
  });

  $("button#meow").click(function() {
    // $('ul#cat').prepend('<img class="meow" src="img/cat.jpeg" />');
    $("ul#cat").prepend("<li>Meow!</li>");
    // $('ul#dog').prepend('<img class="ruff" src="img/dog.png" />');
    $("ul#dog").prepend("<li>Ruff?</li>");
    $("ul#cat").click(function() {
    alert('hi');
  });
  // $("img").click(function(){
  //   $(this).remove();
  // });


});

//   $(this).remove();
// });
// $("ul.ruff").children("li").first().click(function() {
//   $(this).remove();
// });
