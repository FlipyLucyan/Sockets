window.api.onMessage((msg) => {
  const container = document.getElementById("messages");
  const div = document.createElement("p");
  div.textContent = msg
  console.log(msg);
  container.appendChild(div);
});

const input = document.getElementById("brr");
if (!input) {
  console.log('input no go')
}

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    kkkk();
  }
})

function kkkk() {
  const btn = document.getElementById("enviar");
  if (!btn) {
    console.log('button no go')
  }
  window.udp.send(input.value + '\n');
  input.value = ""
}
