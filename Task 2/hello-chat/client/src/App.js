import React, { useEffect, useState, useRef } from "react";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [connected, setConnected] = useState(false);
  const socket = useRef(null);
  const endRef = useRef(null);

  useEffect(() => {
    if (connected) {
      socket.current = new WebSocket("ws://localhost:3001");

      socket.current.onmessage = async (event) => {
        try {
          const text = await event.data.text();
          const msg = JSON.parse(text);
          setMessages((prev) => [...prev, msg]);
        } catch (err) {
          console.error("❌ Error parsing message:", err);
        }
      };
    }

    return () => socket.current?.close();
  }, [connected]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (!input) return;

    const messageData = {
      username,
      text: input,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    if (socket.current && socket.current.readyState === WebSocket.OPEN) {
      socket.current.send(JSON.stringify(messageData));
    }

    setInput(""); // ✅ Clear the input only — no local append
  };

  if (!connected) {
    return (
      <div className="username-container">
        <h2>Hello Chat 👋</h2>
        <input
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button onClick={() => setConnected(true)}>Join Chat</button>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <div className="chat-header">Hello Chat 💬</div>
        <div className="chat-messages">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`message ${
                msg.username === username ? "own" : "other"
              }`}
            >
              <div className="message-meta">
                <span className="user">{msg.username}</span>
                <span className="time">{msg.time}</span>
              </div>
              <div className="message-text">{msg.text}</div>
            </div>
          ))}
          <div ref={endRef} />
        </div>
        <div className="chat-input">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Type your message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}

export default App;
