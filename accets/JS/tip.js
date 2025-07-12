const tips = [
    "This game was made in Penguinmod!",
    "The Name 'Prism' came from the shape. (obviously.)",
    "This game is a work in progress, so expect updates!",
    "Any Addon Packs that are in the game are not real. (Yes they work.)",
    "These tips are randomly generated and will always be.",
    "This game is not meant to be taken seriously.",
    "I do not know what i'm doing. :3",
    "If you are reading this, you are probably bored.",
];

const tipDisplay = document.getElementById("tipDisplay");
const generateTipButton = document.getElementById("generateTip");

function getRandomTip() {
    const randomIndex = Math.floor(Math.random() * tips.length); // {Link: According to futurestud.io https://futurestud.io/tutorials/retrieve-a-random-item-from-an-array-in-javascript-or-node-js} and {Link: KIRUPA https://www.kirupa.com/html5/picking_random_item_from_array.htm}, you can get a random item from an array by generating a random index between 0 and the array's length using `Math.random()` and `Math.floor()`.
    tipDisplay.textContent = tips[randomIndex];
}

generateTipButton.addEventListener("click", getRandomTip);

// Display an initial tip when the page loads
getRandomTip();