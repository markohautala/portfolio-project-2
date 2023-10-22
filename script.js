const startButton = document.getElementById('start-button')
const nextButton = document.getElementById('next-button')
const questionContainerElement = document.getElementById('question-div')

let shuffledQuestions, currentQuestionIndex

const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

// when start quiz button is clicked, startGame function is started
startButton.addEventListener('click', startGame)

function startGame() {

    //this hides the start quiz button
    startButton.classList.add('hide')
    
    //randomizes or shuffles all the questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5)

    // we are starting from index 0 in our shuffled question array
    currentQuestionIndex = 0

    // this section removes the hide-class - and then shows the quiz itself 
    questionContainerElement.classList.remove('hide')
    
    //Jumps over to the next function
    setNextQuestion()
}


function setNextQuestion() {
    resetState(); //this will trigger a function that resets the questions - deletes the old ones
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question)  {
    questionElement.innerText  = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button') //creates buttons for each answer
        button.innerText = answer.text
        button.classList.add('button') //adds the "button"-class to the buttons, so that css styles them
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer) 
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide') //this adds the hide class, which makes it hidden by CSS
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }

}

function selectAnswer(e) {

}

const questions = [
    {
        question: 'What is the core of Hermione Granger\'s wand?',
        answers: [
            { text: 'Dragon Heartstring', correct: true },
            { text: 'Phoenix Feather', correct: false },
            { text: 'Veela Hair', correct: false },
            { text: 'Thestral Tail Hair', correct: false }
        ]
    }
];
