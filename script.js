const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-div')

const randomQuestions, currentQuestionIndex

// when start quiz button is clicked, startGame function is started
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')

    //this hides the start quiz button
    startButton.classList.add('hide')
    
    //randomizes the questions
    randomQuestions  = questions.sort(() => Math.random() - 0.5 )

    // this section removes the hide-class - and then shows the quiz itself 
    questionContainerElement.classList.remove('hide')
    
    //Jumps over to the next function
    setNextQuestion()
}


function setNextQuestion() {

}


function selectAnswer() {

}

const questions = [
    {
        question: "fråga1"
        answers: [
            { text: 'alternativ1', correct: true},
            { text: 'alternativ2', correcct: false},
            { }
        ]
    }
]