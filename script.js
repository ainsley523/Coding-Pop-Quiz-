//Timer 
const startingMinutes = 5;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;

    seconds = seconds < 5 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}: ${seconds}`;
    time--;
}
//End Timer 

//Quiz
const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion
})

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currectQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answe.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer) 
        answerButtonElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonElement.firstChild) {
        answerButtonElement.removeChild(answerButtonElement)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setstatusClass(document.body, correct)
    Array.from(answerButtonElement.children).forEach(button => {
        setstatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex +1) {
        nextButton.classList.remove('hide')
    }else
    nextButton.classList.remove('hide')
}

function setstatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add ('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const question = [
    {
        question: 'What is the correct HTML for inserting an image?',
        answers: [
            { text: '<img alt="MyImage">image.gif</img>', correct: false },
            { text: '<img src="image.gif" alt="MyImage">', correct: true }
            { text: '<image src="image.gif" alt="MyImage">', correct: true },
            { text: '<img href="image.gif" alt="MyImage">', correct: false }
        ]
    }
    {
        question: 'Choose the correct HTML tag for the largest heading',
        answers: [
            { text: 'Hyperlinks and Text Markup Language', correct: false },
            { text: 'Hyper Text Markup Language', correct: false }
            { text: 'Home Tool Markup Language', correct: false }
            { text: 'Happy Things Make Laughter'}
        ]
    }
    {
        question: 'What is the largest tag?',
        answers: [
            { text: '<heading>', correct: false },
            { text: '<h6>', correct: false }
            { text: '<head>', correct: false }
            { text: '<h1>', correct: true}
        ]
    }
    {
        question: 'How can you make a numbered list?',
        answers: [
            { text: '<ol>', correct: true },
            { text: '<ul>', correct: false }
            { text: '<dl>', correct: false },
            { text: '<list>', correct: false }
        ]
    }
]