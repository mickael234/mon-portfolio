import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';

function Header() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">
      <a className="navbar-brand" href="/">
  Diarrassouba Hassan E.
</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#about">
                À Propos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#skills">
                Compétences
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Projets
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#certifications">
                Certifications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link" onClick={toggleTheme}>
                {darkMode ? <i className="fas fa-sun"></i> : <i className="fas fa-moon"></i>}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;