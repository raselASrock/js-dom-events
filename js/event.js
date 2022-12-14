console.log("this is separate JS file");

// Option: 1 directly set on the HTML element
{/* <button onclick="console.log(5)">Another Button </button> */ }

// Option: 2 add click function
// Important: We will use this
function makeRed() {
    document.body.style.backgroundColor = 'red';
}
// Option: 3
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue'
}
// Option: 3 Another
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple'
}

// Option: 4
const pinkButton = document.getElementById('make-pink')
pinkButton.addEventListener('click', makePink)
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// Option: 4 Another
const makeGreenButton = document.getElementById('make-green')
makeGreenButton.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
})

// Option: 4 Final
document.getElementById('make-golden-rod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod';
})    