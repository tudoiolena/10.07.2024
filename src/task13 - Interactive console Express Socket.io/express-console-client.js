const socket = io();

const button = document.getElementById("submit-button");
const commandInput = document.getElementById("command-input");
const errorDiv = document.getElementById("error");
const contentDiv = document.getElementById("content");

socket.on("content", (data) => {
  errorDiv.innerHTML = "";
  contentDiv.innerHTML = `<pre>${data}</pre>`;
});

socket.on("error", (errorMessage) => {
  errorDiv.innerHTML = `<p>${errorMessage}</p>`;
  contentDiv.innerHTML = "";
});

button.addEventListener("click", () => {
  const command = commandInput.value;
  socket.emit("message", command);
  commandInput.value = "";
});
