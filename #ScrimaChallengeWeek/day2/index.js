const form = document.getElementById("form")
const greetingWillGoHere = document.getElementById("greeting_will_go_here")
const greetingDisplayTo = document.getElementById("greeting-display_to")
const greetingDisplayMessage = document.getElementById("greeting-display_message")
const greetingDisplayFrom = document.getElementById("greeting-display_from")
const recipientInput = document.getElementById("recipient-input")
const greetingSelect = document.getElementById("greeting-select")
const senderInput = document.getElementById("sender-input")

form.addEventListener('input', function() {
    greetingWillGoHere.textContent = ''
    writeGreeting()
})

function writeGreeting() {
    greetingDisplayMessage.innerHTML = `${greetingSelect.value}`
    if (recipientInput.value != '') {
        greetingDisplayTo.innerHTML = `to ${recipientInput.value}`
    }
    if (senderInput.value != '') {
        greetingDisplayFrom.innerHTML = `from ${senderInput.value}`
    }
}