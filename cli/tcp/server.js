import net from "net";

const server = net.createServer((socket) => {
  console.log("Client connected");

  socket.on("data", (data) => {
    console.log("Data received via TCP client:", data.toString());
    socket.write(data.toString())
  });

  socket.on("end", () => {
    console.log("Conntection terminated.")
  });
})

server.listen(8080, () => {
  console.log("TCP server open on 8080");
})
