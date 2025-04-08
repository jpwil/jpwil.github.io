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
