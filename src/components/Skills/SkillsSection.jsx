import React from "react";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
  } from "react-icons/fa";
  import { FaLock } from "react-icons/fa";


  import {
  SiThreedotjs,
  SiExpress,
  SiSqlite,
  SiPython,

  SiGithub,
  SiPostman,
  SiBootstrap,
  SiTailwindcss
} from "react-icons/si";


import "./skills.css"; // Add styles here
import { GiLightningTrio } from "react-icons/gi";


const SkillsSection = () => {
    const skills = {
        frontend: [
          { name: "HTML", icon: <FaHtml5 color="#e34c26" size={28} />, story: "Started with just divs and dreams." },
          { name: "CSS", icon: <FaCss3Alt color="#264de4" size={28} />, story: "Made things pretty when life wasn’t." },
          { name: "JavaScript", icon: <FaJs color="#f0db4f" size={28} />, story: "Logic was my escape from reality." },
        ],
        framework: [
          { name: "React", icon: <FaReact color="#61dbfb" size={28} />, story: "Built UIs and found clarity." },
          { name: "Express", icon: <SiExpress color="#ffffff" size={28} />, story: "Built routes in code like I did in life." },
          { name: "REST API", icon: <SiExpress color="#ffffff" size={28} />, story: "Connected front and back like connecting moments in life." },
  { name: "JWT", icon: <FaLock color="#61cf73ff" size={28} />, story: "Secured trust and access, both in code and in life." },
  
           ],
        backend: [
          { name: "Node.js", icon: <FaNodeJs color="#3c873a" size={28} />, story: "Server-side, I found stability." },
           { name: "SQLite", icon: <SiSqlite color="#003b57" size={28} />, story: "Stored memories in tables, literally." },
{ 
  name: "Python", 
  icon: <SiPython color="#ffffff" size={28} />, 
},         
        ],

        stylingFrameworks:[
           { name: "Bootstrap", icon: <SiBootstrap color="#ffffff" size={28} />, story: "Styled quickly, proving speed can still be elegant." },
  { name: "Tailwind CSS", icon: <SiTailwindcss color="#ffffff" size={28} />, story: "Built modern designs with flow and freedom." }

        ],
        Tools:[
          { name: "GitHub", icon: <SiGithub color="#ffffff" size={28} />, story: "Shared my journey with the world, one commit at a time." },
  { name: "Postman", icon: <SiPostman color="#ffffff" size={28} />, story: "Tested connections, because every link matters." },
 
        ]
   

      };
      

  return (
    <div className="skills-page">
      <h2 className="skills-title">My Skill Journey</h2>

      <div className="skill-section">
        <h3>Level 1 - Frontend Basics 🪴</h3>
        <div className="skills-grid">
          {skills.frontend.map((skill) => (
           <div className="skill-card" key={skill.name}>
           {skill.icon}
           <span className="skill-name">{skill.name}</span>
           <p className="skill-story">{skill.story}</p>
         </div>
         
          ))}
        </div>
      </div>

      <div className="skill-section">
        <h3>Level 2 - Framework Sprout 🌿</h3>
        <div className="skills-grid">
          {skills.framework.map((skill) => (
           <div className="skill-card" key={skill.name}>
           {skill.icon}
           <span className="skill-name">{skill.name}</span>
           <p className="skill-story">{skill.story}</p>
         </div>
         
          ))}
        </div>
      </div>

      <div className="skill-section">
        <h3>Level 3 - Backend Roots 🌳</h3>
        <div className="skills-grid">
          {skills.backend.map((skill) => (
            <div className="skill-card" key={skill.name}>
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
            <p className="skill-story">{skill.story}</p>
          </div>
          
          ))}
        </div>
      </div>
      
            <div className="skill-section">
        <h3>Level 4 - Tools</h3>
        <div className="skills-grid">
          {skills.Tools.map((skill) => (
            <div className="skill-card" key={skill.name}>
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
            <p className="skill-story">{skill.story}</p>
          </div>
          
          ))}
        </div>
      </div>

       <div className="skill-section">
        <h3>Level 5 - Styling Frameworks</h3>
        <div className="skills-grid">
          {skills.stylingFrameworks.map((skill) => (
            <div className="skill-card" key={skill.name}>
            {skill.icon}
            <span className="skill-name">{skill.name}</span>
            <p className="skill-story">{skill.story}</p>
          </div>
          
          ))}
        </div>
      </div>


      <div className="skills-quote">
        “Not born to code. Chose to code, to change the story.”
      </div>
    </div>
  );
};

export default SkillsSection;
