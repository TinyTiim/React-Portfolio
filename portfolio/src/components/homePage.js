//Importing Items
import React from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import circleIcon from '../assets/img/IMG_3434 (2).jpg';

//This allows my home page to have a circular icon and a aboutme box, as well as fontawesome icons for linkdin and github.
function HomePage() {
  return (
    <div id="home">
    <div className="home-container">
      <div className="circle-icon">
        <img src={circleIcon} alt="Circle Icon" />
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="about-box">
              <h2>About Me</h2>
              <p>
                I'm Sophia Palomo, a highly motivated and detail-oriented web-developer with a strong passion for computer science and video game creation.
                Currently enrolled in a full-stack web development bootcamp I'm dedicated to acquiring new skills and knowledge to excel in the field.
                I love problem-solving and completing projects while being creative.
              </p>
              <p>
                I want to become a software-engineer and that journey has equipped me with expertise in various technologies, including JavaScript, HTML, CSS, and frameworks like React.
                Additionally, I have been exploring Python and C#, expanding my skills in other langagues.
                I'm constantly seeking opportunities to contribute to innovative projects and gain practical experience in software development.
              </p>
              <p>
                Apart from coding, I find joy in activities like swimming and playing video games.
                Valorant and League of Legends are currently my top favorites.
              </p>
              <p>
                If you're looking for a dedicated and enthusiastic software engineer who brings a blend of technical skills, creativity, and a strong work ethic,
                I would love to connect and discuss potential opportunities to collaborate on exciting projects.
              </p>
              
              <div className="social-icons">
                <a href="https://github.com/TinyTiim" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className="icon" size="2x" />
                </a>
                <a href="https://www.linkedin.com/in/%E2%81%A2sophia-palomo-565155271/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} className="icon" size="2x"/>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default HomePage;
