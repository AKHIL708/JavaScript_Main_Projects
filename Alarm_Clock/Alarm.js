let minutesInterval
let secondsInterval;
let milliSecondsInterval
let milliSeconds = 59;
let seconds = 59;


function Start(){

  let inputVal = document.getElementById("inputVal").value;
  document.getElementById("minutes").innerHTML = inputVal;
  
   minutesInterval = setInterval(function demo1() {
    let minutesVal = document.getElementById("minutes").innerHTML = inputVal--;
    if (minutesVal == 0){
      document.getElementById("minutes").innerHTML = "00"
      document.getElementById("seconds").innerHTML = "00"
      document.getElementById("milliseconds").innerHTML = "00"
     

      clearInterval(minutesInterval)
      clearInterval(secondsInterval)
      clearInterval(milliSecondsInterval)
      alert("timer Expired ")
    }
    return demo1;
  }(),60000);
  
  

  secondsInterval = setInterval(function demo2() {
    let secondsVal = document.getElementById("seconds").innerHTML = seconds--;
    console.log("seconds : " + seconds);
    if (secondsVal <= 1) {
      seconds = 59;
    }
    return demo2;
  }(),1000);
  
  
  milliSecondsInterval = setInterval(function demo3(){
    let milliSecondsVal = document.getElementById("milliseconds").innerHTML = milliSeconds--;
    console.log("milliseconds : " + milliSeconds);
    if (milliSecondsVal <= 0) {
        milliSeconds = 59;
    }
    return demo3;
  }(), 10);


};
