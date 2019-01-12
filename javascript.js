/*Global Variables
==============================================================*/
//Counter
var trivTime = 0;
var rightCount = 0;
var wrongCount = 0;
var qACount = 1;
//======================
var timer = '';
var qA = {
    1: {
        question: "What Pokemon does Pikachu evolve into?",
        answers: ["Jolteon", "Pichu", "Raichu", "Mimikyu"],
        correct: "Raichu",
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    2: {
        question: "How many Gym Badges must a trainer collect before challenging the Elite Four?",
        answers: ["6", "8", "9", " 10"],
        correct: "8",
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    3: {
        question: "What's the device trainers use to keep a record of their Pokemon encounters?",
        answers: ["Pokedex", "Pokecorder", "Pokefinder", "Pokephone"],
        correct: "Pokedex",
        right: 'Correct!',
        wrong: 'Wrong!',
    },
    4: {
        question: "Which of these is a starter pokemon?",
        answers: ["Pikachu", "Mudkip", "Growlithe", "Meowth"],
        correct: "Mudkip",
        right: 'Correct!',
        wrong: 'Wrong!',
    }

	};

var start = function(){
	$('.startBtn').on('click',function(){

        // debugging...ran 'alert('Yo!');' to confirm link

		$('.trivSection').empty();
		createQuestions();
	});
}
var createQuestions = function(){
	timerStart();
	var question = qA[qACount]['question'];
console.log(qA);
	var newDiv = $('<div>');
	newDiv.addClass('question');
	newDiv.text(question);
	$('.trivSection').append(newDiv);
	createAnswers();
}
var createAnswers = function(){
	var answerLength = qA[qACount]['answers'].length;
	for(var i = 0; i < answerLength;i++){
		var answers = qA[qACount]['answers'][i];
		var newBtn = $('<button>');
		newBtn.addClass('answers redBtn');
		newBtn.attr('data-type',answers);
		newBtn.text(answers);
		$('.trivSection').append(newBtn);
	}
	$(document).off('click','.answers',checkAnswer);
	$(document).on('click','.answers',checkAnswer);
}
var checkAnswer = function(){
	var userAnswer = $(this).data('type');
	var correctAnswer = qA[qACount]['correct'];
	var correctImg = qA[qACount]['imageUrl'];

	var right = qA[qACount]['right'];
	var wrong = qA[qACount]['wrong'];
	console.log(qACount);
	if(userAnswer === correctAnswer){
		rightCount++;
		$('.trivSection').empty();
	
		var newDiv = $('<div>');
	
		newDiv.addClass('rightAnswer')
		newDiv.text(right)
		$('.trivSection').append(newDiv);
		clearInterval(timer)
		qACount++;
		if(qACount <= 4){
			setTimeout(
				function(){
					$('.trivSection').empty();
					createQuestions();
					},2500);
		}
		else{
			$('.trivSection').empty();
			var newDiv = $('<div>');
			newDiv.addClass('rightAnswer');

			newDiv.text(right)		
			$('.trivSection').append(newDiv);
			clearInterval(timer)
			setTimeout(gameOver, 2500);
		}
	}
	else{
		wrongCount++;
		$('.trivSection').empty();
		var newDiv = $('<div>');
		newDiv.addClass('wrongAnswer');
		newDiv.text(wrong);
		$('.trivSection').append(newDiv);
		clearInterval(timer)
		qACount++;
		
		if(qACount <= 4){
			setTimeout(function(){
			$('.trivSection').empty();
			createQuestions();
			},2500);
		}
		else{
			$('.trivSection').empty();
			var newDiv = $('<div>');
			newDiv.addClass('wrongAnswer');
			newDiv.text(wrong);
			$('.trivSection').append(newDiv);
			clearInterval(timer);
			setTimeout(gameOver, 2500);
		}
	}
}
var timerStart = function(){ 
	$('.timerSection').empty();
	trivTime = 100;
	var timeTag = $('<div>');
	timeTag.addClass('time');
	timeTag.addClass('progress');
	var progressBar = $('<div>');
	progressBar.addClass('progress-bar');
	progressBar.width(trivTime + '%');

	$('.timerSection').append(timeTag);
	$('.time').append(progressBar);	
	timer = setInterval(timeDecrement,100);
}
var timeDecrement = function(){ 
	$('.progress-bar').width(trivTime + '%');
	trivTime--;
	if(trivTime === -10){
		userAnswer = false;
		clearInterval(timer);
		checkAnswer();
	}
	
}
var gameOver = function(){
	$('.trivSection').empty();
	$('.timerSection').empty();
	var scoreDiv = $('<div>');
	scoreDiv.addClass('score');
	scoreDiv.html('Correct: ' + rightCount + '<br>' + 'Wrong: ' + wrongCount);
	$('.trivSection').append(scoreDiv);
	var newDiv = $('<div>');
	newDiv.addClass('gameOver');
	newDiv.text('Game Over! Try Again??');
	$('.trivSection').append(newDiv);
	var newBtn = $('<button>');
	newBtn.addClass('redBtn resetBtn');
	newBtn.text('Reset');
	$('.trivSection').append(newBtn);
	trivTime = 100;
	qACount = 1;
	rightCount = 0;
	wrongCount = 0;
	$('.resetBtn').on('click',function(){
		$('.trivSection').empty()
		createQuestions();
	});
}

start();