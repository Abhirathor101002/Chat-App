import React from "react";
import { Route, Routes } from "react-router-dom"; // Import Routes
import Homepage from "./pages/Homepage";
import ChatPage from "./pages/ChatPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} exact />
      <Route path="/chats" element={<ChatPage />} />
    </Routes>
  );
}

export default App;
