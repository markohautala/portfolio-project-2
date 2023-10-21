const startButton = document.getElementById('start-button')
const questionContainerElement = document.getElementById('question-div')

let randomQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

// when start quiz button is clicked, startGame function is started
startButton.addEventListener('click', startGame)

function startGame() {
    console.log('started')

    //this hides the start quiz button
    startButton.classList.add('hide')
    
    //randomizes the questions
    randomQuestions = questions.sort(() => Math.random() - .5)

    currentQuestionIndex = 0

    // this section removes the hide-class - and then shows the quiz itself 
    questionContainerElement.classList.remove('hide')
    
    //Jumps over to the next function
    setNextQuestion()
}


function setNextQuestion() {
    resetState() //this will trigger a function that resets the questions - deletes the old ones
    showQuestion(randomQuestions[currentQuestionIndex])
}

function showQuestion(question)  {
    questionElement.innerText  = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')//creates buttons for each answer
        button.innerText = answers.text
        button.classList.add('button') //adds the "button"-class to the buttons, so that css styles them
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer) 
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    next-Button.classList.add('hide') //this adds the hide class, which makes it hidden by CSS
}

function selectAnswer() {

}

const questions = [
    {
        question: "What is the core of Hermione Granger's wand?",
        answers: [
            { text: 'Dragon Heartstring', correct: true},
            { text: 'Phoenix Feather', correct: false},
            { text: 'Veela Hair', correct: false},
            { text: 'Thestral Tail Hair', correct: false},
        ]
    }
]