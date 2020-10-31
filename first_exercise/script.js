console.log("================= EJERCICIO 1 ====================");

let btnBlue = document.getElementById("blue-button");
let btnRed = document.getElementById("red-button");
let btnGreen = document.getElementById("green-button");
let btnPink = document.getElementById("pink-button");

let handleClick = e => {
    const color = e.target.value;
    alert(`The color is ${color}.`);
}

btnBlue.addEventListener("click", e => { handleClick(e)});
btnRed.addEventListener("click", e => { handleClick(e)});
btnGreen.addEventListener("click", e => { handleClick(e)});
btnPink.addEventListener("click", e => { handleClick(e)});