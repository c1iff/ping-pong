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


$(document).ready(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#number').val());
    var pingPongArray = pingPongNumbers(userNumber);
    pingPongArray.forEach(function(number){
      console.log('hi' + number);
      $('.display ul').append("<li>" + number + "</li>");
    });
  });
});
