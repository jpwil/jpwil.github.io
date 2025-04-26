// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById("customname");
const randomize = document.querySelector(".randomize");
const story = document.querySelector(".story");

function randomValueFromArray(array) {
  const random = Math.floor(Math.random() * array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const nameArray = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
const locArray = ["the soup kitchen", "Disneyland", "the White House"];
const actionArray = [
  "spontaneously combusted",
  "melted into a puddle on the sidewalk",
  "turned into a slug and crawled away",
];

// It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener("click", result);

function result() {
  if (customName.value !== "") {
    let nameMe = customName.value;
  } else {
    let nameMe = "Bob";
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300 * 0.453592)} kilograms`;
    const temperature = `${Math.round(((94 - 32) * 5) / 9)} celsius`;
  } else {
    const weight = `300 pounds`;
    const temperature = `94 fahrenheight`;
  }

  const nameRandom = randomValueFromArray(nameArray);
  const locRandom = randomValueFromArray(locArray);
  const actionRandom = randomValueFromArray(actionArray);

  const textOut = `It was ${temperature} outside, so ${nameRandom} and ${nameMe} went for a walk. When they got to the ${locRandom}, they stared in horror for a few moments, then ${nameRandom} ${actionRandom}. ${nameMe} saw the whole thing, but was not surprised - ${nameRandom} weighs ${weight}, and it was a hot day.`;
  story.textContent = textOut;
  story.style.visibility = "visible";
}
