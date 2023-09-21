// JavaScript code to show the selected file name
const fileInput = document.getElementById("fileInput");
const fileLabel = document.querySelector(".file-label");

fileInput.addEventListener("change", function () {
  const fileName = this.value.split("\\").pop(); // Get only the file name
  fileLabel.innerHTML = `<span class="icon">📁</span> ${fileName}`;
});
