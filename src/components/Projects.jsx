import { link } from "framer-motion/client";
import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ProjectContext } from "../context/ProjectContext";
/////////////////////////////////////////////////////////
const Projects = () => {
  const [projects, setProjects] = useState([]);
  //acceder a settitle del contexto
  const { setTitle } = useContext(ProjectContext);
  const { title } = useContext(ProjectContext);
  useEffect(() => {
    getProjects();
  }, []);
  useEffect(() => {
    console.log("El proyecto seleccionado es: ", title);
  }, [title]);
  const projectsData = [
    {
      id: 1,
      title: "Sistema de Inventario",
      image_url: "./inventory/home_mob.PNG",
      description: "Descripción del Proyecto A",
    },
    // {
    //   id: 2,
    //   title: "Proyecto B",
    //   image_url: "image",
    //   description: "Descripción del Proyecto B",
    // },
  ];
  const getProjects = () => {
    try {
      setProjects(projectsData);
      console.log(`Proyectos cargados:`, projectsData);
    } catch (error) {
      console.error(
        "Hubo un error cargando los proyectos desde el archivo JSON!",
        error
      );
    }
  };

  const handleClick = (t) => {
    setTitle(t);
  };
  return (
    <div>
      <section className="projects">
        {projects.map((project) => (
          <Link to="/detail-project" key={project.id}>
            <div
              className="project-card"
              onClick={() => handleClick(project.title)}
            >
              <div className="card-title">{project.title}</div>
              <img src={project.image_url} className="card-image" />
              <div className="card-description">{project.description}</div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};
export default Projects;
