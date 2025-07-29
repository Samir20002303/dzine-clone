import React, { useState } from "react"; // Import useState
import "./Navbar.css"; // Ensure this path is correct
import logo from "/images/dzine_logo_home.tLJKP0IM.svg"; // Corrected import statement for the logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État pour le menu mobile

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="stl-navbar py-11 w-full height-p">
      <a className="logo" href="/">
        <img src={logo} alt="Dzine - Your Design Partner" />
      </a>

      {/* Hamburger icon for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      <ul className={`menu menu-horizontal ${isMenuOpen ? "active" : ""}`}> {/* Ajoutez la classe 'active' conditionnellement */}
        <li className="top-level-menu-item">
          <a className="menu-link" href="#">
            Tools
            <span className="arrow">
              <svg
                className="dropdown-icon"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <div className="dropdown tools-dropdown">
            <div className="menu-w">
              <div>
                <a href="#">AI Photo Filter</a>
                <p>
                  <a href="#">2D to 3D Converter</a>
                </p>
                <p>
                  <a href="/">AI Design Sketch</a>
                </p>
                <p>
                  <a href="/">Image to Prompt</a>
                </p>
                <p>
                  <a href="/">AI Style Transfer</a>
                </p>
                <p>
                  <a href="/">Turn Sketch to Art</a>
                </p>
                <p>
                  <a href="/tools/ai-anime-filter/">AI Anime Filter</a>
                </p>
              </div>
              <div>
                <a href="/tools/ai-image-editor/">AI Image Editor</a>
                <p>
                  <a href="/tools/generative-fill/">Add Object into Image</a>
                </p>
                <p>
                  <a href="/tools/remove-object/">Remove from Image</a>
                </p>
                <p>
                  <a href="/tools/background-remover/">Remove Background</a>
                </p>
                <p>
                  <a href="/tools/combine-images-with-AI/">AI Combine Images</a>
                </p>
                <p>
                  <a href="/tools/ai-photo-enhancer/">AI Photo Enhancer</a>
                </p>
                <p>
                  <a href="/tools/ai-expand-image/">AI Photo Expand</a>
                </p>
                <p>
                  <a href="/tools/vectorize-image/">Vectorize Image</a>
                </p>
                <p>
                  <a href="/tools/ai-inpainting/">Insert Object</a>
                </p>
              </div>
              <div>
                <a href="/tools/ai-art-generator/">AI Art Generator</a>
                <p>
                  <a href="/tools/ai-character-generator/">AI Character Generator</a>
                </p>
                <p>
                  <a href="/tools/ai-anime-generator/">AI Anime Generator</a>
                </p>
                <p>
                  <a href="/tools/ai-comic-generator/">AI Comic Generator</a>
                </p>
                <p>
                  <a href="/tools/flux1/">Flux.1 AI Image Generator</a>
                </p>
                <p>
                  <a href="/tools/ai-coloring-book-generator/">AI Coloring Book Generator</a>
                </p>
                <p>
                  <a href="/tools/ai-vector-generator/">AI Vector Image Generator</a>
                </p>
                <p>
                  <a href="/tools/ai-product-background-generator/">AI Product Background Generator</a>
                </p>
              </div>
            </div>
          </div>
        </li>

        <li className="top-level-menu-item">
          <a className="menu-link" href="#">
            Resources
            <span className="arrow">
              <svg
                className="dropdown-icon"
                width="16"
                height="16"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 8L10 12L14 8"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
          <div className="dropdown resources-dropdown">
            <div>
              <p>
                <a href="https://www.dzine.ai/blog/">Blog</a>
              </p>
              <p>
                <a href="https://www.youtube.com/@dzine_ai">Tutorial</a>
              </p>
              <p>
                <a href="/release-notes/">Release Notes</a>
              </p>
              <p>
                <a href="/Affiliate-program/">Affiliate Program</a>
              </p>
              <p>
                <a href="/faq/">FAQ</a>
              </p>
            </div>
          </div>
        </li>

        <li>
          <a className="menu-link" href="/pricing/">
            Pricing
          </a>
        </li>
        <li>
          <a className="menu-link" href="/api/">
            API
          </a>
        </li>
        <li>
          <a className="menu-link" href="/contact/">
            Contact Sales
          </a>
        </li>
        <li>
          <a className="menu-link" href="/book-a-demo/">
            Book a Demo
          </a>
        </li>
      </ul>

      {/* Login/Signup Buttons */}
      <div className={`auth-buttons ${isMenuOpen ? "hidden-on-mobile" : ""}`}> 
        <button
          className="btn-nav stl-btn stl-btn-xs md:stl-btn-sm stl-btn-primary w-[165px] h-10"
          type="button"
        >
          {" "}
          Start for Free{" "}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;