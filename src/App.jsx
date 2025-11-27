import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdvancedTaskManager from "./pages/AdvancedTaskManager";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdvancedTaskManager />} />
      </Routes>
    </Router>
  );
}
