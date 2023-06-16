import React from 'react';
import imgMovie from '../assets/img/225480136-b6c18009-3280-4fc3-90f2-c94f0944748e.png';

const Projects = () => {
  const projects = [
    {
      title: "Movie Selector",
      description: "A random movie generator by genre",
      imgUrl: imgMovie
    },
    {
      title: "Movie Selector",
      description: "A random movie generator by genre",
      imgUrl: imgMovie
    },
    {
      title: "Movie Selector",
      description: "A random movie generator by genre",
      imgUrl: imgMovie
    },
    {
      title: "Movie Selector",
      description: "A random movie generator by genre",
      imgUrl: imgMovie
    },
  ];

  return (
    <div id="projects">
    <div>
      <div className="projectheader">
        <h2>Projects</h2>
      </div>
      <div className="project-card-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <img src={project.imgUrl} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Projects;
