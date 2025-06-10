import { StaticImport } from "next/dist/shared/lib/get-img-props";

export type Links = {
  name: string;
  link: string;
  Icon?: React.ElementType;
};

export type Project = {
  title: string;
  link: string;
  image: string | StaticImport;
  technologies: string[];
  description: string;
};
