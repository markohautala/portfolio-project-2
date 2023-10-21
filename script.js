const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-div')

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')
    startButton.classList.add('hide')
    questionContainerElement.classList.remove('hide')
}


function setNextQuestion() {

}


function selectAnswer() {

}