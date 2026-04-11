import net from "net";

const clients = new Set();

const server = net.createServer((socket) => {
  clients.add(socket);
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log("Data received via TCP client:", data.toString());

    // Broadcast para todos os clientes 
    for (var client of clients) {
      client.write(data.toString());
    }
  });

  socket.on("end", () => {
    console.log("Conntection terminated.")
  });
})

server.listen(8080, () => {
  console.log("TCP server open on 8080");
})
