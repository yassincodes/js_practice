// 1. Loop through the myEmojis array and log each of them out to the console
// 2. Grab the emojiContainer div and store it in a variable. Log it to the console
// 3. Render the emojis as <span> tags in the emojisContainer <div>
const myEmojis = ["👨‍💻", "⛷", "🍲"]
const emojiContainer = document.getElementById("emojiContainer")

for (let i = 0; i < myEmojis.length; i++) {
    console.log(myEmojis[i])
}