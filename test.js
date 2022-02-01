let timer = document.getElementById("timeDisplay");
var hours = 0;
var minutes = 0;
var seconds = 0;
var milliseconds = 0;
var buttonClick = 0;
var stoptime = true;

function start(){
  if(buttonClick == 0){
  if(stoptime == true)
    stoptime = false;
    timercount();
    buttonClick = buttonClick + 1;
  }
  else{
    alert("Start has already been selected, stopwatch has been stopped. Please exit this alert to start it up again");
  }
}
function stopT(){
  if(buttonClick == 1){
  if(stoptime == false)
  stoptime = true;
  buttonClick = buttonClick - 1
  }
}
function timercount(){
  if (stoptime == false){
    milliseconds = parseInt(milliseconds);
    seconds = parseInt(seconds);
    minutes = parseInt(minutes);
    hours = parseInt(hours);
    milliseconds = milliseconds + 1;

    if(milliseconds == 100){
      seconds = seconds + 1;
      milliseconds = 0;
    }
    if(seconds == 60){
      minutes = minutes + 1;
      seconds = 0;
      milliseconds = 0;
    }
    if(minutes == 60){
      hours = hours + 1;
      minutes = 0;
      seconds = 0;
      milliseconds = 0;
    }
    if(milliseconds < 10 || milliseconds == 0){
      milliseconds = "0" + milliseconds;
    }
    if(seconds < 10 || seconds == 0){
      seconds = "0" + seconds;
    }
    if(minutes < 10 || minutes == 0){
      minutes = "0" + minutes;
    }
    if(hours < 10 || hours == 0){
      hours = "0" + hours;
    }
    timer.innerHTML = hours + ":" + minutes + ":" + seconds + ":" + milliseconds;
    setTimeout("timercount()", 0);
  }
}
function reset(){
  timer.innerHTML = "00:00:00:00"
  stoptime = true;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
}