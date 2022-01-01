//Define important variables to get from HTML
var timerElement =document.querySelector(".timer-count");
var startElement = document.querySelector('.start-button');
var endElement = document.querySelector('.end-button');
var correct = document.querySelector(".correct");
var btn = document.querySelector(".btn");
var btn_active = document.getElementsByClassName('disabled')

var n = localStorage.getItem('count');

// Check if DOM is loaded before loading buttons so get the appropriate start and end time
document.addEventListener('DOMContentLoaded', function(event) {
    while (btn_active[0]) {
        btn_active[0].classList.remove('disabled')
    }
    // Create a timer
    start=localStorage.getItem('startTime_sec');
    var timer_ms = new Date().getTime()-start;
    var timer = Math.floor(timer_ms / 1000);
    document.getElementsByClassName('timer-count').innerText = timer
});

// Check if answer is correct
function winCount(){
    localStorage.setItem("count", n+1);
}

function startGame(){
    // Before starting the game clear the win count and previous time
    localStorage.removeItem("count");
    localStorage.removeItem('startTime');
    localStorage.removeItem('startTime_ms');
    // Mark the starting time
    localStorage.setItem('startTime', new Date());
    localStorage.setItem('startTime_ms', new Date().getTime());
}

function endGame(){
    localStorage.removeItem('endTime');
    localStorage.removeItem('endTime_ms');
    localStorage.setItem('endTime', new Date());
    localStorage.setItem('endTime_ms', new Date().getTime());
}

function calculateScore(initals){
    var initials = window.prompt("Enter your initials here");
    var startedTime=localStorage.getItem('startTime_ms');
    var finishedTime=localStorage.getItem('endTime_ms');
    var timeBonus_ms = finishedTime-startedTime;
    var correctString=localStorage.getItem('count');
    if (correctString != 'undefined'){
        var correctCount=correctString.length;
    }
    var timeBonus=600-timeBonus_ms/1000;
    if (timeBonus >0){
        var totalScore=timeBonus+correctCount;
        localStorage.setItem("is", initials);
        localStorage.setItem("ts", totalScore);
        document.getElementsByClassName('initialScore').innerText = initials + totalScore;
    } else{
        var totalScore=correctCount;
        localStorage.setItem("is", initials);
        localStorage.setItem("ts", totalScore);
        document.getElementsByClassName('initialScore').innerText = initials + totalScore;
    }
}

//Create event listeners to start and end game

if (startElement){
    startElement.addEventListener("click", startGame);
}

if (correct){
    correct.addEventListener("click", winCount);
}

if (endElement){
    endElement.addEventListener("click", endGame);
    endElement.addEventListener("click", calculateScore);
}

if (initials != "undefined"){
    calculateScore(initials);
}
// function endGame(){
//     var startingTime=localStorage.getItem('startTime');
//     localStorage.setItem('endTime', timeNow-startingTime)
// }

// var startElement = document.getElementbyId('start-button');
// var endElement = document.querySelector(".end-button");
// var timerElement = document.getElementbyId('timer-count');
//localStorage.clear()

// if (startElement){
// startElement.addEventListener('click', function(){
//     localStorage.setItem('stoptime', false)
//     localStorage.setItem('startTime', new Date())
//     console.log(startTime)
//     return startTime
// })}


// var startElement = document.querySelector(".start-button");
// var timerElement =document.querySelector(".timer-count");
// // var correctElement =document.querySelector(".correct");
// // var incorrectElement =document.querySelector(".incorrect");

// // Define variables for the timer -> timer itself, the start and end button
// // var startElement = localStorage.getItem("start-button");
// // var endElement = localStorage.getItem("end-button");
// // var timerElement = localStorage.getItem("timer-count");

// // // Then store those variables in local storage
// // document.getElementById('start-button').value = startElement;
// // document.getElementById('end-button').value = endElement;
// // document.getElementById('timer-count').value = timerElement;

// localStorage.setItem('stoptime', true); 
// var stoptime = localStorage.getItem('stoptime'); 

// localStorage.setItem('sec', 0);
// var sec = localStorage.getItem('sec'); 

// localStorage.setItem('min', 0); 
// var min = localStorage.getItem('min'); 


// startElement.addEventListener('click', function (event) {
//    if (stoptime==true){
//     stoptime=false;
//     timerCycle()
//    }
//   });

// endElement.addEventListener('click', function (event) {
//     if (stoptime==false){
//      stoptime=true;
//     }
//    });

// function timerCycle(){
//     if (stoptime ==false){
//         sec = localStorage.getItem('sec');
//         min = localStorage.getItem('min');
//         sec = parseInt(sec);
//         min = parseInt(min);

//         sec = sec + 1;
//         min = min +1;

//         if (sec == 60){
//             min = min +1;
//             sec = 0
//         }

//         // if (sec < 10 || sec == 0) {
//         //     sec = '0' + sec;
//         //   }
//         //   if (min < 10 || min == 0) {
//         //     min = '0' + min;
//         //   }
//     timerElement.innerHTML =  min + ':' + sec;

//     setTimeout("timerCycle()", 1000);

//     }
// }
