import React from "react";


function Navbar({ activeMenu, setActiveMenu }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="navbar-title">Java Learning Hub</span>
      </div>

      <div className="navbar-right">
        <button
          className={`nav-btn ${activeMenu === "java" ? "active" : ""}`}
          onClick={() => setActiveMenu("java")}
        >
          Java
        </button>
        <button
          className={`nav-btn ${activeMenu === "springboot" ? "active" : ""}`}
          onClick={() => setActiveMenu("springboot")}
        >
          Spring Boot
        </button>
        <button
          className={`nav-btn ${activeMenu === "dsa" ? "active" : ""}`}
          onClick={() => setActiveMenu("dsa")}
        >
          DSA
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
