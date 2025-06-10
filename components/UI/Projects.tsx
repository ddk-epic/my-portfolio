import { projects } from "@/constants/collections";
import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="tempborder wrapper">
      <div className="pt-20">
        <h2 className="indent h2">Projects</h2>
        <div className="indent flex flex-col justify-center items-center gap-2">
          {projects.map((card, index) => (
            <ProjectCard key={index} projectData={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
