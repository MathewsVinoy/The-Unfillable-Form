document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("display");
  const keys = document.querySelectorAll(".key");
  const clearKeys = document.querySelectorAll(".clear-key");
  const clearKeys1 = document.querySelectorAll(".clear-key1");
  const spaceKeys = document.querySelectorAll(".space-key");
  const submitKeys = document.querySelectorAll(".submit");
  const skipKeys = document.querySelectorAll(".skip");

  // Function to validate email format
  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

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
      // Check if the display value is empty or not in a valid email format
      if (display.value === null || display.value.trim() === "") {
        alert("Please enter an email address before submitting!");
      } else if (!isValidEmail(display.value)) {
        alert("Please enter a valid email address!");
      } else {
        window.location.href = "./dobpage.html";
      }
    });
  });

  skipKeys.forEach((skipKey) => {
    skipKey.addEventListener("click", () => {
      window.location.href = "./dobpage.html";
    });
  });
});
