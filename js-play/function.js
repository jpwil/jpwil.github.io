var html = document.querySelector("html");

html.addEventListener("keydown", function (event) {
  console.log(`You pressed "${event.key}".`);
});
