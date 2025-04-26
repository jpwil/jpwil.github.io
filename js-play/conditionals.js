const select = document.querySelector("select");
const list = document.querySelector("ul");
const h1 = document.querySelector("h1");

function createCalendar(month) {
  let days = 31;
  const choice = select.value;

  switch (choice) {
    case "February":
      days = 28;
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      days = 30;
      break;
  }

  list.textContent = "";
  h1.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

select.value = "January";
createCalendar("January");
