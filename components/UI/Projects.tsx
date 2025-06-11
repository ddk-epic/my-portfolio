import { projects } from "@/constants/collections";
import React from "react";
import ProjectCard from "../ProjectCard";

const Projects = () => {
  return (
    <section id="projects" className="wrapper">
      <div className="indent pt-20 pb-8">
        <h2 className="h2">Projects</h2>
        <div className="flex flex-col justify-center items-center gap-2">
          {projects.map((card, index) => (
            <ProjectCard
              key={index}
              projectData={card}
              className="w-full sm:flex gap-4 pb-12"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
