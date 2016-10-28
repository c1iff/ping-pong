//Back-end Logic
/*the following function takes a input number and
and returns an array with all the sequential numbers
up to the input, and replaces every number divisible by
15 with ping-pong, 3 with pin , and 5 with pong.
*/
var pingPongNumbers = function(input) {
  var numbers = [];

  for (var i = 1; i <= input; i++) { //Creates array with sequential numbers upto user input
    numbers.push(i);
  }
  var numberPingPongs = numbers.map(function(number){ //replaces numbers[] divisible by 15, 3, 5
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
  return numberPingPongs; // returns final array
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
    //creates a list (set to display: none) of all elements in returned array
    for (var i = 0; i < pingPongArray.length; i++){
      $('#text').append('<li class="num-list">--' + pingPongArray[i] + " </li>");
    }
    //displays list of li elements one at a time and animates pong ball
    $("li.num-list").hide().each(function(number) {  // loop each li and call function
      $(this).delay( number * 400 ).fadeIn();  //fade element in after 400ms delay
      $(this).delay( number * 400 ).fadeOut(); // fade element out after 400ms delay
      $(".output").animate({left: $(this).parent().width()}, 400); //find width of parent element and animate ball right
      $(".output").animate({left:'-='+ $(this).parent().width()}, 400); //find width of parent elemen and animate ball left
    });

  });
});
