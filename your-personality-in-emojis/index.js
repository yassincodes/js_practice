// 1. Loop through the myEmojis array and log each of them out to the console
// 2. Grab the emojiContainer div and store it in a variable. Log it to the console
// 3. Render the emojis as <span> tags in the emojisContainer <div>
// 4. Hook an event listener up with the button,
//    and log out the input field's value when it's clicked
// 5. Push the emoji into the myEmoji's array, and clear the input field
//    However, if the input value is empty, don't do anything
// 6. Render the updated myEmojis array in the mini-browser.
// 7. ..
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")

function renderEmojis() {
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
    const emojiInput = document.getElementById("emoji-input")
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        emojiContainer.innerHTML = ""
        renderEmojis()
    }
})