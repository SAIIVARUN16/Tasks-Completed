const quizData = [
    {
        question: "Who is Founder of Java",
        a: "Louis Pasteur",
        b: "Georg Simon",
        c: "John Dalton",
        d: "James Gosling",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does the acronym SQL stand for?",
        a: "Structured Query Language.",
        b: "Simple Query Language.",
        c: "Structured Query Learning.",
        d: "none of the above",
        correct: "a",
    },
];
const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.ans')
const questionEl = document.getElementById('question')
const a_label = document.getElementById('a_label')
const b_label = document.getElementById('b_label')
const c_label = document.getElementById('c_label')
const d_label = document.getElementById('d_label')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0

loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_label.innerText = currentQuizData.a
    b_label.innerText = currentQuizData.b
    c_label.innerText = currentQuizData.c
    d_label.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            if(score>=(quizData.length)/2){
                quiz.innerHTML = `
                <p style="font-size: 3em;text-align:center;margin-bottom:0px">😎</p>
                <h2>You Won the game</h2>
                <button onclick="location.reload()">Play Again??</button>
                `
            }
            else{
                quiz.innerHTML = `
                <p style="font-size: 3em;text-align:center;margin-bottom:0px">😔</p>
                <h2>You Lost the game</h2>
                <button onclick="location.reload()">Play Again??</button>
                `
            }
        }
    }
})