//Define important variables to get from HTML
var timerElement =document.querySelector(".timer-count");
var startElement = document.querySelector('.start-button');
var endElement = document.querySelector('.end-button');
var correct = document.querySelector(".correct")

// var timeNow= new Date()

function startGame(){
    localStorage.removeItem('startTime');
    localStorage.setItem('startTime', new Date());
}

function endGame(){
    localStorage.setItem('endTime', new Date());
}


if (startElement){
    startElement.addEventListener("click", startGame);
}
if (endElement){
    endElement.addEventListener("click", endGame);
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
