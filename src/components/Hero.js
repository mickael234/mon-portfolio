function Hero() {
    return (
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up">
              <h1>Diarrassouba Hassan E.</h1>
              <h2>Développeur Fullstack Junior</h2>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  En savoir plus
                </a>
              </div>
            </div>
            <div className="col-lg-6 hero-img" data-aos="zoom-in" data-aos-delay="300">
            <img src="moi.jpg" className="img-fluid rounded-circle" alt="Hassan Ezechiel Diarrassouba" />            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Hero
  
  