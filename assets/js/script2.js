/*  Here below we have declared a JavaScript array containing the true and false
    answers and the questions.
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


/*  here we decare all the constants and get elements from the HTML file 
    to be able to work with them in JavaScript. Const can't be changed but 
    declaring a let makes it a variable that we can change later on in the code.

    The score and currentQuestionIndex are set to 0, and they will change 
    later on when the user gets more points and goes along in the quiz.
*/
const questionElement = document.getElementById('question');
const answerButton = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-button');
let currentQuestionIndex = 0;
let score = 0;

/*  This function is called startGame and when called, it will set the 
    next buttons inner text to "Next Question". It will also set the score to 0 
    and start at the first question (index 0) in the questions-array.
    At last, it will call the showQuestion function.
*/
function startGame(){
    nextButton.innerHTML = "Next Question"
    score = 0;
    currentQuestionIndex = 0;
    showQuestion();
}


/* This function will change the question elements inner HTML to what the current
   question index is on. It will also change the answers innerHTML accordingly.
   So, in essence, this function prepares and displays a question along with 
   its corresponding answer buttons in the web-page. it also adds the class names 
   to those buttons so that they get the proper CSS styling and finally appends 
   the buttons to the HTML.

   The resetState function will when called, reset the previous 
   question + answers, and and make room for the new question and answers. That 
   is why it is placed first in the showQuestion function.
*/
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("button");
        answerButton.appendChild(button);
    });
}

/*   This function resets the state by hiding the "Next Question" button 
     and removing all child elements (answer buttons) from the answerButton 
     container, preparing for a new question.
*/
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }

}

startGame();