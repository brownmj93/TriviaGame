
//Array of questions & answers
var questions = [
    {
        question: "What is the world’s second tallest mountain?",
        answers: {
            A: "Aconcagua in Argentina",
            B: "Mount McKinley in Alaska",
            C: "Kilimanjaro in Japan",
            D: "Mount Logan in Canada"
        }
    },
    {
        question: "What actress helped develop the radio controlled missile?",
        answers: {
            A: "Veronica Lake",
            B: "Hedy Lamarr",
            C: "Marilyn Monroe",
            D: "Elizabeth Taylor"
        }
    },
    {
        question: "Why did pirates really have a patch over their eyes?",
        answers: {
            A: "To intimidate their enemies",
            B: "To improve eyesight when looking long distance through a telescope",
            C: "To cover an eye injury sustained during battle",
            D: "To keep one eye adjusted to the dark for going below deck",
        }
    },
    {
        question: "Who invented hot cocoa?",
        answers: {
            A: "The Germans",
            B: "The Incans",
            C: "The Swiss",
            D: "The Mayans",
        }
    },
    {
        question: "What’s the Largest Planet in the Solar System?",
        answers: {
            A: "Saturn",
            B: "Neptune",
            C: "Jupiter",
            D: "Uranus",
        }
    },
    {
        question: "What famous animated cereal box character was also a famous singer?",
        answers: {
            A: "Tony the Tiger from Frosted Flakes",
            B: "Captain Crunch from Captain Crunch",
            C: "The Koo-Koo bird from Cocoa Puffs",
            D: "Count Chocula from Count Chocula",
        }
    },
    {
        question: "What is the world’s highest grossing arcade video game?",
        answers: {
            A: "Donkey Kong",
            B: "Mrs. Pac-Man",
            C: "Pac-Man",
            D: "Space Invaders",
        }
    },
    {
        question: "What inspired the shape of the Millennium Falcon?",
        answers: {
            A: "A bitten hamburger beside an olive",
            B: "A broken hubcap",
            C: "A partially eaten apple pie",
            D: "A Swiss watch gear",
        }
    },
    {
        question: "What was Pepsi’s slogan in the 1980s?",
        answers: {
            A: "“The Best Thing”",
            B: "“Pepsi Perfect”",
            C: "“The Choice of a New Generation”",
            D: "“Right Now”",
        }
    },
    {
        question: "What year did the Berlin Wall come down?",
        answers: {
            A: "1985",
            B: "1989",
            C: "1987",
            D: "1991",
        }
    }
];

//Declare variables
var userAnswers = [];
var correctAnswers = ["Aconcagua in Argentina", "Hedy Lamarr", "To keep one eye adjusted to the dark for going below deck", "The Mayans", "Jupiter", "Tony the Tiger from Frosted Flakes", "Pac-Man", "A bitten hamburger beside an olive", "“The Choice of a New Generation”", "1989"];
var answersCorrect = 0;
var answersIncorrect = 0;

var intervalId;
var timerRunning = false;
var time = 10;

//Hide the content before pressing start button
$("#content").hide();

//When start button is clicked
$("#startBtn").click(function () {
    event.preventDefault();

    $("#content").show();
    $("#startBtn").hide();
    loadQuestions();
    $(".questions").append('<button type="submit" id="doneBtn">DONE!</button>');
    runTimer();
});

//When done button is clicked
$(document).on('click', '#doneBtn', function () {
    checkAnswers();

});

function loadQuestions() {
    //Loop through the questions & answer choices
    for (i = 0; i < questions.length; i++) {
        console.log(questions.indexOf(questions[i]));
        $(".questions").append("<h4>" + questions[i].question + "</h4><br>");
        $(".questions").append('<label><input type="radio" class="radioBtnClass" name="radioBtn_' + questions.indexOf(questions[i]) + '") value="' + questions[i].answers.A + '" >' + questions[i].answers.A + '</label><br>');
        $(".questions").append('<label><input type="radio" class="radioBtnClass" name="radioBtn_' + questions.indexOf(questions[i]) + '") value="' + questions[i].answers.B + '" >' + questions[i].answers.B + '</label><br>');
        $(".questions").append('<label><input type="radio" class="radioBtnClass" name="radioBtn_' + questions.indexOf(questions[i]) + '") value="' + questions[i].answers.C + '" >' + questions[i].answers.C + '</label><br>');
        $(".questions").append('<label><input type="radio" class="radioBtnClass" name="radioBtn_' + questions.indexOf(questions[i]) + '") value="' + questions[i].answers.D + '" >' + questions[i].answers.D + '</label><br><br>');

    };
    ;
}

function runTimer() {
    if (!timerRunning) {
        intervalId = setInterval(function () {
            timerRunning = true;
            time--;
            $("#time").text("Seconds remaining: " + time);

            if (time == 0) {
                console.log("time is 0");
                clearInterval(intervalId);
                timerRunning = false;
                checkAnswers();
            }
        }, 1000);

    }
    else {
        console.log("timer not working");
    }
}

function checkAnswers() {

    //event.preventDefault();
    console.log("done button clicked");
    clearInterval(intervalId);
    timerRunning = false;
    console.log("stop timer");

    for (j = 0; j < questions.length; j++) {

        userAnswers.push($("input[name='radioBtn_" + questions.indexOf(questions[j]) + "']:checked").val());
        console.log(userAnswers[j]);
        //};
        if (correctAnswers.includes(userAnswers[j])) {
            answersCorrect++;
            console.log("correct answers: " + answersCorrect);
        }
        else {
            answersIncorrect++;
            console.log("wrong answers: " + answersIncorrect);
        }
    };

    $(".questions").empty();
    $(".result").append("<h4>Final Results</h4><br>");
    $(".result").append("<p>Correct Answers: " + answersCorrect + "</p>");
    $(".result").append("<p>Incorrect Answers: " + answersIncorrect + "</p>");
}
