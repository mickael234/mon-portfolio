function Certifications() {
    const certifications = [
      "Licence en Génie Logiciel et Système d'Information",
      "CS50 Fundamental Python",
      "Certificat en BUILD Entrepreneurial Leadership Participant",
      "Certificat des Fondamentaux du Marketing Numérique",
      "Certificat en Java Programming",
      "Certificat en Conception Graphique",
      "Certificat en Réseaux Informatiques",
      "Certificat de Diplôme sur les Bases de l'Informatique",
    ]
  
    return (
      <section id="certifications" className="certifications">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>Certifications et Diplômes</h2>
          </div>
          <div className="row">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4"
                data-aos="zoom-in"
                data-aos-delay={index * 100}
              >
                <div className="certification-box">
                  <i className="fas fa-certificate"></i>
                  <h3>{cert}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Certifications
  
  