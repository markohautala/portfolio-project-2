const startButton = document.getElementById('start-button');
const nextButton = document.getElementById('next-button');
const questionContainerElement = document.getElementById('question-div');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

//these ones are set to let because they change - can't be const
let shuffledQuestions, currentQuestionIndex;

// when start quiz button is clicked, startGame function is started
startButton.addEventListener('click', startGame);
//when next-button clicked, current question index is incremented and jumps to set next question function
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
});

function startGame() {

    //this hides the start quiz button
    startButton.classList.add('hide');

    //randomizes or shuffles all the questions
    shuffledQuestions = questions.sort(() => Math.random() - 0.5);

    // we are starting from index 0 in our shuffled question array
    currentQuestionIndex = 0;

    // this section removes the hide-class - and then shows the quiz itself 
    questionContainerElement.classList.remove('hide');

    //Jumps over to the next function
    setNextQuestion();
}


function setNextQuestion() {
    resetState(); //this will trigger a function that resets the questions - deletes the old ones
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button'); //creates buttons for each answer
        button.innerText = answer.text;
        button.classList.add('button'); //adds the "button"-class to the buttons, so that css styles them
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide'); //this adds the hide class, which makes it hidden by CSS
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

}
//indictes whatever the user clicked on - event trigger
function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    });
    //if we have more questions, when next-button is shown
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}
//adds classes of either wrong or correct
function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}
//clears classes from the elements
function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
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
    },
    {
        question: 'What is the name of the mermaid colony that Harry encounters during the Triwizard Tournament\'s Second Task?',
        answers: [
            { text: 'Merfolk Mire', correct: false },
            { text: 'Black Lake Abyss', correct: false },
            { text: 'Mermish Cove', correct: false },
            { text: 'The Great Siren Sea', correct: true }
        ]
    },
    {
        question: 'Who is the Half-Blood Prince?',
        answers: [
            { text: 'Sirius Black', correct: false },
            { text: 'Severus Snape', correct: true },
            { text: 'Tom Riddle', correct: false },
            { text: 'Remus Lupin', correct: false }
        ]
    },
    {
        question: 'What is the primary ingredient in Felix Felicis, the "Liquid Luck" potion?',
        answers: [
            { text: 'Unicorn Blood', correct: false },
            { text: 'Boomslang Skin', correct: true },
            { text: 'Mandrake Root', correct: false },
            { text: 'Phoenix Tears', correct: false }
        ]
    },
    {
        question: 'What does the Mirror of Erised show to someone who looks into it?',
        answers: [
            { text: 'Their deepest fear', correct: false },
            { text: 'Their greatest desire', correct: true },
            { text: 'The past and future', correct: false },
            { text: 'A random fantasy', correct: false }
        ]
    },
    {
        question: 'Which subject does Professor Trelawney teach at Hogwarts?',
        answers: [
            { text: 'Divination', correct: true },
            { text: 'Herbology', correct: false },
            { text: 'Arithmancy', correct: false },
            { text: 'Care of Magical Creatures', correct: false }
        ]
    },
    {
        question: 'What is the core of Harry Potter\'s wand?',
        answers: [
            { text: 'Phoenix feather', correct: false },
            { text: 'Dragon heartstring', correct: true },
            { text: 'Unicorn hair', correct: false },
            { text: 'Veela hair', correct: false }
        ]
    },
    {
        question: 'What is the first name of Harry\'s aunt who raised him?',
        answers: [
            { text: 'Petunia', correct: true },
            { text: 'Lily', correct: false },
            { text: 'Marge', correct: false },
            { text: 'Augusta', correct: false }
        ]
    },
    {
        question: 'What spell is used to summon an object to the caster?',
        answers: [
            { text: 'Expelliarmus', correct: false },
            { text: 'Accio', correct: true },
            { text: 'Alohomora', correct: false },
            { text: 'Lumos', correct: false }
        ]
    },
    {
        question: 'What is the name of the tree that Harry and Ron crash the Flying Ford Anglia into?',
        answers: [
            { text: 'Whomping Willow', correct: true },
            { text: 'Forbidden Oak', correct: false },
            { text: 'Shrieking Sycamore', correct: false },
            { text: 'Howling Hemlock', correct: false }
        ]
    },
    {
        question: 'What type of broom does Harry receive as a gift from Professor McGonagall?',
        answers: [
            { text: 'Nimbus 2000', correct: false },
            { text: 'Firebolt', correct: true },
            { text: 'Cleansweep Seven', correct: false },
            { text: 'Comet 260', correct: false }
        ]
    },
    {
        question: 'What is the name of Hagrid\'s giant spider?',
        answers: [
            { text: 'Fluffy', correct: false },
            { text: 'Aragog', correct: true },
            { text: 'Fang', correct: false },
            { text: 'Norbert', correct: false }
        ]
    },
    {
        question: 'Which animal does Professor McGonagall transform into?',
        answers: [
            { text: 'Owl', correct: false },
            { text: 'Cat', correct: true },
            { text: 'Rat', correct: false },
            { text: 'Toad', correct: false }
        ]
    },
    {
        question: 'What is the name of the house-elf who serves the Black family?',
        answers: [
            { text: 'Kreacher', correct: true },
            { text: 'Winky', correct: false },
            { text: 'Dobby', correct: false },
            { text: 'Hokey', correct: false }
        ]
    },
    {
        question: 'What is the incantation for the Patronus Charm?',
        answers: [
            { text: 'Expelliarmus', correct: false },
            { text: 'Expecto Patronum', correct: true },
            { text: 'Accio', correct: false },
            { text: 'Alohomora', correct: false }
        ]
    },
    {
        question: 'Which house at Hogwarts does Luna Lovegood belong to?',
        answers: [
            { text: 'Gryffindor', correct: false },
            { text: 'Hufflepuff', correct: false },
            { text: 'Ravenclaw', correct: true },
            { text: 'Slytherin', correct: false }
        ]
    }

];
