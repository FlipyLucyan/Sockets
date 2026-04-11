window.api.onMessage((msg) => {
  const container = document.getElementById("messages");
  const div = document.createElement("p");
  div.textContent = msg
  container.appendChild(div);
});
