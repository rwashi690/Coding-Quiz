//Define important variables to get from HTML
var timerElement = document.getElementById('timer-count');
var startElement = document.getElementById('start-button');
var btn_active = document.getElementsByClassName('disabled');
var questionElement = document.getElementById('givenQuestion');
var choicesElement = document.getElementById('choices');
var correctElement = document.getElementById('win-count');
var highScoreButton=document.getElementById("high-scores");
var questionContainerElement=document.getElementById('question_container');

// Define variables for app functionality
var shuffleQuestions;
var currentQuestionIndex;
var correctCounter = 0;

// Make an object to hold a bank of questions
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

// Hide elements that are not yet to be displayed on the HTML
timerElement.hidden=true;
correctElement.hidden=true;
questionContainerElement.hidden=true;

// Check if DOM is loaded before allowing buttons to be clicked so game actually works
document.addEventListener('DOMContentLoaded', function(event) {
    while (btn_active[0]) {
        btn_active[0].classList.remove('disabled')
    }
});

// Create a function that will execute upon hitting the start button
function startGame(){
    let timerid = setInterval(()=>{
        timerElement.textContent=parseInt(timerElement.textContent)-1;
    }, 1000);
    setTimeout(() => { clearInterval(timerId); alert('TIme is up!'); }, 600*1000); //Stop after 10 minutes
    startElement.hidden=true;
    highScoreButton.hidden=true;
    timerElement.hidden=false;
    correctElement.hidden=false;
    shuffledQuestions = questionBank.sort(() => Math.random()-.5) //This shuffles the questions it will either give us a number above or below zero 50% of the time making sure the questions are sorted differently each time
    currentQuestionIndex = 0;
    correctCounter = 0;
    questionContainerElement.hidden=false;
    setNextQuestion()
}

// Set the next question and make sure the order is always different when taking the quiz
function setNextQuestion(){
    removePreviousChoices()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

// Create a function to remove previous answer buttons from the choices container when next question is displayed
function removePreviousChoices(){
    while (choicesElement.firstChild){
        choicesElement.removeChild(choicesElement.firstChild)
    }
}

// Create a function to create the necessary buttons to display on the HTML page
function showQuestion(Question){
    questionElement.innerText=Question.Question;
    Question.Answers.forEach(answer => {
        var button = document.createElement('button');
        button.innerText =answer.text;
        button.classList.add('btn', 'btn-outline-success', 'btn-block', 'btn-lg');
        if (answer.correct){
            button.dataset.correct=answer.correct
         }
        button.addEventListener("click", selectAnswer)
        choicesElement.appendChild(button)
    })
}

// Execute a event once the correct answer is chosen
function selectAnswer(event){
    var selectedButton=event.target;
    var correctChoice = selectedButton.dataset.correct;
    // loop through all of the children in the answer buttons
    Array.from(choicesElement.children).forEach(button =>{
        countCorrect(correctChoice);
    })
}

function countCorrect(button){
    // preventDefault()
    // Add to the correct counter as when you choose the right choice
    if (button){
        correctCounter = correctCounter+1/4
        correctElement.textContent=correctCounter;
    }
}

function finishGame(){
    // 
    var initials = window.prompt("Enter your initials here");
}


// Add Necessary Event Listeners
startElement.addEventListener("click", startGame);

choicesElement.addEventListener("click", ()=>{
    currentQuestionIndex++
    if (shuffledQuestions.length > currentQuestionIndex){
        setNextQuestion()
    } else {
        finishGame()
    }
})






// Code I tried and didn't work


// correctCounter++
// correctElement.hidden=true;
// correctElement.textContent = correctCounter;


    // for (var i=0; i< questionBank.length; i++){
    //     var question = questionBank[i].Question;
    //     var choices = questionBank[i].PossibleAnswers;
    //     var correct = questionBank[i].Answer;
    // } 

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
