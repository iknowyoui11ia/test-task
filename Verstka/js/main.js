function getRandomArbitrary(min, max) {
  var result = Math.random() * (max - min) + min;
  return Math.floor(result);
}

$(".btn").on("click", function () {
  var randWidth = getRandomArbitrary(10, 100);

  $(".progress-bar-value")
      .animate({ width: randWidth + '%' }, 'slow');

  $(".progress-bar-numeric-value").text(randWidth + '%');
});