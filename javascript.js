



//globals 
var rightCount = 0;
var wrongCount = 0;
var qACount = 0;
var trivTime = 15;
var timer = '';

// $(document).ready(function () {

var qA = {
    1: {
        question: "What Pokemon does Pikachu evolve into?",
        choices: ["Jolteon", "Pichu", "Raichu", "Mimikyu"],
        correctAnswer: "Raichu",
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    2: {
        question: "How many Gym Badges must a trainer collect before challenging the Elite Four?",
        choices: ["6", "8", "9", " 10"],
        correctAnswer: "8",
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    3: {
        question: "What's the device trainers use to keep a record of their Pokemon encounters?",
        choices: ["Pokedex", "Pokecorder", "Pokefinder", "Pokephone"],
        correctAnswer: "Pokedex",
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    4: {
        question: "Which of these is a starter pokemon?",
        choices: ["Pikachu", "Mudkip", "Growlithe", "Meowth"],
        correctAnswer: "Mudkip",
        right: 'Correct!',
        wrong: 'Wrong!',
    }
};

var start = function () {
    $('.startBtn').on('click', function () {
        $('.trivSection').empty();
        createQuestions();

    });

}

var createQuestions = function () {
    var questions = qA[qACount]['question'];
    var newDiv = $('<div>');
    newDiv.addClass('question');
    newDiv.text(question);
    $('.trivSection').append(newDiv);
    createAnswers();
}

var createAnswers = function () {
    var answerLength = qa[qACount]['answers'].length;
    for (var i = 0; i < answersLength; i++) {
        var answers = qA[qACount]['answers'][i];
        var newBtn = $('<button>');
        newBtn.addClass('answers redBtn');
        newBtn.attr('data-type', answers);
        newBtn.text(answers);
        $('.trivSection').append(newBtn);
    }
    $(document).off('click', '.answers', checkAnswer);
    $(document).on('click', '.answers', checkAnswer);
}

var checkAnswer = function () {
    var userAnswer = $(this).data('type');
    var correctAnswer = qA[qACount]['correct'];
    console.log(this);

    var right = qA[qACount]['right'];
    var wrong = qA[qACount]['wrong'];
    console.log(qACount);

    if (userAnswer === correctAnswer) {
        rightCount++;
        $('.trivSection').empty();
        var newDiv = $('<div>');
        newDiv.addClass('rightAnswer');
        newDiv.text(right);
        $('.trivSection').append(newDiv);
        clearInterval(timer);
        qACount++;
        if (qACount <= 4) {
            setTimeout(
                function () {
                    $('.trivSection').empty();
                    createQuestions();
                }, 3500);
        }
        else {
            $('.trivSection').empty();
            var newDiv = $('<div>');
            newDiv.addClass('rightAnswer');
            newDiv.text(right);
            $('.trivSection').append(newDiv);
            clearInterval(timer)
            setTimeout(gameOver, 3500);
        }
    }
    else {
        wrongCount++;

        $('.trivSection').empty()
        var newDiv = $('<div>'); newDiv.addClass('wrongAnswer');

        newDiv.text(wrong);

        $('.trivSection').append(newDiv);
        clearInterval(timer)

        qACount++; if (qACount <= 3) {
            setTimeout(function () {
                $('.trivSection').empty();
                createQuestions();
            }, 3500);
        }
        else {
            $('.trivSection').empty();
            var newDiv = $('<div>');
            newDiv.addClass('wrongAnswer');
            newDiv.text(wrong);
            $('.trivSection').append(newDiv);
            clearInterval(timer);
            //Reset
            setTimeout(gameOver, 3500);
        }
    }
}



var timerStart = function(){
    //ugly sobbing...
}




