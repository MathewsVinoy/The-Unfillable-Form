document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");

  // Select all operation buttons
  const mul = document.getElementById("mul3");
  const add = document.getElementById("add7");
  const div = document.getElementById("div5");
  const sub = document.getElementById("sub2");
  const floor = document.getElementById("floor");
  const root = document.getElementById("root");
  const pow = document.getElementById("pow10");
  const log = document.getElementById("log");
  const submitKeys = document.querySelectorAll(".submit");
  const skipKeys = document.querySelectorAll(".skip");

  // Function to parse the display value as a number
  const getDisplayValue = () => parseFloat(display.value) || 0;

  // Multiply by 3
  mul.addEventListener("click", () => {
    display.value = getDisplayValue() * 3;
  });

  // Add 7
  add.addEventListener("click", () => {
    display.value = getDisplayValue() + 7;
  });

  // Divide by 5
  div.addEventListener("click", () => {
    display.value = getDisplayValue() / 5;
  });

  // Subtract 2
  sub.addEventListener("click", () => {
    display.value = getDisplayValue() - 2;
  });

  // Floor the number
  floor.addEventListener("click", () => {
    display.value = Math.floor(getDisplayValue());
  });

  // Square root
  root.addEventListener("click", () => {
    display.value = Math.sqrt(getDisplayValue());
  });

  // Raise to the power of 10
  pow.addEventListener("click", () => {
    display.value = Math.pow(getDisplayValue(), 10);
  });

  // Log base 10
  log.addEventListener("click", () => {
    display.value = Math.log10(getDisplayValue());
  });
  submitKeys.forEach((submitKey) => {
    submitKey.addEventListener("click", () => {
      //
      if (display.value === null || display.value.trim() === "") {
        alert("Please enter a value before submitting!");
      } else {
        window.location.href = "./emailpage.html";
      }
    });
  });

  skipKeys.forEach((skipKey) => {
    skipKey.addEventListener("click", () => {
      window.location.href = "./emailpage.html";
    });
  });
});
