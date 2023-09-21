import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CircularProgressBar from "./circularProgressBar";

const skillsData = [
  { label: "JavaScript", percentage: 89 },
  { label: "Front end", percentage: 90 },
  { label: "Backend", percentage: 78 },
  { label: "C#", percentage: 13 },
  { label: "Python", percentage: 30 },
  { label: "Java", percentage: 8 },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="container mt-5">
                <div className="col-md-6 offset-md-3">
                  <p>
                    I'm a passionate and dedicated developer with a diverse
                    skill set honed through my bootcamp journey.
                  </p>
                  <p>
                    I have a strong foundation in web technologies, including
                    JavaScript, HTML, CSS, and popular frameworks like jQuery and
                    Bootstrap.
                  </p>
                  <p>
                    On the server side, I'm proficient in Node.js, allowing me
                    to build robust and scalable web applications. In the
                    database realm, I have experience with both SQL using MySQL
                    and NoSQL with MongoDB. I've also ventured into the world of
                    frontend development with React, crafting interactive and
                    user-friendly interfaces.
                  </p>
                  <p>
                    While my primary expertise lies in these areas, I'm always
                    eager to expand my horizons, whether it's delving deeper
                    into Python or embarking on the journey to master C# and
                    Java. I approach every project with enthusiasm, a hunger for
                    learning, and a commitment to delivering quality results.
                  </p>
                </div>
              </div>
              <div className="skill-box">
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  {skillsData.map((skill, index) => (
                    <div className="item" key={index}>
                      <div className="circular-progress">
                        <CircularProgressBar percentage={skill.percentage} />
                      </div>
                      <h5>{skill.label}</h5>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
