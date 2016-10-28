var pingPongNumbers = function(input) {
  var numbers = [];

  for (var i = 1; i <= input; i++) {
    numbers.push(i);
  }
  var numberPinPongs = numbers.map(function(number){
    if (number % 3 === 0){
      return "ping";
    } else if (number % 5 === 0) {
      return "pong";
    } else if (number % 15 === 0) {
      return "ping-pong";
    } else {
      return number;
    }
  });
  return numberPinPongs;
}


$(document).ready(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#number').val());
    var pingPongNumber = pingPongNumbers(userNumber);
    $('#output h5').text(pingPongNumber);
  });
});
