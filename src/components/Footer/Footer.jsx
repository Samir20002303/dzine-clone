import React from "react";
import "./Footer.css"; // Ensure this path is correct

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="main-footer">
        <div className="stl-footer-content">
          <aside className="footer-aside">
            <img
              src="images/dzine_logo_home.tLJKP0IM.svg"
              alt="Dzine - Your Design Partner"
              className="footer-logo"
            />
            <p className="footer-slogan">
              Controllable AI Image Editing & <br /> Graphic Design Tool for
              Everyone
            </p>
            <div className="footer-social-icons">
              <span className="social-icon-svg"><img
              src="/images/d4f73a7a-a703-4978-a9cd-89682553e72b.svg"
              alt="X"
              className="social-icon"
            /></span>
              <span className="social-icon-svg"><img
              src="/images/446c43dd-ee3e-4443-bd81-557f7fcb728f.svg"
              alt="Instagram"
              className="social-icon"
            /></span>
              <span className="social-icon-svg"><img
              src="/images/670051be-5772-4826-ad00-1050564205b9.svg"
              alt="YouTube"
              className="social-icon"
            /></span>
              <span className="social-icon-svg"><img
              src="/images/2592b2b1-ab14-4b05-84eb-513c474f5c21.svg"
              alt="LinkedIn"
              className="social-icon"
            /></span>
              <span className="social-icon-svg"><img
              src="/images/a4e5bc95-ae49-4c05-aac1-db25a14b12c7.svg"
              alt="Reddit"
              className="social-icon"
            /></span>
            </div>
            <p className="footer-copyright">Copyright © 2025 Dzine-Clone</p>
          </aside>
          {/* Navigation Links */}
          <nav className="footer-nav-column">
            <span className="link-font">AI PHOTO FILTER</span>
            <span className="stl-link">2D to 3D Converter</span>
            <span className="stl-link">AI Design Sketch</span>
            <span className="stl-link">Image to Prompt</span>
            <span className="stl-link">AI Style Transfer</span>
            <span className="stl-link">Turn Sketch to Art</span>
            <span className="stl-link">AI Anime Filter</span>
            <div className="empty-div"></div>
            <span className="all-tools-link">All Tools</span>
          </nav>

          <nav className="footer-nav-column">
            <span className="link-font">AI IMAGE EDITOR</span>
            <span className="stl-link">Add Object into Image</span>
            <span className="stl-link">Remove Object from Image</span>
            <span className="stl-link">Remove Background</span>
            <span className="stl-link">AI Combine Images</span>
            <span className="stl-link">AI Photo Enhancer</span>
            <span className="stl-link">AI Photo Expand</span>
            <span className="stl-link">Vectorize Image</span>
            <span className="stl-link">Insert Object</span>
          </nav>

          <nav className="footer-nav-column">
            <span className="link-font">AI ART GENERATOR</span>
            <span className="stl-link">AI Character Generator</span>
            <span className="stl-link">AI Anime Generator</span>
            <span className="stl-link">AI Comic Generator</span>
            <span className="stl-link">Flux.1 AI Image Generator</span>
            <span className="stl-link">AI Coloring Book Generator</span>
            <span className="stl-link">AI Vector Image Generator</span>
            <span className="stl-link">AI Product Background Generator</span>
          </nav>

          <nav className="footer-nav-column">
            <span className="stl-footer-title">RESOURCES</span>
            <span className="stl-link">Blog</span>
            <span className="stl-link">Tutorial</span>
            <span className="stl-link">Affiliate Program</span>
            <span className="stl-link">FAQ</span>
          </nav>

          <nav className="footer-nav-column">
            <span className="stl-footer-title">PRICING</span>
            <span className="stl-link">Plan</span>
            <span className="stl-link">Enterprise</span>
            <span className="stl-link">Contact Sales</span>
          </nav>

          <nav className="footer-nav-column">
            <span className="stl-footer-title">ABOUT</span>
            <span className="stl-link">Contact</span>
            <span className="stl-link">Privacy Policy</span>
            <span className="stl-link">Term of Use</span>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
