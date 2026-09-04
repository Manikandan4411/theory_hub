import React, { useState } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState("java"); // default menu

  return (
    <Router>
      <div className="app-container">
        {/* Navbar controls activeMenu */}
        <Navbar
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        <SearchBar />

        <div className="main-layout">
          {/* Sidebar shows topics only for activeMenu */}
          <Sidebar
            activeMenu={activeMenu}
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <Routes>
            {/* Default route */}
            <Route path="/" element={<Content />} />
            {/* Category + topic route */}
            <Route path="/:category/:topic" element={<Content />} />
            {/* Catch-all route */}
            <Route path="*" element={<Content />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
