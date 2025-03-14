const getUserInput = () => {
  return document.getElementById("cookType").value;
};
const getSelectedOptionBasedOnUserInput = (userInput) => {
  const cookTypes = {
    soft: {
      name: "soft",
      cook_duration: 5,
      description: "A nice egg with runny yolk",
    },
    medium: {
      name: "medium",
      cook_duration: 8,
      description: "A nice egg with a yellow yolk",
    },
    hard: {
      name: "hard",
      cook_duration: 12,
      description: "A nice egg with green yolk",
    },
  };

  const selectedCookType = cookTypes[userInput];

  if (selectedCookType) {
    return selectedCookType;
  }
  return {
    name: "wtf",
    cook_duration: 0,
    description: "what the hell dude?",
  };
};

const updateScreen = (str) => {
  const resulArea = document.getElementById("result");
  resulArea.innerText = str;
};
const startCooking = () => {
  const userInput = getUserInput();

  const selectedOption = getSelectedOptionBasedOnUserInput(userInput);
  updateScreen(selectedOption.description);
  //   alert(selectedOption.description);
  //   setTimeout(() => {
  //     alert("your egg is ready");
  //   }, selectedOption.cook_duration * 1000);
};
