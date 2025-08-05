// server/index.js
const WebSocket = require("ws");
const http = require("http");

const server = http.createServer();
const wss = new WebSocket.Server({ server });

let clients = [];

wss.on("connection", (ws) => {
  clients.push(ws);
  console.log("🔌 New client connected. Total:", clients.length);

  ws.on("message", (message) => {
    // Broadcast message to all connected clients
    clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });

  ws.on("close", () => {
    clients = clients.filter((client) => client !== ws);
    console.log("❌ Client disconnected. Total:", clients.length);
  });
});

const PORT = 3001;
server.listen(PORT, () => {
  console.log(`✅ WebSocket server running at ws://localhost:${PORT}`);
});
