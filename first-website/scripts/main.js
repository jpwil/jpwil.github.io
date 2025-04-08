const myImage = document.querySelector("img");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/sandfly.jpg") {
    myImage.setAttribute("src", "images/sandfly2.jpg");
  } else {
    myImage.setAttribute("src", "images/sandfly.jpg");
  }
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `This is a visceral leishmaniasis summary for ${myName}`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `This is a visceral leishmaniasis summary for ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});
