const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld('api', {
  onMessage: (callback) => ipcRenderer.on("new-message", (_, msg) => callback(msg))
});

contextBridge.exposeInMainWorld('tcp', {
  send: (msg) => ipcRenderer.invoke('tcp-send', msg)
});
console.log('prerendered!')
