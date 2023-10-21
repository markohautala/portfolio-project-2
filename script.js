const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-div')

const 

// when start quiz button is clicked, startGame function is started
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')

    //this hides the start quiz button
    startButton.classList.add('hide')

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