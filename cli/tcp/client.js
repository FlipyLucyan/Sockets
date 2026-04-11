import { createConnection } from "net";
import { createWriteStream } from "fs";

const client = createConnection({ port: 8080 }, () => {
  console.log("Connected to server.");

  const writeStream = createWriteStream("result.txt");

  client.pipe(writeStream);

  client.on("end", () => {
    writeStream.end();
    console.log("File received, connection closed.");
  });
});

client.on("error", (err) => {
  console.error("Client error:", err.message);
});

client.write('ehy')

client.on('data', (data) => {
  const message = data.toString();


  console.log(message)
})
