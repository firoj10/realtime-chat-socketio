# React + Node.js Realtime Chat App (Socket.io)

A professional realtime chat application built using **React (Vite)** on the frontend and **Node.js + Express + Socket.io** on the backend.  
The app supports realtime messaging, room-based chat, typing indicators, and a Messenger-style UI built with Tailwind CSS.

---

## 📌 Overview

This project demonstrates how to build a **full realtime chat system** using Socket.io, where multiple users can:

- Join a chat room
- Send and receive messages instantly
- See typing indicators
- View messages aligned left/right like Messenger
- Experience smooth auto-scrolling and clean UI

---

## 🛠 Tech Stack

### Frontend (Client)
- React (Vite)
- TypeScript
- Tailwind CSS
- socket.io-client

### Backend (Server)
- Node.js
- Express
- Socket.io
- CORS
- Nodemon (development)

---

## ✨ Features

- 🔹 Join chat room with username
- 🔹 Realtime message sending & receiving
- 🔹 Room-based communication
- 🔹 Typing indicator
- 🔹 Messenger-style UI (left/right message bubbles)
- 🔹 Auto-scroll to latest message
- 🔹 Clean and responsive layout

---

## 📂 Project Structure

## 📂 Project Structure

chat-app/
│
├── client/                     # React frontend
│   ├── public/                # Static files
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   └── ChatRoom.tsx
│   │   │
│   │   ├── App.tsx            # Main app component
│   │   ├── main.tsx           # React entry point
│   │   └── index.css          # Global styles
│   │
│   ├── package.json
│   └── tsconfig.json
│
├── server/                     # Node.js + Socket.io backend
│   ├── index.js               # Server entry point
│   ├── package.json
│   └── node_modules/
│
├── .gitignore
├── README.md
└── package.json               # (optional root config)
```

### 📁 Folder Explanation

| Folder/File      | Description                                              |
| ---------------- | -------------------------------------------------------- |
| **client/**      | React frontend application                               |
| **server/**      | Node.js + Socket.io backend                              |
| **components/**  | Reusable UI components (chat room, message bubble, etc.) |
| **ChatRoom.tsx** | Main chat interface                                      |
| **index.js**     | Socket.io server setup                                   |
| **README.md**    | Project documentation                                    |

### 🧩 Architecture Overview

* **Frontend:** React + TypeScript + Tailwind CSS
* **Backend:** Node.js + Express + Socket.io
* **Communication:** Real-time WebSocket connection
