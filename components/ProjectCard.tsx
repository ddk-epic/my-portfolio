import { Project } from "@/constants/types";
import React from "react";

interface ProjectCardProps {
  className: string;
  projectData: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, link, technologies, description } = props.projectData;
  return (
    <div className={props.className}>
      <div className="min-w-1/3 h-[180px] border-1 rounded-md my-2">
        <a href={link}>link</a>
      </div>

      <div className="flex-grow">
        <h3>{title}</h3>
        <div className="flex flex-wrap pt-1 pb-2 gap-1">
          {/* technology building blocks */}
          {technologies.map((item) => (
            <div className="border-1 border-primary text-primary font-mono rounded-md px-1 text-xs">
              {item}
            </div>
          ))}
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
