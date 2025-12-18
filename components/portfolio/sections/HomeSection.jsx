"use client";

import React, { useEffect, useRef } from "react";
import { usePortfolio } from "../../../hooks/usePortfolio";

const HomeSection = () => {
  const typingRef = useRef(null);
  const { navigateToSection } = usePortfolio();

  useEffect(() => {
    let timeoutId;
    if (typeof window !== "undefined" && typingRef.current) {
      const texts = [
        "Full Stack Engineer",
        "Web & App Developer",
        "Backend Developer",
        "Cloud Architecture Expert",
        "AI Integration Expert",
        "Database Administrator",
      ];
      
      let currentIndex = 0;
      let currentText = "";
      let isDeleting = false;
      let charIndex = 0;
      let isMounted = true;

      const typeEffect = () => {
        if (!isMounted) return;
        
        const fullText = texts[currentIndex];
        
        if (isDeleting) {
          currentText = fullText.substring(0, charIndex - 1);
          charIndex--;
        } else {
          currentText = fullText.substring(0, charIndex + 1);
          charIndex++;
        }

        if (typingRef.current && isMounted) {
          typingRef.current.textContent = currentText;
        }

        let typeSpeed = isDeleting ? 50 : 80;

        if (!isDeleting && charIndex === fullText.length) {
          typeSpeed = 2000;
          isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % texts.length;
          typeSpeed = 500;
        }

        timeoutId = setTimeout(typeEffect, typeSpeed);
      };

      typeEffect();
      
      return () => {
        isMounted = false;
        if (timeoutId) clearTimeout(timeoutId);
      };
    }
  }, []);

  return (
    <section className="home" id="home" aria-label="Home Section">
      <div className="container">
        <div className="row">
          {/* Home Info */}
          <article className="home-info padd-15" itemScope itemType="https://schema.org/Person">
            <h1 className="hello">
              Hello, my name is <span className="name" itemProp="name">Muqeet Ahmed</span>
            </h1>
            <h2 className="my-profession">
              I'm a <span ref={typingRef} className="typing" itemProp="jobTitle"></span>
            </h2>
            <p itemProp="description">
              Full Stack Software Developer with 3+ years of hands-on experience in software development, 
              architecture, and team leadership. Expert in backend technologies including Node.js, Express.js, 
              RESTful/SOAP/GraphQL APIs, and comprehensive database management across PostgreSQL, MongoDB, 
              DynamoDB, MySQL. Specialized in AI integration with OpenAI & Anthropic, cloud deployment (AWS), 
              microservices, and cross-platform mobile development.
            </p>
            
            <nav className="btn-group" aria-label="Call to action buttons">
              <button 
                className="btn hire-me"
                onClick={() => navigateToSection("contact")}
                aria-label="Contact me to hire for your project"
              >
                <i className="fa fa-paper-plane" aria-hidden="true"></i> Hire Me
              </button>
              <a 
                href="https://wa.me/923083160159?text=Hi%20Muqeet,%20I'm%20interested%20in%20your%20services"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="btn btn-outline"
                aria-label="Contact via WhatsApp"
                itemProp="contactPoint"
              >
                <i className="fa-brands fa-whatsapp" aria-hidden="true"></i> WhatsApp
              </a>
              <a 
                href="/assets/resume/MUQEET AHMED FULL STACK WEB APP DEVELOPER-2.pdf" 
                download="Muqeet_Ahmed_Full_Stack_Developer_Resume.pdf"
                className="btn btn-outline"
                aria-label="Download Muqeet Ahmed's Resume"
                itemProp="url"
              >
                <i className="fa fa-download" aria-hidden="true"></i> Download CV
              </a>
            </nav>

            {/* Professional Links */}
            <nav className="professional-links" aria-label="Social media and professional profiles">
              <h3 className="links-title">Find Me On:</h3>
              <div className="links-grid">
                <div className="links-row-wrapper">
                  <a 
                    href="https://github.com/Muqeetahmedsolangi" 
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="profile-link"
                    title="View Muqeet Ahmed's GitHub Profile"
                    aria-label="GitHub Profile"
                    itemProp="sameAs"
                  >
                    <i className="fa-brands fa-github" aria-hidden="true"></i>
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="https://www.fiverr.com/zaviial?public_mode=true" 
                    target="_blank"
                    rel="noopener noreferrer nofollow me"
                    className="profile-link"
                    title="Hire Muqeet Ahmed on Fiverr"
                    aria-label="Fiverr Profile"
                    itemProp="sameAs"
                  >
                    <i className="fa-solid fa-f" aria-hidden="true"></i>
                    <span>Fiverr</span>
                  </a>
                </div>
                <div className="links-row-wrapper">
                  <a 
                    href="https://www.upwork.com/freelancers/~0151e635a568d50da5" 
                    target="_blank"
                    rel="noopener noreferrer nofollow me"
                    className="profile-link"
                    title="Hire Muqeet Ahmed on Upwork"
                    aria-label="Upwork Profile"
                    itemProp="sameAs"
                  >
                    <i className="fa-solid fa-u" aria-hidden="true"></i>
                    <span>Upwork</span>
                  </a>
                  <a 
                    href="https://stackoverflow.com/users/30508733/zavii" 
                    target="_blank"
                    rel="noopener noreferrer me"
                    className="profile-link"
                    title="View Muqeet Ahmed's Stack Overflow Profile"
                    aria-label="Stack Overflow Profile"
                    itemProp="sameAs"
                  >
                    <i className="fa-brands fa-stack-overflow" aria-hidden="true"></i>
                    <span>Stack Overflow</span>
                  </a>
                </div>
                <a 
                  href="https://www.linkedin.com/in/muqeetahmed" 
                  target="_blank"
                  rel="noopener noreferrer me"
                  className="profile-link linkedin-link"
                  title="Connect with Muqeet Ahmed on LinkedIn"
                  aria-label="LinkedIn Profile"
                  itemProp="sameAs"
                >
                  <i className="fa-brands fa-linkedin" aria-hidden="true"></i>
                  <span>LinkedIn</span>
                </a>
              </div>
            </nav>
          </article>

          {/* Home Image */}
          <aside className="home-img padd-15">
            <img 
              src="/assets/images/profile/muqeet-profile.jpg" 
              alt="Muqeet Ahmed - Professional Full Stack Developer specializing in Node.js, React, and AWS"
              title="Muqeet Ahmed - Full Stack Developer"
              width="450"
              height="450"
              loading="eager"
              itemProp="image"
            />
          </aside>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
