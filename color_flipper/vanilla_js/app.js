const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#ff00ff", "aquamarine", "rgba(95,158,160)", "gold"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    // GOAL: get random number between 0-3
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    let randomColor = Math.random() * colors.length;
    return Math.floor(randomColor);
}