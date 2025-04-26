const output = document.querySelector(".output");
const btnStart = document.querySelector("#button");
const btnReset = document.querySelector("#reset");

countDown = function () {
  for (let i = 10; i >= 0; i--) {
    const para = document.createElement("p");
    if (i === 10) {
      para.textContent = "Countdown 10";
    } else if (i === 0) {
      para.textContent = "Blast off!";
    } else {
      para.textContent = i.toString();
    }
    output.appendChild(para);
  }
};

btnStart.addEventListener("click", countDown);
btnReset.addEventListener("click", () => {
  output.textContent = "";
});
