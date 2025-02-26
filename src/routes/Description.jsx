// Statics
import "./Description.css";

// Imports
import { useContext } from "react";

// Context
import { ProjectContext } from "../components/context";

// Data
import data from "../data/data";

const Description = () => {

  const {projectId} = useContext(ProjectContext);

  const project = data.find((item) => item.id === projectId);

  return (
    <div className="description-container">
      {project ? (
        <div className="description-project">
          <div className="img-container">
          <img src={project.image} alt={`Project ${project.id}`} />
          </div>
          <div className="project-description">
            <p>Nome:</p>
          <h2>{project.title}</h2>
          <p>Descrição:</p>
          <h3 className="project-details" >{project.description}</h3>
          <p className="git-details" >Veja o código do projeto:</p>
          <a href={project.linkGit} target="_blank" >GitHub</a>
          <p>Em execução:</p>
          <a href={project.link} target="_blank" >{`Projeto: ${project.title}`}</a>
          </div>
        </div>
      ) : (
        <p className="project-404">Nenhum projeto selecionado</p>
      )}
    </div>
  );
}

export default Description