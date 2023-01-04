let numbersArray = document.querySelectorAll(".btn");
let display = document.querySelector("#display");

numbersArray.forEach(function(elem) {
  elem.addEventListener("click", () => {
    display.textContent += elem.value;
  });
});

const clear = document.querySelector("#clear");

clear.addEventListener("click", () => {
  display.textContent = "";
});

const equalsBtn = document.querySelector("#equals");

equalsBtn.addEventListener("click", () => {
  display.textContent = eval(display.value);
});

const delBtn = document.querySelector("#delete");

delBtn.addEventListener("click", () => {
	display.textContent = display.value.slice(0, display.value.length -1);
});
