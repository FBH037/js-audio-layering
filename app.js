$(document).ready(function(){
  $digi1 = document.getElementById("didgi4");


  function playSong(songName){
    $(songName).trigger("play");
  }


  function playDigi1(){
  $("#didgi1").trigger("play");
  }


  //Spins record with timer start and stop
  $(".record").click(function(){
    if ($(this).attr('class') === "record"){
      $(this).toggleClass("rotate"); //Spin record
      $('#stopwatch').timer('resume'); //Start timer
      // $('audio').prop("currentTime", 5); //Set start time to 5 seconds into audio
      $('#drums1').trigger("play"); //Play audio
      window.setTimeout( playDigi1, 5000);
    }
    else{
      $(this).toggleClass("rotate"); //Stop record spin
      $('#stopwatch').timer('pause'); //Pause Timer
      $('audio').trigger("pause"); //Pause audio
      // $('audio').prop("currentTime",0); //Reset audio to time 0
    }
  });

  //Play on keypress
  $(window).keypress(function(e){
      if (e.keyCode === 97 )
      alert("That was an A");
    });





});
