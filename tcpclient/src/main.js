const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')

let win;

app.whenReady().then(() => {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  })

  win.webContents.openDevTools();

  win.loadFile('src/app/index.html')

  win.webContents.on('did-finish-load', () => {
    const net = require('net');

    const client = net.createConnection({ port: 8080 }, () => console.log('Connectado a porta 8080'));

    client.on("data", (data) => {
      const message = data.toString();
      console.log('Message:', message)
      win.webContents.send("new-message", message);
    });


    client.on("end", () => {
      console.log("Disconnectado.");
    });

    client.on("error", (err) => {
      console.error("Client error:", err.message);
    });

    ipcMain.handle('tcp-send', (_, msg) => {
      if (!client) {
        throw new Error("Client not connected yet");
      }
      client.write(msg)
      return true;
    })
  })

})

