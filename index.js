
let decreaseButton = document.getElementById("first-btn");
let resetButton = document.getElementById("second-btn");
let increaseButton = document.getElementById("third-btn");
let number = 0;
let fruitsArray = ["🍉", "🍇", "🍓", "🫐", "🍒", "🍍", "🥥", "🥑", "🥕", "🍌", "🥝", "🍐"];



decreaseButton.addEventListener("click", () => {
    number -= 1;
    if(number === 3 || (number % 3 == 0)){
        randomFruit = fruitsArray[Math.floor(Math.random() * fruitsArray.length)];
        document.querySelector("h2").textContent = randomFruit;
    } else {
        document.querySelector("h2").innerHTML = number;
        document.querySelector("h2").classList.add("decreasing");
    }
})

resetButton.addEventListener("click", () => {
    number = 0;
    document.querySelector("h2").innerHTML = number;
    document.querySelector("h2").classList.add("reseting");
})

increaseButton.addEventListener("click", () => {
    number += 1;
    if(number === 3 || (number % 3 == 0)){
        randomFruit = fruitsArray[Math.floor(Math.random() * fruitsArray.length)];
        document.querySelector("h2").textContent = randomFruit;
    } else {
        document.querySelector("h2").innerHTML = number;
        document.querySelector("h2").classList.add("increasing");
    }
})