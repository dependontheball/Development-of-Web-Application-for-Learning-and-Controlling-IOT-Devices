const scriptURL = 'https://script.google.com/macros/s/AKfycbyAHyA_9cfElizUF5aI5ymXhbYrqqMJgRE6FxoENzgrk402o3ReIih08lOuMqAluiwMUw/exec'
const form = document.forms['feedbackform']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => document.getElementById("demo").innerHTML = "<div class='alert alert-primary' role='alert'><b>Thank You for providing the details, We shall get back to you shortly !</b></div>",feedbackform.reset())
    .catch(error => console.error('Error!', error.message))

  
})