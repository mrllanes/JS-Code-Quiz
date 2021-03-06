//JavaScript file for JS Code Quiz

var startQuiz = document.querySelector("#start");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var currentQuestion = document.querySelector("#question");
var option0 = document.querySelector("#btn0");
option0.hidden = true;
var option1 = document.querySelector("#btn1");
option1.hidden = true;
var option2 = document.querySelector("#btn2");
option2.hidden = true;
var option3 = document.querySelector("#btn3");
option3.hidden = true;
var initials = document.querySelector("#userInitials");
var saveBtn = document.querySelector("#saveBtn");
var resetBtn = document.querySelector("#reset");
resetBtn.hidden = true;
var trackingScore = document.querySelector(".userInput");
trackingScore.hidden = true;
var questionCount = 0;
var highScores = JSON.parse(localStorage.getItem("highscores")) || [];
var score = 0;
//Current time set manually here as a variable
var totalSeconds = 180;
var secondsElapsed = 0;
var interval;

// Array of Objects holding all Questions, options for answers and correct answers
var questionsAnswers = [
    {
        question: "What is JavaScript?",
        options: ["Coffee Instructions", "Programming Language", "Dilithium Factoring", "Form of Cursive"],
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
    option0.hidden = false;
    option1.hidden = false;
    option2.hidden = false;
    option3.hidden = false;
    questionCount = 0;
    var interval = setInterval(function () {
        totalSeconds--;
    if (totalSeconds <= 0) {
        clearInterval(interval);
        processScore();
    }

    updateTimer();

    }, 1000);


    startQuiz.hidden = true;

    nextQuestion();
} //timer function ends

// Populates Questions and answers with current/next objects
function nextQuestion(){
        console.log("You are here");
        currentQuestion.textContent = questionsAnswers[questionCount].question;
        option0.textContent = questionsAnswers[questionCount].options[0];
        option1.textContent = questionsAnswers[questionCount].options[1];
        option2.textContent = questionsAnswers[questionCount].options[2];
        option3.textContent = questionsAnswers[questionCount].options[3];
}

// This function will process whatever answer the user selects, comparing it to the actual answer, increasing the score if correct and incrementing the question number
function processAnswer(num1) {
    // console.log(questionCount);
        if (questionsAnswers[questionCount].options[num1] == questionsAnswers[questionCount].correctAnswer) {
            console.log("correct");
            score++;
        }
        else {
            console.log("WRONG!!!");
            totalSeconds -= 10;
        }
        questionCount++;
        if (questionCount <= 14) {
            nextQuestion();
        } else processScore();
}

// Here the final score is calculated, Answer buttons are hidden, start button visible and score prompt.
function processScore() {
    console.log((score / 15) * 100);
    option0.hidden = true;
    option1.hidden = true;
    option2.hidden = true;
    option3.hidden = true;
    // startQuiz.hidden = false;
    minutes.hidden = true;
    seconds.hidden = true;
    trackingScore.hidden = false;
    resetBtn.hidden = false;
    currentQuestion.innerHTML = "You answered " + score + " questions correctly. Your Grade is a: " + Math.round((score / 15) * 100) + "<br>" + "Please enter your name below";
}

// Functions and formatting for the timer below
function formatTime(time) {
    return (time >= 10) ? time : `0${time}`;
}

function getTotalSeconds (){
    totalSeconds = parseInt(minutesDisplay.value) * 60;
    console.log(totalSeconds);
}

function updateTimer () {
    var minutes = Math.floor(totalSeconds / 60);
    var seconds = totalSeconds % 60;
    minutesDisplay.textContent = formatTime(minutes);
    secondsDisplay.textContent = formatTime(seconds);
}

//Code for entering and storing user info and scores, writing to memory only
function saveUserScore(user) {
    var newScores = {
        name: user,
        score: score
    }
    highScores.push(newScores);
    localStorage.setItem("highscores", JSON.stringify(highScores));
}

// To retake the quiz and reset to defaults
function refreshPage () {
    window.location.reload();
}

// Event listeners for all button from the HTML file
startQuiz.addEventListener("click", startTimer);
option0.addEventListener("click", function(){processAnswer(0);});
option1.addEventListener("click", function(){processAnswer(1);});
option2.addEventListener("click", function(){processAnswer(2);});
option3.addEventListener("click", function(){processAnswer(3);});
saveBtn.addEventListener("click", function(event) {
    event.preventDefault();
    var user = initials.value;
    console.log(user, score);
    saveUserScore(user);
});
resetBtn.addEventListener("click", refreshPage);
