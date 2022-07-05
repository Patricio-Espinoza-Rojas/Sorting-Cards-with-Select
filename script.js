let cards = ['♠', '♣', '♥', '♦'];

let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

function randomCardIndex() {
    return Math.floor(Math.random() * cards.length);
}

let randomCard = cards[randomCardIndex()]

function randomNumberIndex() {
    return Math.floor(Math.random() * numbers.length);
}
let randomNumbers = numbers[randomNumberIndex()]


const topSuit = document.querySelector(".top-suit");
if (randomCard == "♥") {
    topSuit.style.color = "red";
}
if (randomCard == "♦") {
    topSuit.style.color = "red";
}
topSuit.innerHTML = randomCard;


const BottomSuit = document.querySelector(".bottom-suit");
if (randomCard == "♥") {
    BottomSuit.style.color = "red";
}
if (randomCard == "♦") {
    BottomSuit.style.color = "red";
}
BottomSuit.innerHTML = randomCard;


let numberSeven = document.querySelector('.seven');
numberSeven.innerHTML = randomNumbers;