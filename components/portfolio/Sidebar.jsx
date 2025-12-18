"use client";

import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

const Sidebar = () => {
  const { 
    activeSection, 
    navigateToSection, 
    isMobileMenuOpen, 
    setIsMobileMenuOpen,
    activeColor,
    setActiveColor,
    isDarkMode,
    setIsDarkMode
  } = usePortfolio();

  const navigationItems = [
    { id: "home", label: "Home", icon: "fa-home" },
    { id: "about", label: "About", icon: "fa-user" },
    { id: "services", label: "Services", icon: "fa-list" },
    { id: "portfolio", label: "Projects", icon: "fa-briefcase" },
    { id: "skills", label: "Skills", icon: "fa-code" },
    { id: "contact", label: "Contact", icon: "fa-comments" },
  ];

  const colorOptions = [
    { id: "color-1", color: "#ec1839", name: "Red" },
    { id: "color-2", color: "#fa5b0f", name: "Orange" },
    { id: "color-3", color: "#37b182", name: "Green" },
    { id: "color-4", color: "#1854b5", name: "Blue" },
    { id: "color-5", color: "#f021b2", name: "Pink" },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className={`aside ${isMobileMenuOpen ? "open" : ""}`}>
        {/* Mobile Navigation Toggler */}
        <div 
          className={`nav-toggler ${isMobileMenuOpen ? "open" : ""}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
        </div>

        {/* Sidebar Content Wrapper */}
        <div className="sidebar-content">
          {/* Logo */}
          <div className="logo">
            <a href="#" onClick={(e) => e.preventDefault()}>
              <span>ZAV</span>i
            </a>
          </div>

          {/* Navigation Menu */}
          <ul className="nav">
            {navigationItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={activeSection === item.id ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection(item.id);
                  }}
                >
                  <i className={`fa ${item.icon}`}></i>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Theme Settings in Sidebar */}
        <div className="sidebar-theme-settings">
          {/* Dark/Light Mode Toggle */}
          <div className="theme-mode-toggle" onClick={setIsDarkMode}>
            <i className={`fas ${isDarkMode ? "fa-sun" : "fa-moon"}`}></i>
            <span>{isDarkMode ? "Light Mode" : "Dark Mode"}</span>
          </div>

          {/* Theme Colors */}
          <div className="theme-colors-section">
            <h4>Theme Colors</h4>
            <div className="color-options">
              {colorOptions.map((option) => (
                <span
                  key={option.id}
                  className={`color-circle ${activeColor === option.id ? "active" : ""}`}
                  style={{ backgroundColor: option.color }}
                  onClick={() => setActiveColor(option.id)}
                  title={option.name}
                ></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
