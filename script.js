// Questions
var questions = [{
    question: "What does HTML stand for?",
    choices: ["Hot Mail", "How to Make Lasagna", "Hot Take Markup Language", "Hyper Text Markup Language"],
    correctAnswer: "Hyper Text Markup Language"
}, {
    question: "</br> What type of tag is this?",
    choices: ["Break tag", "Broken tag", "Opening tag", "Neither"],
    correctAnswer: "Break tag"
}, {
    question: "</body> Is this an opening tag or a closing tag?",
    choices: ["Opening", "Closing", "Neither", "Could be both"],
    correctAnswer: "Closing"
}, {
    question: "Which of the below is the abbreviation of CSS?",
    choices: ["Cascade Style Sheets", "Color and Style Sheets", "Cascading Style Sheets", "Coded Style Sheet"],
    correctAnswer: "Cascading Style Sheets"
}, {
    question: "Which of the below CSS properties is used to change the background color of CSS ?",
    choices: ["bg color", "color-background", "background-color", "color"],
    correctAnswer: "background-color"
}, {
    question: "Which element is used to represent the transparency of an element in CSS ?",
    choices: ["Hover", "Opacity", "Transparent", "Overlay"],
    correctAnswer: "Opacity"
}, {
    question: "Inside which HTML element do we put the JavaScript?",
    choices: ["<script>", "<js>", "<scripting>", "<javascript>"],
    correctAnswer: "<script>"
}, {
    question: "How do you write 'Hello World' in an alert box?",
    choices: ['alertBox("Hello World");', 'msg("Hello World");', 'msgBox("Hello World");', 'alert("Hello World");'],
    correctAnswer: 'alert("Hello World");'
}, {
    question: "How do you write an IF statement in JavaScript?",
    choices: ["if (i == 5)", "if i = 5 then", "if i == 5 then", "if i = 5"],
    correctAnswer: "if (i == 5)"
}, {
    question: "How can you add a comment in a JavaScript?",
    choices: ["//This is a comment", "'This is a comment'", "<!--This is a comment-->", "~This is a comment~"],
    correctAnswer: "//This is a comment"
}, {
    question: "What is the correct way to write a JavaScript array?",
    choices: ['var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")', 'var colors = (1:"red", 2:"green", 3:"blue")', 'var colors = "red", "green", "blue"', 'var colors = ["red", "green", "blue"]'],
    correctAnswer: 'var colors = ["red", "green", "blue"]'
}, {
    question: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onclick", "onmouseover"],
    correctAnswer: "onclick"
}, {
    question: "Which operator is used to assign a value to a variable?",
    choices: ["x", "=", "*", "-"],
    correctAnswer: "="
}, {
    question: "What is the correct HTML for inserting an image?",
    choices: ['<image src="image.gif" alt="MyImage">', '<img src="image.gif" alt="MyImage">', '<img alt="MyImage">image.gif</img>', '<img href="image.gif" alt="MyImage">'],
    correctAnswer: '<img src="image.gif" alt="MyImage">'
}, {
    question: "Which HTML element is used to specify a footer for a document or section?",
    choices: ["<bottom>", "<section>", "<footer>", "<aside>"],
    correctAnswer: "<footer>"
}];
// Variables

var timer = document.getElementById("timer");
var timeLeft = document.getElementById("time-left");
var timesUp = document.getElementById("times-up")

var startContainer = document.getElementById("start-container");

var startBtn = document.getElementById("start-btn");
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
var initials = document.getElementById("initials");

var highscores = document.getElementById("highscores");
var viewHighscore = document.getElementById("view-highscore");
var scoreList = document.getElementById("list-of-scores");

var correctAns = 0;
var questionNum = 0;
var scoreResult = 0;
var questionInd = 0;
var questionRandom;

var secsLeft = 120;

timesUp.style.display = "none"
summary.style.display = "none"
highscores.style.display = "none"
quizContainer.style.display = "none"


//When start button is clicked
function newQuiz() {
    questionInd = 0;
    secsLeft = 120;
    timeLeft.textContent = secsLeft;
    initials.textContent = "";
    startContainer.style.display = "none";
    summary.style.display = "none";
    highscores.style.display = "none";
    quizContainer.style.display = "block";
    timer.style.display = "block"
    timesUp.style.display = "none"

    //Starts timer
    var timerInterval = setInterval(function() {
        secsLeft--;
        timeLeft.textContent = secsLeft + " seconds left.";

        if (secsLeft === 0) {
            clearInterval(secsLeft);
            clearInterval(timerInterval);
            timesUp.style.display = "block";
            timer.style.display = "none"
            gameOver();
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

    //questionRandom = questions[Math.floor(Math.random() * questions.length)]

    questionTitle.textContent = questions[questionInd].question;
    answer1.textContent = questions[questionInd].choices[0];
    answer2.textContent = questions[questionInd].choices[1];
    answer3.textContent = questions[questionInd].choices[2];
    answer4.textContent = questions[questionInd].choices[3];
}


//create function to check answer
//if else rules for checking answer
//rule for continuing thru questions if/else
function checkAns(correctAnswer) {
    if (questions[questionInd].correctAnswer === questions[questionInd].choices[correctAnswer]) {
        scoreResult++;
        answerCheck.textContent = "Correct!"
            //console.log("it worked!")
            //console.log(scoreResult)
    } else {
        secsLeft -= 10;
        answerCheck.textContent = "Incorrect!"

        //console.log("wrong answer")
    }

    questionInd++;
    // repeat with the rest of questions 
    if (questionInd < questions.length) {
        cycleQuestions();
    } else {
        // if no more question, run game over function
        gameOver();
    }
    if (secsLeft === 0) {
        gameOver();
    }
}
//console.log(questions[0].choices[1])

//functions x4 for answer chosen
function choose0() { checkAns(0) };

function choose1() { checkAns(1) };

function choose2() { checkAns(2) };

function choose3() { checkAns(3) };

function gameOver() {
    //console.log("game over!")
    startContainer.style.display = "none";
    summary.style.display = "block";
    highscores.style.display = "none";
    quizContainer.style.display = "none";
    timer.style.display = "none"
    timesUp.style.display = "block";

    finalScore.textContent = scoreResult
}



//function for sotring high scores locally
function storeHighScores(event) {
    event.preventDefault();

    if (initials.value === "") {
        alert("Please enter initials!");
        return;
    }

    var storedHighScore = localStorage.getItem("high scores");
    var arrayScores;

    if (!storedHighScore) {
        arrayScores = [];
    } else {
        arrayScores = JSON.parse(storedHighScore)
    }

    var playerScore = {
        initials: initials.value,
        score: finalScore.textContent
    };

    console.log(playerScore)
    console.log(storedHighScore)

    var scoresString = JSON.stringify(arrayScores);
    window.localStorage.setItem("high scores", scoresString);

    showScores();
}

var i = 0

function showScores() {

    startContainer.style.display = "none";
    summary.style.display = "none";
    highscores.style.display = "block";
    quizContainer.style.display = "none";
    timer.style.display = "none"
    timesUp.style.display = "none"

    var storedHighScore = localStorage.getItem("high scores");
    if (storedHighScore === null) {
        return;
    }
    var storedHighScore = JSON.parse(storedHighScore);

    for (; i < storedHighScore.length; i++) {
        var eachNewScore = document.createElement("p");
        eachNewScore.innerHTML = storedHighScore[i].initials + ":" + storedHighScore[i].score;
        scoreList.appendChild(eachNewScore);
    }
}



//event listners for buttons
startBtn.addEventListener("click", newQuiz);
answer1.addEventListener("click", choose0);
answer2.addEventListener("click", choose1);
answer3.addEventListener("click", choose2);
answer4.addEventListener("click", choose3);

restartBtn.addEventListener("click", newQuiz);

submitBtn.addEventListener("click", function(event) {
    storeHighScores(event);
});

viewHighscore.addEventListener("click", function(event) {
    showScores(event);
})

backBtn.addEventListener("click", function() {
    startContainer.style.display = "block";
    highscores.style.display = "none"

})
clearBtn.addEventListener("click", function() {
    window.localStorage.removeItem("high scores");
});