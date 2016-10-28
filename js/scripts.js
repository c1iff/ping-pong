//Back-end Logic
var pingPongNumbers = function(input) {
  var numbers = [];

  for (var i = 1; i <= input; i++) {
    numbers.push(i);
  }
  var numberPingPongs = numbers.map(function(number){
    if (number % 3 === 0 && number % 5 === 0){
      return "ping-pong";
    } else if (number % 3 === 0) {
      return "ping";
    } else if (number % 5 === 0) {
      return "pong";
    } else {
      return number;
    }
  });
  return numberPingPongs;
}

//Front-end logic
$(document).ready(function(){
  $('.input form').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#number').val());
    if (!userNumber){
      alert('You must enter a number');
    }
    var pingPongArray = pingPongNumbers(userNumber);
    $("li.num-list").remove();
    for (var i = 0; i < pingPongArray.length; i++){
      $('#text').append('<li class="num-list">--' + pingPongArray[i] + " </li>");
    }

    $("li.num-list").hide().each(function(number) {
      $(this).delay( number * 400 ).fadeIn();
      $(this).delay( number * 400 ).fadeOut();
      $(".output").animate({left: $(this).parent().width()}, 400);
      $(".output").animate({left:'-='+ $(this).parent().width()}, 400);
    });

  });
});
