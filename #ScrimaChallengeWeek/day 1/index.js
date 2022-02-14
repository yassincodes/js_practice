document.getElementById("btn").addEventListener("click", calculate)
let costEl = document.getElementById("cost-el")
let balloon = document.getElementById("balloon-checkbox")
let balloonPrice = 0
let food = document.getElementById("food-select")
let transport = document.getElementById("transport-select")

function calculate() {
    balloon.checked === true ? balloonPrice = 1 : balloonPrice = 0
    let sum = parseInt(food.value) + parseInt(transport.value) + balloonPrice
    if (food.value != 0 && transport.value != 0 ) {
         costEl.textContent = "$" + sum
    } else if (food.value && transport.value == 0 ) {
         costEl.textContent = "you should select the transport option"
    } else if (food.value == 0 && transport.value) {
         costEl.textContent = "you should select the food option"
    } else {
         costEl.textContent = "you should select the food and the transport options"
    }
}
 