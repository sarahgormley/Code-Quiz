// Questions
var questions = [{
    question: "What does HTML stand for?",
    choices: ["Hot Mail", "How to Make Lasagna", "Hot Take Markup Language", "Hyper Text Markup Language"],
    correctAnswer: 3
}, {
    question: "</br> What type of tag is this?",
    choices: ["Break tag", "Broken tag", "Opening tag", "Neither"],
    correctAnswer: 0
}, {
    question: "</body> Is this an opening tag or a closing tag?",
    choices: ["Opening", "Closing", "Neither", "Could be both"],
    correctAnswer: 1
}, {
    question: "Which of the below is the abbreviation of CSS?",
    choices: ["Cascade Style Sheets", "Color and Style Sheets", "Cascading Style Sheets", "Coded Style Sheet"],
    correctAnswer: 2
}, {
    question: "Which of the below CSS properties is used to change the background color of CSS ?",
    choices: ["bg color", "color-background", "background-color", "color"],
    correctAnswer: 2
}, {
    question: "Which element is used to represent the transparency of an element in CSS ?",
    choices: ["Hover", "Opacity", "Transparent", "Overlay"],
    correctAnswer: 1
}, {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correctAnswer: 0
}, {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ['alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alert("Hello World");'],
    correctAnswer: 3
}, {
    question: "How do you write an IF statement in JavaScript?",
    choices: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
    correctAnswer: 0
}, {
    question: "How can you add a comment in a JavaScript?",
    choices: ["//This is a comment", "'This is a comment'", "<!--This is a comment-->", "~This is a comment~"],
    correctAnswer: 0
}, {
    question: "What is the correct way to write a JavaScript array?",
    choices: ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]'],
    correctAnswer: 3
}, {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onclick", "onmouseover"],
    correctAnswer: 2
}, {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["x", "=", "*", "-"],
    correctAnswer: 1
}, {
    question: "What is the correct HTML for inserting an image?",
    choices: ['<image src="image.gif" alt="MyImage">', '<img src="image.gif" alt="MyImage">', '<img alt="MyImage">image.gif</img>', '<img href="image.gif" alt="MyImage">'],
    correctAnswer: 1
}, {
    question: "Which HTML element is used to specify a footer for a document or section?",
    choices: ["<bottom>", "<section>", "<footer>", "<aside>"],
    correctAnswer: 2
}];

// Variables

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("time-left");
var timesUp = document.getElementById("times-up")

var startContainer = document.getElementById("start-container");

var startBtn = document.getElementById("start-btn");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var submitBtn = document.getElementById("submit-btn");
var restartBtn = document.getElementById("restart-btn");
var backBtn = document.getElementById("back-btn")
var clearBtn = document.getElementById("clear-btn")

var quizContainer = document.getElementById("quiz-container");
var questionTitle = document.getElementById("question-title");
var answerCheck = document.getElementById("answer-check");
var answer1 = document.getElementById("btn1")
var answer2 = document.getElementById("btn2")
var answer3 = document.getElementById("btn3")
var answer4 = document.getElementById("btn4")

var summary = document.getElementById("summary");
var finalScore = document.getElementById("final-score");
var form = document.getElementById("form");
var initials = document.getElementById("initials");

var highscores = document.getElementById("highscores");
var viewHighscore = document.getElementById("view-highscore");
var scoreList = document.getElementById("list-of-scores");

var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionInd = 0;
var questionRandom;

var secsLeft = 120;

//When start button is clicked
function newQuiz() {
    questionInd = 0;
    secsLeft = 120;
    timeLeft.textContent = secsLeft;
    initials.textContent = "";
    startContainer.style.display = "none";
    quizContainer.style.display = "block";
    timer.style.display = "block"
    timesUp.style.display = "none"

    //Starts timer
    var timerInterval = setInterval(function() {
        secsLeft--;
        timeLeft.textContent = secsLeft + " seconds left.";

        if (secsLeft === 0) {
            clearInterval(timerInterval);
            timesUp.style.display = "block";
        }

    }, 1000);

    displayQuiz()

}

//function showQuiz 
function displayQuiz() {
    cycleQuestions();
}
// show next question
function cycleQuestions() {

    questionRandom = questions[Math.floor(Math.random() * questions.length)]
    console.log(questionRandom)

    questionTitle.textContent = questionRandom[questionInd].question;
    answer1.textContent = questions[questionInd].choices[0];
    answer2.textContent = questions[questionInd].choices[1];
    answer3.textContent = questions[questionInd].choices[2];
    answer4.textContent = questions[questionInd].choices[3];
}


//create function to check answer

//hide line break
//if else rules for checking answer
//rule for continuing thru questions if/else
function checkAns() {
    if (questions[questionInd].correctAnswer === questions[questionInd].choices[correctAnswer]) {
        console.log("it worked!")
    };
}




//functions x4 for answer chosen

//function for once gameover

//function for showhighscores





//event listners for buttons
startBtn.addEventListener("click", newQuiz);