function Footer() {
    return (
      <footer id="footer">
        <div className="container">
          <h3>Diarrassouba Hassan E.</h3>
          <p>Développeur Fullstack Junior passionné par la création de solutions innovantes.</p>
          <div className="social-links">
  <a href="https://twitter.com/votre_compte" className="twitter" aria-label="Twitter">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://facebook.com/votre_compte" className="facebook" aria-label="Facebook">
    <i className="fab fa-facebook"></i>
  </a>
  <a href="https://instagram.com/votre_compte" className="instagram" aria-label="Instagram">
    <i className="fab fa-instagram"></i>
  </a>
  <a href="https://linkedin.com/in/votre_compte" className="linkedin" aria-label="LinkedIn">
    <i className="fab fa-linkedin"></i>
  </a>

          </div>
          <div className="copyright">
            &copy; {new Date().getFullYear()}{" "}
            <strong>
              <span>Diarrassouba Hassan E.</span>
            </strong>
            . Tous droits réservés.
          </div>
        </div>
      </footer>
    )
  }
  
  export default Footer
  
  