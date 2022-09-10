const progressContainer = document.querySelector('.progress-container')
const startBtn = document.querySelector('.start')
const quiz = document.querySelector('.quiz')
const questionContainer = document.querySelector('.question')
const optionA = document.querySelector('#A')
const optionB = document.querySelector('#B')
const optionC = document.querySelector('#C')
const optionD = document.querySelector('#D')
const timeGauge = document.querySelector('.time-gauge')
const timeCounter = document.querySelector('.counter')
const choice = document.querySelectorAll('.choice')
const scoreContainer = document.querySelector('.score-container')




let questions = [{
        question: "How many different sounds can a cat make?",
        questionImg: "img/1.jpg",
        choiceA: "100",
        choiceB: "150",
        choiceC: "10",
        choiceD: "27",
        correctAnswer: "100",
    },
    {
        question: "What breed of cat has a reputation for being cross-eyed?",
        questionImg: "img/2.jpg",
        choiceA: "Himalayan",
        choiceB: "Egyptian Mau",
        choiceC: "Siamese",
        choiceD: "Persian",
        correctAnswer: "Siamese",
    },
    {
        question: "What is the most common training command taught to dogs?",
        questionImg: "img/3.jpg",
        choiceA: "Stay",
        choiceB: "Sit",
        choiceC: "Dance",
        choiceD: "Roll",
        correctAnswer: "Sit",
    },
    {
        question: "What is a dog’s most highly developed sense?",
        questionImg: "img/4.jpg",
        choiceA: "Smell",
        choiceB: "Sight",
        choiceC: "Taste",
        choiceD: "Touch",
        correctAnswer: "Smell",
    },
    {
        question: " How many known species of birds are there?",
        questionImg: "img/5.jpg",
        choiceA: "5,000",
        choiceB: "10,000",
        choiceC: "20,000",
        choiceD: "40,000",
        correctAnswer: "10,000",
    },
    {
        question: "What evolutionary adaptation helps birds fly?",
        questionImg: "img/6.jpg",
        choiceA: "Rapid Digestion",
        choiceB: "Beaks",
        choiceC: "Hollow Bones",
        choiceD: "All of These",
        correctAnswer: "All of These",
    },
    {
        question: "Which of the following is not one of the four remaining subspecies of elk in North America?",
        questionImg: "img/7.jpg",
        choiceA: "Manitoba Elk",
        choiceB: "Highland Elk",
        choiceC: "Rocky Mountain Elk",
        choiceD: "Tule Elk",
        correctAnswer: "Highland Elk",
    },
    {
        question: "What is a baby elk called?",
        questionImg: "img/8.jpg",
        choiceA: "Bull",
        choiceB: "Sow",
        choiceC: "Cow",
        choiceD: "Calf",
        correctAnswer: "Calf",
    },
    {
        question: "What do wolves use their scent for?",
        questionImg: "img/9.jpg",
        choiceA: "Marking Territory",
        choiceB: "Finding Prey",
        choiceC: "A Cover-up",
        choiceD: "Nothing",
        correctAnswer: "Marking Territory",
    },
    {
        question: "If a wolf trespasses on the territory of other wolves, what will happen?",
        questionImg: "img/10.jpg",
        choiceA: "Nothing",
        choiceB: "It will be accepted into the pack",
        choiceC: "It will be chased or killed",
        choiceD: "It will be required to present prey to the pack",
        correctAnswer: "It will be chased or killed",
    },
]



const lastQuestIndex = questions.length - 1
let questionNumber = 0
let count = 0
let timer
let score = 0

for (let question = 0; question <= lastQuestIndex; question++) {
    progressContainer.innerHTML += `<div></div>`

}

function renderQuestion() {
    let question = questions[questionNumber]
    questionContainer.innerHTML = question.question
    optionA.innerHTML = question.choiceA
    optionB.innerHTML = question.choiceB
    optionC.innerHTML = question.choiceC
    optionD.innerHTML = question.choiceD
}

function counter() {

    if (count <= 10) {
        timeCounter.innerHTML = count
        timeGauge.style.width = count * 80 + 'px'
        count++
    } else {
        inCorrectAnswer()
        nextQuestion()
    }
}

function renderScore() {
    scoreContainer.style.visibility = 'visible'
    scoreContainer.innerHTML = `<p>Percentage of correctly answered question: ${score* 100/ questions.length}%</p><p>Number of correctly answered questions: ${score}</p>`
}

function nextQuestion() {
    count = 0
    if (questionNumber < lastQuestIndex) {
        questionNumber++
        renderQuestion()

    } else {
        clearInterval(timer)
        renderScore()
    }

}

function correctAnswer() {
    progressContainer.children[questionNumber].style.backgroundColor = 'green'


}

function inCorrectAnswer() {
    progressContainer.children[questionNumber].style.backgroundColor = 'red'
}

function checkAnswer(e) {
    const userAnswer = e.target.textContent
    if (userAnswer == questions[questionNumber].correctAnswer) {
        score++
        correctAnswer()
    } else {
        inCorrectAnswer()
    }
    nextQuestion()
}

function startGame() {
    this.style.display = 'none'
    quiz.style.visibility = 'visible'
    renderQuestion()
    timer = setInterval(counter, 1000)

}



startBtn.addEventListener('click', startGame)
choice.forEach(element => {
    element.addEventListener('click', checkAnswer)
});