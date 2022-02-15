const form = document.getElementById("form")
const greetingWillGoHere = document.getElementById("greeting_will_go_here")
const greetingDisplayTo = document.getElementById("greeting-display_to")
const greetingDisplayMessage = document.getElementById("greeting-display_message")
const greetingDisplayFrom = document.getElementById("greeting-display_from")
const recipientInput = document.getElementById("recipient-input")
const greetingSelect = document.getElementById("greeting-select")
const senderInput = document.getElementById("sender-input")
const greetingCustomMessageInput = document.querySelector(".greeting-custom-message-input-none")
const btn = document.getElementById("btn")

btn.addEventListener('click', function(e) {
    e.preventDefault()
    greetingCustomMessageInput.classList.remove('greeting-custom-messge-input-none')
    greetingCustomMessageInput.classList.add('greeting-custom-message-input-show');
})
form.addEventListener('input', function() {
    greetingWillGoHere.textContent = ''
    writeGreeting()
})
function writeGreeting() {
    greetingDisplayMessage.innerHTML = `${greetingSelect.value}`
    if (recipientInput.value != '') {
        greetingDisplayTo.innerHTML = `dear ${recipientInput.value}`
    }
    if (senderInput.value != '') {
        greetingDisplayFrom.innerHTML = `all the love, ${senderInput.value} ❤️`
    }
}







