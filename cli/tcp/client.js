import { createConnection } from "net";

const client = createConnection({ port: 8080 }, () => {
  console.log("Connected to server.");

  const mensagem = prompt('Mensagem:');

  client.write(mensagem)

});

client.on("error", (err) => {
  console.error("Client error:", err.message);
});


client.on('data', (data) => {
  const message = data.toString();


  console.log(message)
})
