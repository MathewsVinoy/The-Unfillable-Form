document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("binaryInput");
  const result = document.getElementById("result");
  const skipKeys = document.querySelectorAll(".skip");
  let binaryString = "";

  // Function to update the binary input display
  const updateDisplay = () => {
    display.textContent = binaryString;
  };

  // Event listeners for 0 and 1 buttons
  document.getElementById("btn0").addEventListener("click", () => {
    binaryString += "0";
    updateDisplay();
  });

  document.getElementById("btn1").addEventListener("click", () => {
    binaryString += "1";
    updateDisplay();
  });

  // Event listener for Submit button
  document.getElementById("submitBtn").addEventListener("click", () => {
    if (binaryString.length < 24) {
      result.textContent =
        "Please enter a 24-bit binary date (YYYYMMDD in binary).";
      return;
    }

    // Convert binary to decimal
    const year = parseInt(binaryString.slice(0, 12), 2);
    const month = parseInt(binaryString.slice(12, 16), 2);
    const day = parseInt(binaryString.slice(16, 24), 2);

    // Check if month and day are valid
    if (month < 1 || month > 12 || day < 1 || day > 31) {
      result.textContent = "Invalid date entered. Please try again.";
    } else {
      window.location.href = "./finalpage.html";
    }

    // Reset binary input
    binaryString = "";
    updateDisplay();
  });

  // Event listener for Clear button
  document.getElementById("clearBtn").addEventListener("click", () => {
    binaryString = "";
    result.textContent = "";
    updateDisplay();
  });

  skipKeys.forEach((skipKey) => {
    skipKey.addEventListener("click", () => {
      window.location.href = "./finalpage.html";
    });
  });
});
