import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  TsIcon,
  ReactIcon,
  GitIcon,
  GithubIcon,
  VSCodeIcon,
  PostgresIcon,
  MongodbIcon,
  BashIcon,
  ExpressIcon,
  TailwindIcon,
  D3Icon,
  NextIcon,
} from "@/components/DevIcons";
import { Links, Project } from "./types";

export const navLinks: Links[] = [
  { name: "Projects", link: "#projects" },
  { name: "Toolbox", link: "#toolbox" },
  //{ name: "About", link: "#about" },
];

export const contactLinks: Links[] = [
  { name: "Email", link: "mailto:danhkhang95@gmail.com" },
  { name: "Github", link: "https://github.com/" },
  { name: "LinkedIn", link: "https://www.linkedin.com/" },
];

export const icons: { name: string; Icon: React.ElementType }[] = [
  { name: "VSCode", Icon: VSCodeIcon },
  { name: "HTML5", Icon: HtmlIcon },
  { name: "CSS3", Icon: CssIcon },
  { name: "JavaScript", Icon: JsIcon },
  { name: "TypeScript", Icon: TsIcon },
  { name: "React", Icon: ReactIcon },
  { name: "Tailwindcss", Icon: TailwindIcon },
  { name: "D3", Icon: D3Icon },
  { name: "Bash", Icon: BashIcon },
  { name: "Git", Icon: GitIcon },
  { name: "GitHub", Icon: GithubIcon },
  { name: "Nextjs", Icon: NextIcon },
  { name: "Express", Icon: ExpressIcon },
  { name: "Postgres", Icon: PostgresIcon },
  { name: "Mongodb", Icon: MongodbIcon },
];

export const projects: Project[] = [
  {
    title: "My Portfolio Site",
    link: "/",
    technologies: ["JavaScript", "React", "Tailwindcss", "Nextjs"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
  },
  {
    title: "MERN Project",
    link: "/",
    technologies: ["JavaScript", "React", "Tailwindcss", "Express", "Mongodb"],
    description:
      "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt",
  },
  {
    title: "3rd Project",
    link: "/",
    technologies: ["JavaScript", "React", "Tailwindcss"],
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr",
  },
];
