const quizData = [
    {
        question: "Which one is the a IoT devices?",
        a: "Smart Board",
        b: "smart phone",
        c: "smart watch",
        d: "smart car",
        correct: "a",
    },
    {
        question: "What does IoT mean?",
        a: "a network of interconnected devices and technologies that facilitate Device-to-cloud communication",
        b: "a network of interconnected devices and technologies that facilitate Communication between the device and the Internet",
        c: "a network of interconnected devices and technologies that facilitate Communication between devices and Bluetooth",
        d: "all above",
        correct: "a",
    },
    {
        question: "How many of the IoT's main elements are there?",
        a: "1 elements",
        b: "2 elements",
        c: "3 elements",
        d: "4 elements",
        correct: "d",
    },
    {
        question: " Which one that IoT can not improve to our lives?",
        a: "get more comfortable",
        b: "get more efficiency",
        c: "get more life quality",
        d: "get smarter",
        correct: "d",
    },
    {
        question: "How does IoT benefit businesses?",
        a: "increase security",
        b: "accelerate innovation",
        c: "Turn data into insights and actions with AI and ML.",
        d: "none of the above",
        correct: "d",
    },
    {
        question: "What are the challenges or risks associated with IoT?",
        a: "Privacy",
        b: "lack of knowledge and awareness",
        c: "insufficient testing & outdated product",
        d: "none of the above",
        correct: "d",
    },
    {
        question: "What is identical between IoT and M2M?",
        a: "Internet access is usually required for devices to communicate and share data.",
        b: "Communication technologies and traditional protocols are used.",
        c: "Perform work without human intervention.",
        d: "none of the above",
        correct: "c",
    },
    {
        question: "What is not the common IoT application?",
        a: "smart home",
        b: "working assistant",
        c: "connect heath",
        d: "farmming",
        correct: "b",
    },
    {
        question: "Which is not the component of IoT system?",
        a: "sensor",
        b: "transformers",
        c: "connectivity",
        d: "data processing",
        correct: "b",
    },
    {
        question: "IoT devices are associated with data through which of the following methods? ",
        a: "Internet",
        b: "Cloud",
        c: "Automata",
        d: "Network",
        correct: "b",
    },

];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('next')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
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
           quiz.innerHTML = `
           <form name="pre-test">
           <h2>You answered <input type="text" name="score" value="${score}" id="score" readonly> questions correctly</h2>
           <button id="next">Submit</button>
           </form>
           `
                const scriptURL = 'https://script.google.com/macros/s/AKfycbyzFHGikYVjc8ew8pD0zoiZlNwUVcvo2k9TJKf6iNXcLwTJknhxRjWKQ1G6rIDmcOiOdA/exec'
                const form = document.forms['pre-test']

                form.addEventListener('submit', e => {
                    e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                        .then(response => location.reload())
                        .catch(error => console.error('Error!', error.message))
                })

            }
                }
    })
