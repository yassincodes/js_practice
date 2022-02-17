document.getElementById("btn").addEventListener("click", filterDuplicates)
document.getElementById("btn-sort").addEventListener("click", sort)
const emojis = [
    "💘","💘","🌞","🧡","🍇",
    "🧁","⚡️","💝","🐱","💘",
    "🧡","💫","🍓","💜","⚡️",
    "⚡️","🐶","💘","🍇","🐱",
    "💘","💫","🍓","💜","💕",
    "⚡️","💘","🌞","🐱","💘",
    "💫","🍓","💜","⚡️","🧡",
    "💕","🍇","💘"
    ]
    
const allEmojisP = document.getElementById("all-emojis-p")
const uniqueEmojisP = document.getElementById("unique-emojis-p")

for (let emoji of emojis) {
    allEmojisP.textContent += emoji
}

const arr = []
for (let emoji of emojis) {
    arr.push(emoji)
}

function filterDuplicates() {
    // 1. Filter out all duplicate emojis, leaving only one of each emoji.
    // 2. Render the unique emojis in uniqueEmojisP.
    const filteredArr = []
    arr.map((emoji) => {
        filteredArr.includes(emoji) == false && filteredArr.push(emoji)
    })
    for (let emoji of filteredArr) {
        uniqueEmojisP.textContent += emoji
    } 
    document.getElementById("btn").textContent = 'done ✔️'
    document.getElementById("btn").removeEventListener('click', filterDuplicates)
    document.getElementById("btn").classList.remove("button-class")
}

function sort() {
    emojis.sort()
    allEmojisP.textContent = ""
    for (let emoji of emojis) {
        allEmojisP.textContent += emoji
    }
    document.getElementById("btn-sort").textContent = 'done 😁'
    document.getElementById("btn-sort").classList.remove("button-class")
}