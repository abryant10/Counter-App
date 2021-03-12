var currentNumber = 0;
const upButton = document.getElementById('upButton');
const downButton = document.getElementById('downButton');
const numberDisplay = document.getElementById('numberDisplay');

function upButtonPress () {
    currentNumber++;
    numberDisplay.textContent = currentNumber;
}
function downButtonPress () {
    if (currentNumber === 0) {
        return;
    } else {
    currentNumber--;
    numberDisplay.textContent = currentNumber;
    }
}
upButton.addEventListener('click', upButtonPress);
downButton.addEventListener('click', downButtonPress);

