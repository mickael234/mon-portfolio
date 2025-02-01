import React from "react"

function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
    console.log("Formulaire soumis:", formData)
    alert("Merci pour votre message ! Je vous répondrai bientôt.")
  }

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Contactez-moi</h2>
        </div>
        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              <div className="address">
                <i className="fas fa-map-marker-alt"></i>
                <h4>Adresse:</h4>
                <p>Votre adresse ici</p>
              </div>
              <div className="email">
                <i className="fas fa-envelope"></i>
                <h4>Email:</h4>
                <p>ezeckieldiarrassouba@gmail.com</p>
              </div>
              <div className="phone">
                <i className="fas fa-phone"></i>
                <h4>Téléphone:</h4>
                <p>+33 1 23 45 67 89</p>
              </div>
            </div>
          </div>
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Votre Nom</label>
                  <input type="text" name="name" className="form-control" id="name" required onChange={handleChange} />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="email">Votre Email</label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    required
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="subject">Sujet</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea className="form-control" name="message" rows="10" required onChange={handleChange}></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Envoyer le Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

