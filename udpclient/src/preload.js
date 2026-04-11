const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
  onMessage: (callback) => ipcRenderer.on("new-message", (_, msg) => callback(msg))
});

contextBridge.exposeInMainWorld('udp', {
  send: (msg) => ipcRenderer.invoke('udp-send', msg)
});
console.log('prerendered!')
