// building the app in 8 steps ..
// 1. Loop through the myEmojis array and log each of them out to the console
// 2. Grab the emojiContainer div and store it in a variable. Log it to the console
// 3. Render the emojis as <span> tags in the emojisContainer <div>
// 4. Hook an event listener up with the button,
//    and log out the input field's value when it's clicked
// 5. Push the emoji into the myEmoji's array, and clear the input field
//    However, if the input value is empty, don't do anything
// 6. Render the updated myEmojis array in the mini-browser.
// 7. Make the unshift button work just as the push button
//    (but with unshifting instead of pushing)
// 8. Make the pop and shift buttons work as well
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")

function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
        const emoji = document.createElement('span')
        emoji.textContent = myEmojis[i]
        emojiContainer.append(emoji)
    }
}

renderEmojis()

pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})
