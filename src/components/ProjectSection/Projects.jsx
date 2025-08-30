import React from "react";
import "./projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "Portfolio Website",
    story: "When I coded my identity into pixels.",
    
    tech: ["React", "Three.js", "GSAP"],
    live: "https://shankar-portfolio-theta.vercel.app/",
    github: "https://github.com/Uma-Shankar-Niddena/shankar-portfolio",
  },

  {
name: "Food Munch",
    story: "Where recipes met responsiveness — tasty on any device",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://shankarfoodmunc.ccbp.tech",
    github: "",
 
  },
   {
name: "Chat Bot",
    story: "Created a chatbot that replies faster than I do",
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://umamessanger3.ccbp.tech",
    github: "",
 
  },
  
  {
    name: "Wine E-Commerce Store",
    story: "Learned how people shop and how servers breathe.",
    tech: ["HTML", "CSS", "JavaScript","React Js", "Node Js","Express Js"],
    live: "https://github.com/Uma-Shankar-Niddena/wine-Ecom",
    github: "https://github.com/Uma-Shankar-Niddena/wine-Ecom",
  },
  {
    name: "To-Do App",
    story: "Built this when life itself was a to-do list.",
    tech: ["React", "Javascript","HTML","CSS"],
    live: "https://shankartodo1.ccbp.tech",
    github: "#",
  },
  {
    name: "Farmer Blog",
    story: "Built this when taking first step into Creating Web pages.",
    tech: ["Bootstrap","HTML","CSS"],
    live: "https://shankarfarmer.ccbp.tech",
    github: "#",
  },



  
];

const Projects = () => {
  return (
    <div className="projects-page">
      <h2 className="projects-title">🍽️ My Project Starters</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div className="project-card" key={index}>
            <div className="card-front">
              <h3>{proj.name}</h3>
              <div className="tech-used">
                {proj.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
            </div>
            <div className="card-back">
              <p>{proj.story}</p>
              <div className="links">
                <a href={proj.live} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live
                </a>
                <a href={proj.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
