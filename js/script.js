var title = document.querySelector("h1");

title.addEventListener("mouseover", function () {
  title.innerText = "Let's PARTY!";
  title.style.color = "maroon";
});

var darkModeButton = document.querySelector(".dark-mode");
var body = document.querySelector("body");

darkModeButton.addEventListener("click", function () {
  if (body.classList.contains("dark-palette")) {
    body.classList.remove("dark-palette");
    darkModeButton.innerText = "Dark Mode";
  } else {
    body.classList.add("dark-palette");
    darkModeButton.innerText = "Light Mode";
  }
});

//var lightModeButton = document.querySelector(".light-mode");

//lightModeButton.addEventListener("click", function () {
//body.classList.remove("dark-palette");
//});
