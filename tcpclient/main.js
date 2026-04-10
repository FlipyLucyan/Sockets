const { app, BrowserWindow } = require('electron')
const net = require("net");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: __dirname + '/side.js'
    },
  })

  win.loadFile('index.html')

  const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on("data", (data) => {
      win.webContents.send("new-message", data.toString());
    });

    socket.on("end", () => {
      console.log("Client disconnected");
    });
  })

  server.listen(8080, () => {
    console.log("TCP server open on 8080");
  })
}

app.whenReady().then(() => {
  createWindow()
})


