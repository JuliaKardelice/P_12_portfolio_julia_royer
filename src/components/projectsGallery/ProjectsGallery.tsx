// src/components/ProjectGallery/ProjectGallery.tsx
import React from "react";
import projectsData from "../../data/projects.json"; // assure-toi que ce chemin est correct
import "./Gallery.scss";

interface Project {
  id: number;
  title: string;
  image: string;
  code: string;
}

export const ProjectsGallery: React.FC = () => {
  return (
    <div className="gallery">
      <div className="mainBanner">
        <h1>Mes projets</h1>
      </div>
      <div className="cards-container">
        {projectsData.map(
          (project: Project) =>
            project.code ? (
              <a
                key={project.id}
                href={project.code.trim()} // au cas où il y a un vilain espace
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="card">
                  <img src={project.image} alt={`Projet ${project.title}`} />
                  <h2>{project.title}</h2>
                </div>
              </a>
            ) : null // on n'affiche rien si pas de lien GitHub
        )}
      </div>
    </div>
  );
};
