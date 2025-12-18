"use client";

import React from "react";
import { usePortfolio } from "../../hooks/usePortfolio";

const PageHeader = ({ title, description }) => {
  const { navigateToSection } = usePortfolio();

  return (
    <>
      {/* Section Title with Buttons */}
      <div className="row">
        <div className="section-title-with-buttons padd-15">
          <h2>{title}</h2>
          <div className="title-buttons">
            <button 
              className="btn hire-me-btn"
              onClick={() => navigateToSection("contact")}
            >
              <i className="fa fa-paper-plane"></i>
              <span className="btn-text-full">Hire Me</span>
              <span className="btn-text-short">Hire</span>
            </button>
            <a 
              href="/assets/resume/MUQEET AHMED FULL STACK WEB APP DEVELOPER-2.pdf" 
              download="Muqeet_Ahmed_Full_Stack_Developer_Resume.pdf"
              className="btn download-cv-btn"
              aria-label="Download Muqeet Ahmed's Resume"
            >
              <i className="fa fa-download"></i>
              <span className="btn-text-full">Download CV</span>
              <span className="btn-text-short">CV</span>
            </a>
          </div>
        </div>
      </div>

      {/* Section Description - Only render if description exists */}
      {description && (
        <div className="row">
          <div className="page-header-content padd-15">
            <p className="page-description">{description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default PageHeader;

