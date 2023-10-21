const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-div')

const randomQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')

// when start quiz button is clicked, startGame function is started
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')

    //this hides the start quiz button
    startButton.classList.add('hide')
    
    //randomizes the questions
    randomQuestions = questions.sort(() => Math.random() - 0.5 )

    currentQuestionIndex = 0

    // this section removes the hide-class - and then shows the quiz itself 
    questionContainerElement.classList.remove('hide')
    
    //Jumps over to the next function
    setNextQuestion()
}


function setNextQuestion() {
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question)  {

}

function selectAnswer() {

}

const questions = [
    {
        question: "question1"
        answers: [
            { text: 'option1', correct: true},
            { text: 'option2', correcct: false},
            { }
        ]
    }
]