



 //globals 
    var rightCount = 0;
    var wrongCount = 0;
    var qACount = 0;
    var trivTime = 15;
    var timer = 1;
    
    $(document).ready(function () {

    var qA = [
        
        {
            question: "What Pokemon does Pikachu evolve into?",
            choices: ["Jolteon", "Pichu", "Raichu", "Mimikyu"],
            correctAnswer: "Raichu",
        },

        {
            question: "How many Gym Badges must a trainer collect before challenging the Elite Four?",
            choices: ["6", "8", "9"," 10"],
            correctAnswer: "8"
        },

        {

            question: "What's the device trainers use to keep a record of their Pokemon encounters?",
            choices: ["Pokedex", "Pokecorder", "Pokefinder", "Pokephone"],
            correctAnswer: "Pokedex",
        },

        {

            question: "Which of these is a starter pokemon?",
            choices: ["Pikachu", "Mudkip", "Growlithe", "Meowth"],
            correctAnswer: "Mudkip",
        },

    ];

    var start = function () {
        $('.startBtn').on('click', function() {
            $('.trivSection').empty();
            createQuestions();
        
    });

}

var createQuestions = function(){
    var questions = qA[qACount]['question'];
    var newDiv = $('<div>');
    newDiv.addClass('question');
    newDiv.text(question);
    $('.trivSection').append(newDiv);
    createAnswers();
}

var createAnswers = function(){
    var answerLength =qa[qACount]
}
  








});
