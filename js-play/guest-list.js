const people = [
  "Chris",
  "Anne",
  "Colin",
  "Terri",
  "Phil",
  "Lola",
  "Sam",
  "Kay",
  "Bruce",
];

const admitted = document.querySelector(".admitted");
const refused = document.querySelector(".refused");
admitted.textContent = "Admit: ";
refused.textContent = "Refuse: ";

for (i in people) {
  if (people[i] === "Lola" || people[i] === "Phil") {
    if (i === people.length - 1) {
      console.log("trigger length limit");
      refused.textContent += `and ${people[i]}.`;
    } else {
      console.log("trigger length no limit");
      refused.textContent += `${people[i]}, `;
    }
  } else {
    if (i === people.length - 1) {
      admitted.textContent += `and ${people[i]}.`;
    } else {
      admitted.textContent += `${people[i]}, `;
    }
  }
}

// refused.textContent += // admitted.textContent += ;
