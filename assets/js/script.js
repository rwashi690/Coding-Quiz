//Define important variables to get from HTML
var timerElement = document.getElementById('timer-count');
var startElement = document.getElementById('start-button');
var btn_active = document.getElementsByClassName('disabled');
var questionElement = document.getElementById('givenQuestion');
var choicesElement = document.getElementById('choices');
var correctElement = document.getElementById('win-count');


var shuffleQuestions;
var currentQuestionIndex;
var correctCounter = 0;

timerElement.hidden=true;
correctElement.hidden=true;
document.getElementById('question_container').hidden=true;

// Check if DOM is loaded before loading buttons so get the appropriate start and end time
document.addEventListener('DOMContentLoaded', function(event) {
    while (btn_active[0]) {
        btn_active[0].classList.remove('disabled')
    }
});

function startGame(){
    // start=localStorage.getItem('startTime_sec');
    let timerid = setInterval(()=>{
        document.getElementById('timer-count').textContent=parseInt(document.getElementById('timer-count').textContent)-1;
    }, 1000);
    setTimeout(() => { clearInterval(timerId); alert('TIme is up!'); }, 600*1000); //Stop after 10 minutes
    document.getElementById("start-button").hidden=true;
    document.getElementById("high-scores").hidden=true;
    document.getElementById('timer-count').hidden=false;
    shuffledQuestions = questionBank.sort(() => Math.random()-.5) //This shuffles the questions it will either give us a number above or below zero 50% of the time making sure the questions are sorted differently each time
    currentQuestionIndex =0
    document.getElementById('question_container').hidden=false;
    setNextQuestion()
}

function setNextQuestion(){
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function selectAnswer(event){

}

function showQuestion(Question){
    // for (var i=0; i< questionBank.length; i++){
    //     var question = questionBank[i].Question;
    //     var choices = questionBank[i].PossibleAnswers;
    //     var correct = questionBank[i].Answer;
    // } 
    questionElement.innerText=Question.Question
    Question.Answers.forEach(answer => {
        var button = document.createElement('button');
        button.textContent =answer.text;
        button.classList.add('btn', 'btn-outline-success', 'btn-block', 'btn-lg');
        if (answer.correct){
            button.dataset.correct=answer.correct
            correctCounter++
            correctElement.hidden=true;
            correctElement.textContent = correctCounter;
         }
        button.addEventListener("click", selectAnswer)
        choicesElement.appendChild(button)
    })
}


// Event Listeners
startElement.addEventListener("click", startGame);


// Make an object of Questions
var questionBank= [
    {
        "Question":"Commonly used data types within JavaScript are the following ...",
        "Answers":[
            {text: "Booleans, Numbers, and Strings", correct:true},
            {text: "Integers, Numbers, and Strings", correct:false},
            {text: "Variables, Dictionaries, and Numbers", correct:false},
            {text: "True or False, Integers, and Variables", correct:false}
        ]
    },
    {
        "Question":"What kind of variable can store multiple values in JavaScript?",
        "Answers":[
            {text: "String", correct:false},
            {text: "Dictionary", correct:false},
            {text: "Object", correct:true},
            {text: "Array", correct:false}
        ]
    },
    {
        "Question":"Commonly used data types within JavaScript are the following ...", 
        "Answers":[
            {text: "Parenthesis ()", correct:false},
            {text: "Quotation Marks'' ", correct:false},
            {text: "Curly Brackets {}", correct:true},
            {text: "Square Brackets []", correct:false}
        ]
    },
    {
        "Question":"Booleans are either ______ or ______.", 
        "Answers":[
            {text: "Right/Left", correct:false},
            {text: "Yes/No", correct:false},
            {text: "Correct/Incorrect", correct:false},
            {text: "True/False", correct:true}
        ]
    },
    {
        "Question":"Arrays in JavaScript can be used to store what following data types?", 
        "Answers":[
            {text: "Numbers", correct:false},
            {text: "Strings", correct:false},
            {text: "Booleans", correct:false},
            {text: "All of the above", correct:true}
        ]
    }
]







// // Check if answer is correct
// function winCount(){
//     localStorage.setItem("count", n+1);
// }


// function endGame(){
//     localStorage.removeItem('endTime');
//     localStorage.removeItem('endTime_ms');
//     localStorage.setItem('endTime', new Date());
//     localStorage.setItem('endTime_ms', new Date().getTime());
// }

// function calculateScore(initals){
//     var initials = window.prompt("Enter your initials here");
//     var startedTime=localStorage.getItem('startTime_ms');
//     var finishedTime=localStorage.getItem('endTime_ms');
//     var timeBonus_ms = finishedTime-startedTime;
//     var correctString=localStorage.getItem('count');
//     if (correctString != 'undefined'){
//         var correctCount=correctString.length;
//     }
//     var timeBonus=600-timeBonus_ms/1000;
//     if (timeBonus >0){
//         var totalScore=timeBonus+correctCount;
//         localStorage.setItem("is", initials);
//         localStorage.setItem("ts", totalScore);
//         document.getElementsByClassName('initialScore').innerText = initials + totalScore;
//     } else{
//         var totalScore=correctCount;
//         localStorage.setItem("is", initials);
//         localStorage.setItem("ts", totalScore);
//         document.getElementsByClassName('initialScore').innerText = initials + totalScore;
//     }
// }

// //Create event listeners to start and end game



// if (correct){
//     correct.addEventListener("click", winCount);
// }

// if (endElement){
//     endElement.addEventListener("click", endGame);
//     endElement.addEventListener("click", calculateScore (initials));
// }
// var initials=localStorage.getItem('is');
// if (initials != "undefined"){
//     calculateScore(initials);
// }
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
