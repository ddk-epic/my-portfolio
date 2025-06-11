import React from "react";
import { Project } from "@/constants/types";
import Image from "next/image";

interface ProjectCardProps {
  className: string;
  projectData: Project;
}

const ProjectCard = (props: ProjectCardProps) => {
  const { title, link, image, technologies, description } = props.projectData;
  return (
    <div className={props.className}>
      {/* Image */}
      <a href={link} className="my-2">
        <Image
          src={image}
          alt={`image of ${title}`}
          width={300}
          placeholder="blur"
        />
      </a>

      {/* Title, description */}
      <div className="flex-1">
        <h3>{title}</h3>
        <div className="flex flex-wrap pt-1 pb-2 gap-1">
          {/* Technology labels */}
          {technologies.map((item) => (
            <div
              key={item}
              className="border border-primary text-primary font-mono rounded-md px-1 text-xs"
            >
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-gray">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
