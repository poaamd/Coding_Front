const getUserInput = () => {
  const userInput = document.getElementById("userInput").value.toLowerCase();

  const contactItems = document.getElementsByTagName("li");

  for (let i = 0; i < contactItems.length; i++) {
    const item = contactItems[i];

    const contactName = item.textContent.toLowerCase();

    if (contactName.indexOf(userInput) !== -1 && userInput) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  }
};
document.getElementById("userInput").addEventListener("input", getUserInput);

const addContact = () => {
  const userInput = document.getElementById("userInput").value.toLowerCase();
};
