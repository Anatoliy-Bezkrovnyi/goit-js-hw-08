const textInput = document.querySelector("#name-input");
const textOutput = document.querySelector("#name-output");

textInput.addEventListener("input", (event) => {
    textOutput.textContent = "Anonymous";
    if (event.currentTarget.value.trim() !== "") {
      textOutput.textContent = event.currentTarget.value.trim();
    }
  
});