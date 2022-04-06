// Quiz questions
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
//Time variables
var timer = document.getElementById("timer");
var timeLeft = document.getElementById("time-left");
var timesUp = document.getElementById("times-up");
var secsLeft = 120;
var timerInterval;

//Start Container variable
var startContainer = document.getElementById("start-container");

//Button variables
var startBtn = document.getElementById("start-btn");
var submitBtn = document.getElementById("submit-btn");
var restartBtn = document.getElementById("restart-btn");
var backBtn = document.getElementById("back-btn")

//Variables for Quiz container and it's contents (Question title, question check, answer check, and buttons)
var quizContainer = document.getElementById("quiz-container");
var questionTitle = document.getElementById("question-title");
var answerCheck = document.getElementById("answer-check");
var answer1 = document.getElementById("btn1")
var answer2 = document.getElementById("btn2")
var answer3 = document.getElementById("btn3")
var answer4 = document.getElementById("btn4")

//Variables for Summary container and it's contents (final score & initials form)
var summary = document.getElementById("summary");
var finalScore = document.getElementById("final-score");
var initials = document.getElementById("initials");

//Variables for high scores continer and it's contents (List of scores and view high score link)
var highscores = document.getElementById("highscores");
var viewHighScore = document.getElementById("view-highscore");
var scoreList = document.getElementById("list-of-scores");

// Variables for quiz values
var correctAns = 0;
var questionNum = 0;
var scoreResult = 0;
var questionInd = 0;
var questionRandom;


// Quiz loads and runs startScreen function
startScreen();

// Function for starting screen
function startScreen() {
    startContainer.style.display = "block"
    timesUp.style.display = "none"
    summary.style.display = "none"
    highscores.style.display = "none"
    quizContainer.style.display = "none"
}

//When start button is clicked, newQuiz function runs, which starts a new quiz (displays the quiz content and starts the timer)
function newQuiz() {
    questionInd = 0;
    secsLeft = 120;
    scoreResult = 0;
    timeLeft.textContent = secsLeft;
    initials.textContent = "";
    startContainer.style.display = "none";
    summary.style.display = "none";
    highscores.style.display = "none";
    quizContainer.style.display = "block";
    timer.style.display = "block"
    timesUp.style.display = "none"

    //Starts timer, runs gameOver function once timer reaches 0
    timerInterval = setInterval(function() {
        secsLeft--;
        timeLeft.textContent = secsLeft + " seconds left";

        if (secsLeft <= 0) {
            clearInterval(secsLeft);
            clearInterval(timerInterval);
            timesUp.style.display = "block";
            timer.style.display = "none";
            timeLeft.style.display = "none";

            gameOver();
        }

    }, 1000);

    displayQuiz()

}

//Function showQuiz cycles through questions. 
function displayQuiz() {
    cycleQuestions();
}
//cycleQuestions functions puts the question variables into the quiz
function cycleQuestions() {

    //Assigns the question choices to the corresponding button

    questionTitle.textContent = questions[questionInd].question;
    answer1.textContent = questions[questionInd].choices[0];
    answer2.textContent = questions[questionInd].choices[1];
    answer3.textContent = questions[questionInd].choices[2];
    answer4.textContent = questions[questionInd].choices[3];
}


//Function to check answer selected. If/else statements for if the user choice is correct or incorrect

function checkAns(correctAnswer) {
    if (questions[questionInd].correctAnswer === questions[questionInd].choices[correctAnswer]) {
        scoreResult++;
        answerCheck.textContent = "Correct!"
        answerCheck.style.color = "green";


    } else {
        secsLeft -= 10;
        answerCheck.textContent = "Incorrect!";
        answerCheck.style.color = "red";


    }

    questionInd++;
    // repeat with the rest of questions 
    if (questionInd < questions.length) {
        cycleQuestions();
    } else {
        // if no more question, run game over function
        gameOver();
        timesUp.style.display = "block";
        timer.style.display = "none";
        timeLeft.style.display = "none";
    }
    if (secsLeft === 0) {
        gameOver();
    }
}

//functions x4 for checking the button clicked against which answer it corresponds to
function choose0() { checkAns(0) };

function choose1() { checkAns(1) };

function choose2() { checkAns(2) };

function choose3() { checkAns(3) };

//Function for end of game. Shows summary and score. 
function gameOver() {

    startContainer.style.display = "none";
    summary.style.display = "block";
    highscores.style.display = "none";
    quizContainer.style.display = "none";
    timer.style.display = "none"
    timesUp.style.display = "block";

    finalScore.textContent = scoreResult
}



//function for storing high scores locally
function storeHighScores(event) {
    event.preventDefault();

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

    arrayScores.push(playerScore);

    var scoresString = JSON.stringify(arrayScores);
    window.localStorage.setItem("high scores", scoresString);

    showScores();
}
//Function for pulling high scores from local storage and showing them. 
var i = 0

function showScores() {

    startContainer.style.display = "none";
    summary.style.display = "none";
    highscores.style.display = "block";
    quizContainer.style.display = "none";
    timer.style.display = "none"
    timesUp.style.display = "none"

    var saveHighScore = localStorage.getItem("high scores");

    if (saveHighScore === null) {
        return;
    }
    console.log(saveHighScore)
    var storedHighScore = JSON.parse(saveHighScore);

    for (; i < storedHighScore.length; i++) {
        var eachNewScore = document.createElement("p");
        eachNewScore.innerHTML = storedHighScore[i].initials + " - Score: " + storedHighScore[i].score;
        scoreList.appendChild(eachNewScore);

    }
}



//Event listners for buttons
startBtn.addEventListener("click", newQuiz);
answer1.addEventListener("click", choose0);
answer2.addEventListener("click", choose1);
answer3.addEventListener("click", choose2);
answer4.addEventListener("click", choose3);

//Event listener to restart quiz
restartBtn.addEventListener("click", function() {
    startContainer.style.display = "block";
    highscores.style.display = "none";
    summary.style.display = "none"

});

//Event listener for submitting scores to local storage
submitBtn.addEventListener("click", function(event) {
    storeHighScores(event);
});

//Event listener for viewing high scores
viewHighScore.addEventListener("click", function(event) {
    showScores(event);
})

//Event listener for clicking back button
backBtn.addEventListener("click", function() {
    startContainer.style.display = "block";
    highscores.style.display = "none"

})