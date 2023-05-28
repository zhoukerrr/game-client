import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import { CreateRoom } from "./pages/createRoom";
import { JoinRoom } from "./pages/joinRoom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createRoom" element={<CreateRoom />} />
        <Route path="/joinRoom" element={<JoinRoom />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </div>
  );
}

export default App;
