// JavaScript code to show the selected file name
const fileInput = document.getElementById("fileInput");
const fileLabel = document.querySelector(".file-label");

fileInput.addEventListener("change", function () {
  const fileName = this.value.split("\\").pop(); // Get only the file name
  fileLabel.innerHTML = `<span class="icon">📁</span> ${fileName}`;
});

// for popup
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// for btns
const prevBtns = document.querySelectorAll(".btn-prev");
const nextBtns = document.querySelectorAll(".btn-next");
const formSteps = document.querySelectorAll(".form-step");

let formStepsNum = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
  });
});

function updateFormSteps() {
  formSteps.forEach((formSteps) => {
    formSteps.classList.contains("form-step-active") &&
      formSteps.classList.remove("form-step-active");
  });
  formSteps[formStepsNum].classList.add("form-step-active");
}
