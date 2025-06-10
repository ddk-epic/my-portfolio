import { Project } from "@/constants/types";
import React from "react";

interface ProjectCardProps {
  projectData: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, link, technologies, description } = props.projectData;
  return (
    <div className="w-full md:flex gap-2 pb-20">
      <div className="min-w-1/3 h-[180px] border-1 rounded-md my-2">
        <a href={link}>link</a>
      </div>

      <div className="flex-grow">
        <h3>{title}</h3>
        <p>{technologies.join(", ")}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
