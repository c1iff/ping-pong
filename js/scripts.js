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
  $('.input form').submit(function(event){
    event.preventDefault();
    var userNumber = parseInt($('input#number').val());
    var pingPongArray = pingPongNumbers(userNumber);
    console.log(pingPongArray);

  for (var i = 0; i < pingPongArray.length; i++){
      $('#text').append(pingPongArray[i]);
    }
  });
});


//$(".output").animate({left: '100%'});
//pingPongArray.forEach(function(number) {
//  });
    // for (var i = 0; i < pingPongArray.length; i++){
    //   if (i % 2 === 0){
    //     $('#output-left').append("<li>" + pingPongArray[i] + "</li>");
    //   } else {
    //     $('#output-right').append("<li>" + pingPongArray[i] + "</li>");
    //   }
    // }
    // console.log(pingPongArray);
    // pingPongArray.forEach(function(number){
    //
    //   $('.output').append("<p>" + number + "</p>");
    //   $('.output').animate({left: '250px'});
