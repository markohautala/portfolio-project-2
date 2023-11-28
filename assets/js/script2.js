/*  Here below we have declared a JavaScript array containing the true and false
    answers and the questions for the Harry Potter Quiz.
*/
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


/*  
    In this section, we declare constants and retrieve HTML elements 
    for JavaScript manipulation. Constants, recognized by const, 
    remain unchanged, while variables declared with let can be modified 
    later in the code. The initial values for score and currentQuestionIndex 
    are both set to 0, representing placeholders that will be updated as the 
    user progresses through the quiz and earns points.
*/
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
const startQuizButton = document.getElementById('start-quiz-button');
let currentQuestionIndex = 0;
let points = 0;

/*  This function is called startGame and when called, it will set the 
    next buttons inner text to "Next Question". It will also set the score to 0 
    and start at the first question (index 0) in the questions-array.
    At last, it will call the displayQuestion function.
*/
function startGame() {
    nextButton.innerHTML = "Next Question";
    points = 0;
    currentQuestionIndex = 0;
    displayQuestion();
}

/* This function updates the HTML content to display a new 
   question and its corresponding answer buttons on the DOM/webpage, 
   applying CSS styling, and utilizes a resetState function to clear 
   the previous question and answers before displaying the new ones.
*/
function displayQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
            points++;
        }
        button.addEventListener("click", chooseAnswer);
    });
}

/*   This function resets the state by hiding the "Next Question" button 
     and removing all child elements (answer buttons) from the answerButton 
     container, preparing for a new question.
*/
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }

}

/* Function below handles user interaction with quiz answer 
   buttons, updating their styles based on correctness, disabling 
   all buttons after a selection, and displaying the next button.
*/
function chooseAnswer(e) {
    const chosenButton = e.target;
    const isCorrect = chosenButton.dataset.correct === "true";

    chosenButton.classList.add(isCorrect ? "correctAnswer" : "incorrectAnswer");

    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correctAnswer");
        }
        button.disabled = true;
    });
    nextButton.style.display = "inline";
    startQuizButton.classList.add("hide");

}
/* 
    The processNextQuestionButton function increments the currentQuestionIndex 
    and checks if there are more questions remaining. If so, it displays the 
    next question; otherwise, it displays the user's points. The event listener 
    for a button click checks if there are more questions, calling 
    processNextQuestionButton if true, otherwise initiating the 
    startGame function.
*/
function processNextQuestionButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        displayPoints();
    }
}
nextButton.addEventListener("click", ()=> {
    if(currentQuestionIndex < questions.length){
    processNextQuestionButton();
    } else {
    startGame();
}
});


startGame();