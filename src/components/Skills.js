function Skills() {
  const skillCategories = [
    {
      name: "Langages de Programmation",
      skills: [
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "Kotlin", icon: "devicon-kotlin-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "PHP", icon: "devicon-php-plain colored" },
      ],
    },
    {
      name: "Développement Web",
      skills: [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React Native", icon: "devicon-react-original colored" },
        { name: "Django", icon: "devicon-django-plain colored" },
        { name: "WordPress", icon: "devicon-wordpress-plain colored" },
        { name: "Magento", icon: "devicon-magento-plain colored" },
        { name: "Drupal", icon: "devicon-drupal-plain colored" },
        { name: "PrestaShop", icon: "devicon-prestashop-plain colored" },
        { name: "Shopify", icon: "devicon-shopify-plain colored" },
      ],
    },
    {
      name: "Bases de Données",
      skills: [
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
        { name: "Oracle SQL", icon: "devicon-oracle-original colored" },
        { name: "PLSQL", icon: "fas fa-database" },
        { name: "Firebase", icon: "devicon-firebase-plain colored" },
        { name: "Supabase", icon: "fas fa-database" },
      ],
    },
    {
      name: "Outils de Développement",
      skills: [
        { name: "Visual Studio Code", icon: "devicon-vscode-plain colored" },
        { name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },
        { name: "Code::Blocks", icon: "fas fa-code" },
        { name: "SDL", icon: "fas fa-gamepad" },
        { name: "ISIS Proteus", icon: "fas fa-microchip" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "GitHub", icon: "devicon-github-plain colored" },
      ],
    },
    {
      name: "Conception Graphique",
      skills: [
        { name: "Figma", icon: "devicon-figma-plain colored" },
        { name: "Photoshop", icon: "devicon-photoshop-plain colored" },
        { name: "Adobe Illustrator", icon: "devicon-illustrator-plain colored" },
        { name: "Canva", icon: "devicon-canva-original colored" },
        { name: "Blender (3D)", icon: "devicon-blender-original colored" },
      ],
    },
    {
      name: "Administration Système",
      skills: [
        { name: "Linux (Ubuntu)", icon: "devicon-ubuntu-plain colored" },
        { name: "VirtualBox", icon: "fas fa-box" },
        { name: "VMware", icon: "fas fa-server" },
      ],
    },
    {
      name: "Gestion de Projet",
      skills: [
        { name: "Scrum", icon: "fas fa-tasks" },
        { name: "Trello", icon: "devicon-trello-plain colored" },
      ],
    },
  ]

  return (
    <section id="skills" className="skills section-bg">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Mes Compétences</h2>
        </div>
        <div className="row">
          {skillCategories.map((category, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div className="icon-box" data-aos="zoom-in" data-aos-delay={index * 100}>
                <h4>{category.name}</h4>
                <ul className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>
                      <i className={`${skill.icon} skill-icon`}></i>
                      {skill.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

