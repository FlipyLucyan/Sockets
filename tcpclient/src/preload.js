const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
  onMessage: (callback) => ipcRenderer.on("new-message", (_, msg) => callback(msg))
});

console.log('prerendered!')
