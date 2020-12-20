//JavaScript file for JS Code Quiz

var startQuiz = document.querySelector("#start");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var option0 = document.getElementById("btn0");
var option1 = document.querySelector("#btn1");
var option2 = document.querySelector("#btn2");
var option3 = document.querySelector("#btn3");
var questionCount = 0;

var totalSeconds = 0;
var secondsElapsed = 0;
var interval;

var questionsAnswers = [
    {
        question: "What is JavaScript?",
        options: ["Coffee Instructions", "Programming Language", "Dilithium Factoring", "Cursive"],
        correctAnswer: "Programming Language"
},
{
    question: "What does DOM stand for?",
    options: ["Data On Memory", "Display Open Main", "Document Object Model", "Demo On Monitor"],
    correctAnswer: "Document Object Model"
},
{
    question: "What does 'var' stand for?",
    options: ["Various", "Varnish", "Variform", "Variable"],
    correctAnswer: "Variable"
},
{
    question: "What is the name of the most popular front-end open source toolkit?",
    options: ["Shoestrap", "Bootstrap", "Sneakerstrap", "Slidestrap"],
    correctAnswer: "Bootstrap"
},
{
    question: "Which <tag> is used to add JavaScript to an HTML page?",
    options: ["<java>", "<js>", "<javascript>", "<script>"],
    correctAnswer: "<script>"
},
{
    question: "If you created a function named 'addingNumbers()' How would you call it (to run)?",
    options: ["call addingNumbers()", "return addingNumbers()", "var addingNumbers()", "addingNumbers()"],
    correctAnswer: "addingNumbers()"
},
{
    question: "Which set of characters are used when creating an array?",
    options: ["[ ]", "( )", "\“ \“", "{ }"],
    correctAnswer: "[ ]"
},
{
    question: "Which of the following can be used to create a loop?",
    options: ["for", "loop", "round", "arc"],
    correctAnswer: "for"
},
{
    question: "What is the command used to change a string into an integer?",
    options: ["changeInt()", "numberInt()", "stringInt()", "parseInt()"],
    correctAnswer: "parseInt()"
},
{
    question: "Which of the following is NOT a JavaScript data type?",
    options: ["number", "box", "object", "string"],
    correctAnswer: "box"
},
{
    question: "Where do we place the “link” to the JavaScript file?",
    options: ["The <body> element", "The <head> element", "Either One", "Neither One"],
    correctAnswer: "Either One"
},
{
    question: "What was JavaScript originally named?",
    options: ["JavaScript", "LiveScript", "Coffee", "Mocha"],
    correctAnswer: "Mocha"
},
{
    question: "Who originally created JavaScript?",
    options: ["Bill Gates", "Brendan Eich", "Jim Clark", "Yan Zhu"],
    correctAnswer: "Brendan Eich"
},
{
    question: "In what year was JavaScript invented?",
    options: ["1992", "1995", "2000", "2001"],
    correctAnswer: "1995"
},
{
    question: "What “tool” is good to use in conjunction with the browser development tools?",
    options: ["alert", "return", "console.log", "execute.now"],
    correctAnswer: "console.log"
}
]
console.log(questionsAnswers[0].options[0]);

// Code for the timer below
function startTimer() {
    /*
    if (totalSeconds === 0) {
        getTotalSeconds();
    }
    clearInterval(interval);
    interval = setInterval(function () {
        totalSeconds -= 1;
        if (totalSeconds <= 0) {
        alert("Time is up!");
        clearInterval(interval);
        }

        updateTimer();

    }, 1000);
*/
    nextQuestion();
}

function nextQuestion(){
    console.log("You are here");

    option0.textContent = questionsAnswers[0].options[0];
    option1.textContent = questionsAnswers[0].options[1];
    option2.textContent = questionsAnswers[0].options[2];
    option3.textContent = questionsAnswers[0].options[3];
}

function processAnswer(num1) {
console.log(num1);
}

function formatTime(time) {
    return (time >= 10) ? time : `0${time}`;
}

function getTotalSeconds (){
    totalSeconds = parseInt(minutesDisplay.value) * 60;

}

function updateTimer () {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
}




startQuiz.addEventListener("click", startTimer);
option0.addEventListener("click", function(){processAnswer(0);});
option1.addEventListener("click", function(){processAnswer(1);});
option2.addEventListener("click", function(){processAnswer(2);});
option3.addEventListener("click", function(){processAnswer(3);});
