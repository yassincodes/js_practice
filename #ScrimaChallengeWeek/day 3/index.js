document.getElementById("btn").addEventListener("click", correct)
document.getElementById("second-btn").addEventListener("click", secondCorrect)
document.getElementById("reload").addEventListener("click", reload)
const paragraph = document.getElementById("paragraph")

function correct() {
    const firstLetter = paragraph.textContent.charAt(0)
    const rest = paragraph.textContent.slice(1)
    paragraph.innerHTML = firstLetter.toUpperCase() + rest.toLowerCase()
}

function secondCorrect() {
    const arr = paragraph.textContent.split(' ')
    const newArr = arr.map(word =>  word[0].toUpperCase() + word.slice(1).toLowerCase())
    paragraph.innerHTML = newArr.join(' ')
}

function reload() {
    window.location.reload()
}
