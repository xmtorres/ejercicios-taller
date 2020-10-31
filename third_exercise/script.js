console.log("================= EJERCICIO 3 ====================");

let btnBlue = document.getElementById("blue-button");
let btnRed = document.getElementById("red-button");
let btnGreen = document.getElementById("green-button");
let btnPink = document.getElementById("pink-button");
let textDisplay = document.getElementById("text-display");

let handleClick = e => {
    const color = e.target.value;
    textDisplay.innerHTML = `The color is ${color}.`;
    textDisplay.style.backgroundColor = color;
}

btnBlue.addEventListener("click", e => { handleClick(e)});
btnRed.addEventListener("click", e => { handleClick(e)});
btnGreen.addEventListener("click", e => { handleClick(e)});
btnPink.addEventListener("click", e => { handleClick(e)});