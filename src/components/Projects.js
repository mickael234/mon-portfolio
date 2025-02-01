import React from "react"

function Projects() {
  const [showAll, setShowAll] = React.useState(false)
  const projects = [
    {
      name: "Projet 1",
      description: "Description du projet 1...",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Projet 2",
      description: "Description du projet 2...",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Projet 3",
      description: "Description du projet 3...",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Projet 4",
      description: "Description du projet 4...",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Projet 5",
      description: "Description du projet 5...",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
    {
      name: "Projet 6",
      description: "Description du projet 6...",
      image: "https://via.placeholder.com/300x200",
      link: "#",
    },
  ]

  const visibleProjects = showAll ? projects : projects.slice(0, 3)

  return (
    <section id="projects" className="projects">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Mes Projets</h2>
        </div>
        <div className="row">
          {visibleProjects.map((project, index) => (
            <div
              key={index}
              className="col-lg-4 col-md-6 d-flex align-items-stretch mb-4"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="project-box">
                <img src={project.image || "/placeholder.svg"} className="img-fluid" alt={project.name} />
                <div className="content">
                  <h4>{project.name}</h4>
                  <p>{project.description}</p>
                  <a href={project.link} className="btn-project">
                    Voir le Projet
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        {!showAll && projects.length > 3 && (
          <div className="text-center mt-4">
            <button className="btn btn-primary" onClick={() => setShowAll(true)}>
              Voir plus de projets
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default Projects

