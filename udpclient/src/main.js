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

  const dgram = require('dgram')

  const client = dgram.createSocket('udp4');

  client.on('message', (msg) => {
    const message = msg.toString();
    console.log(message)
    win.webContents.send("new-message", message);
  })

  client.bind(8082);

  ipcMain.handle('udp-send', (_, msg) => {
    if (!client) {
      throw new Error("Client not connected yet");
    }

    const message = Buffer.from(msg);
    client.send(message, 8081, 'localhost', (err) => {
      if (err) {
        console.log('Error:', err);
      } else {
        console.log('Message sent to server');
      }
      client.close();
    });
    return true;
  })

})

