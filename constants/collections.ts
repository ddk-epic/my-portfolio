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
} from "@/components/DevIcons";

export const navLinks: { name: string; link: string }[] = [
  { name: "Tech Stack", link: "#techstack" },
  //{ name: "Experience", link: "#experience" },
  { name: "Projects", link: "#work" },
  { name: "About", link: "#about" },
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
  { name: "Express", Icon: ExpressIcon },
  { name: "Postgres", Icon: PostgresIcon },
  { name: "Mongodb", Icon: MongodbIcon },
];
