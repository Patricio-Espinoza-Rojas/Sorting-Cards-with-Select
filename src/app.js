import "bootstrap";
import "./style.css";

const suits = ["spade", "heart", "diamond", "clover"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function generateCard(number) {
  let cardArray = [];
  for (let i = 0; i < number; i++) {
    cardArray.push(cardPick());
  }
  return cardArray;
}
function cardPick() {
  var numberSuit = Math.floor(Math.random() * 4);
  var numberNum = Math.floor(Math.random() * 13);
  var result = [];
  result.push(suits[numberSuit]);
  result.push(numbers[numberNum]);
  return result;
}

let selectionNumber = -1;

function selectionSortCards(array) {
  console.log(array);
  for (let i = 0; i < array.length - 1; i++) {
    selectionNumber++;
    renderCardArraySelection(array);
    let minimumIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j][1] < array[minimumIndex][1]) {
        minimumIndex = j;
      }
    }
    var aux = array[i];
    array[i] = array[minimumIndex];
    array[minimumIndex] = aux;
  }
  console.log(array);
}

function toStringConverter(number) {
  if (number === 11) {
    return "J";
  } else if (number === 12) {
    return "Q";
  } else if (number === 13) {
    return "K";
  } else {
    return number;
  }
}

function renderCardArray(array) {
  var cardID = 0;
  for (let card of array) {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "div" + cardID);
    cardDiv.setAttribute("class", "cardbody");

    const cardUpperIcon = document.createElement("div");
    cardUpperIcon.setAttribute("id", "upperIcon");

    const cardNumber = document.createElement("div");
    cardNumber.setAttribute("id", "number");

    const cardLowerIcon = document.createElement("div");
    cardLowerIcon.setAttribute("id", "lowerIcon");

    if (card[0] == "heart") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♥";
      cardLowerIcon.innerHTML = "♥";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "diamond") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♦";
      cardLowerIcon.innerHTML = "♦";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "spade") {
      cardUpperIcon.innerHTML = "♠";
      cardLowerIcon.innerHTML = "♠";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else {
      cardUpperIcon.innerHTML = "♣";
      cardLowerIcon.innerHTML = "♣";
      cardNumber.innerHTML = toStringConverter(card[1]);
    }

    const cardDisplay = document.getElementById("cardDisplay");
    cardDisplay.appendChild(cardDiv);
    cardDiv.appendChild(cardUpperIcon);
    cardDiv.appendChild(cardNumber);
    cardDiv.appendChild(cardLowerIcon);

    cardID++;
  }
}

function renderCardArraySelection(array) {
  var cardID = 0;
  let selectionDiv = document.createElement("div");
  selectionDiv.style.display = "flex";
  selectionDiv.style.justifyContent = "space-evenly";
  document.body.appendChild(selectionDiv);
  let selectionId = document.createElement("h1");
  selectionId.innerHTML = selectionNumber;
  selectionId.style.paddingTop = "170px";
  selectionDiv.appendChild(selectionId);
  for (let card of array) {
    const cardDiv = document.createElement("div");
    cardDiv.setAttribute("id", "div" + cardID);
    cardDiv.setAttribute("class", "cardbody");

    const cardUpperIcon = document.createElement("div");
    cardUpperIcon.setAttribute("id", "upperIcon");

    const cardNumber = document.createElement("div");
    cardNumber.setAttribute("id", "number");

    const cardLowerIcon = document.createElement("div");
    cardLowerIcon.setAttribute("id", "lowerIcon");

    if (card[0] == "heart") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♥";
      cardLowerIcon.innerHTML = "♥";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "diamond") {
      cardUpperIcon.style.color = "red";
      cardNumber.style.color = "red";
      cardLowerIcon.style.color = "red";
      cardUpperIcon.innerHTML = "♦";
      cardLowerIcon.innerHTML = "♦";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else if (card[0] == "spade") {
      cardUpperIcon.innerHTML = "♠";
      cardLowerIcon.innerHTML = "♠";
      cardNumber.innerHTML = toStringConverter(card[1]);
    } else {
      cardUpperIcon.innerHTML = "♣";
      cardLowerIcon.innerHTML = "♣";
      cardNumber.innerHTML = toStringConverter(card[1]);
    }

    cardDiv.appendChild(cardUpperIcon);
    cardDiv.appendChild(cardNumber);
    cardDiv.appendChild(cardLowerIcon);
    selectionDiv.appendChild(cardDiv);
    cardID++;
  }
}

var drawButton = document.querySelector("#drawButton");
var sortButton = document.querySelector("#sortButton");
var textBar = document.querySelector("#numberInput");
var cardArray = [];

drawButton.addEventListener("click", function() {
  const input = document.getElementById("numberInput").value;
  if (input === "") {
    console.log("Invalid Input!");
  } else {
    if (document.querySelector("#cardDisplay").hasChildNodes()) {
      document.querySelector("#cardDisplay").innerHTML = "";
      cardArray = generateCard(input);
      renderCardArray(cardArray);
    } else {
      cardArray = generateCard(input);
      renderCardArray(cardArray);
    }
  }
});

sortButton.addEventListener("click", function() {
  selectionSortCards(cardArray);
});
