document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const keys = document.querySelectorAll(".key");
  const clearKeys = document.querySelectorAll(".clear-key");
  const clearKeys1 = document.querySelectorAll(".clear-key1");
  const spaceKeys = document.querySelectorAll(".space-key");
  const submitKeys = document.querySelectorAll(".submit");
  const skipKeys = document.querySelectorAll(".skip");

  keys.forEach((key) => {
    key.addEventListener("mouseover", () => {
      display.value += key.textContent;
    });
  });

  clearKeys.forEach((clearKey) => {
    clearKey.addEventListener("mouseover", () => {
      display.value = "";
    });
  });

  clearKeys1.forEach((clearKey1) => {
    clearKey1.addEventListener("mouseover", () => {
      display.value = "";
    });
  });

  spaceKeys.forEach((spaceKey) => {
    spaceKey.addEventListener("mouseover", () => {
      display.value += " ";
    });
  });
  submitKeys.forEach((submitKey) => {
    submitKey.addEventListener("click", () => {
      //
      if (display.value === null || display.value.trim() === "") {
        alert("Please enter a name before submitting!");
      } else {
        window.location.href = "./phoneno.html";
      }
    });
  });

  skipKeys.forEach((skipKey) => {
    skipKey.addEventListener("click", () => {
      window.location.href = "./phoneno.html";
    });
  });
});
