//Importing all files
import React from 'react';
import imgMovie from '../assets/img/225480136-b6c18009-3280-4fc3-90f2-c94f0944748e.png';
import imgRead from '../assets/img/readme.JPG';
import imgPass from '../assets/img/password.JPG';
import imgEmploy from '../assets/img/employee.JPG';
import imgDev from '../assets/img/devConnect.JPG';
import imgNote from '../assets/img/note takerrr.JPG';

//My project boxes with all their info included, as well as when clicked they bring you to linked url.
const Projects = () => {
  const projects = [
    {
      title: "Movie Selector",
      description: "A random movie generator by genre.",
      imgUrl: imgMovie,
      githubUrl: "https://github.com/TinyTiim/Movie-Selector"
    },
    {
      title: "createYourReadme",
      description: "It allows you to create a personalized readme using MySQL.",
      imgUrl: imgRead,
      githubUrl: "https://github.com/TinyTiim/createYourReadme"
    },
    {
      title: "Password Generator",
      description: "You can create a password while being able to use special characters or lowercase.",
      imgUrl: imgPass,
      githubUrl: "https://github.com/TinyTiim/Password-Generator"
    },
    {
      title: "myEmployees",
      description: "This application is an employee-manager database system.",
      imgUrl: imgEmploy,
      githubUrl: "https://github.com/TinyTiim/myEmployees"
    },
    {
      title: "DevConnect",
      description: "A way to connect with other developers.",
      imgUrl: imgDev,
      githubUrl: "https://github.com/TinyTiim/DevConnect"
    },
    {
      title: "Note taker",
      description: "It allows you to store notes as well as delete and save.",
      imgUrl: imgNote,
      githubUrl: "https://github.com/TinyTiim/Note-Taker"
    },
  ];
//The return format, so everything gets exported in this container in the projects tab.
  return (
    <div id="projects">
      <div>
        <div className="projectheader">
          <h2>Projects</h2>
        </div>
        <div className="project-card-container">
          {projects.map((project, index) => (
            <a href={project.githubUrl} className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <img src={project.imgUrl} alt={project.title} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
