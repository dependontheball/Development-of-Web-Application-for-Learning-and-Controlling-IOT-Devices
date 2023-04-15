const quizData = [
    {
        question: "How many microcontroller boards in this project?",
        a: "1",
        b: "2",
        c: "3",
        d: "4",
        correct: "b",
    },
    {
        question: "How many devices have to be communicated in IoT?",
        a: "2 devices",
        b: "4 devices",
        c: "2 or more device",
        d: "as many as you want",
        correct: "d",
    },
    {
        question: "Which platform we used as a server in this project?",
        a: "Particle",
        b: "Google Cloud IoT Core",
        c: "Blynk",
        d: "Azure IOT Central",
        correct: "c",
    },
    {
        question: "What data that the servo retrieves from the server to use in the program?",
        a: "number of people entering",
        b: "number of people leaving",
        c: "number of remaining people",
        d: "number of sensor operation times",
        correct: "c",
    },
    {
        question: "What is this meaning, if the first sensor (external one) is activated first Then the second one (the one inside) gets activated after?",
        a: "An unknown number of people entered the room.",
        b: "An unknown number of people left the room.",
        c: "An object passed in the room.",
        d: "An object passed out of the room.",
        correct: "c",
    },
    {
        question: "If you want to turn off the light when someone is in the room, what option can use in IoT device?",
        a: "Servo",
        b: "People",
        c: "LED",
        d: "Not in option",
        correct: "d",
    },
    {
        question: "What type of sensors do we use in this project?",
        a: "Pressure Sensors",
        b: "Infrared Sensors",
        c: "Proximity Sensors",
        d: "Accelerometers",
        correct: "b",
    },
    {
        question: "From the system overview, which step can be called the operation of IoT devices?",
        a: "Procedure to transmit data between sensors and servos through the server",
        b: "Steps in which the receiver receives data and rotates to turn on-off the power switch.",
        c: "Steps where the sensor detects people entering and exiting the room",
        d: "The commander controls the server to turn off the power switch.",
        correct: "a",
    },
    {
        question: "What is the function of the LED option in blynk's dashboard?",
        a: "Show number of people sent from the sensor",
        b: "The status of the power off button that controls the servo",
        c: "Power switch on the circuit board to check operation",
        d: "Servo on-off switch, to check if it still rotates.",
        correct: "b",
    },
    {
        question: "What is the function of the server in the IoT device? ",
        a: "collecting the data.",
        b: "getting ,calculating and giving data.",
        c: "getting and giving data.",
        d: "ordering the device.",
        correct: "c",
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
                const scriptURL = 'https://script.google.com/macros/s/AKfycbwF_4_McZXfgcsTvYf59iVZmR1wS6dWMrFlwQqICqQ7FjwN-BNvNiX_d8bqeGcHv_9X7w/exec'
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
