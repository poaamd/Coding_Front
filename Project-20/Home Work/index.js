let rand = 0;
let userInput = "";
const getRandomNumber = () => {
  rand = Math.floor(Math.random() * 6 + 1);
  console.log(rand);
};
const getUserInput = (value) => {
  userInput = value;
  console.log(userInput);
};

const showResult = () => {
  const result = document.getElementById("resuText");
  const playerCount = document.getElementById("pResult");
  const pcCount = document.getElementById("cResult");

  if (rand > userInput) {
    console.log("pc won");
    result.innerText = "pc won";
  } else if (userInput > rand) {
    console.log("Player won");
    result.innerText = "Player won";
    playerCount.innerText += "1";
  } else {
    console.log("draw!");
    result.innerText = "draw!";
  }
};
