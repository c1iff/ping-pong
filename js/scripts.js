var pingPongNumbers = function(input) {

}


$(document).ready(function(){
  $('.blanks form').submit(function(event){
    event.preventDefault();
    var userNumber = $('input#number').val();
    var pingPongNumber = pingPongNumbers(userNumber);
    $('#output h5').text(pingPongNumber);
  });
});
