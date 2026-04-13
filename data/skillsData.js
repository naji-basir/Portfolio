import { DiJava, DiPython, DiReact } from "react-icons/di";
import { BsJavascript, BsCss } from "react-icons/bs";
import {
  FaHtml5,
  FaNodeJs,
  FaDocker,
  FaFigma,
  FaSquareGit,
} from "react-icons/fa6";
import { GrGithub, GrMysql } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si";

const skillsData = [
  {
    title: "Languages",
    items: [
      { icon: DiJava, color: "text-red-400" },
      { icon: SiTypescript, color: "text-blue-400" },
      { icon: BsJavascript, color: "text-yellow-400" },
      { icon: DiPython, color: "text-emerald-500" },
    ],
  },
  {
    title: "Frontend",
    items: [
      { icon: FaHtml5, color: "text-red-400" },
      { icon: BsCss, color: "text-blue-400" },
      { icon: BsJavascript, color: "text-yellow-400" },
      { icon: DiReact, color: "text-blue-500" },
      { icon: SiNextdotjs, color: "text-black dark:text-white" },
      { icon: RiTailwindCssFill, color: "text-sky-400" },
    ],
  },
  {
    title: "Backend",
    items: [
      { icon: FaNodeJs, color: "text-green-500" },
      { icon: SiExpress, color: "text-gray-400" },
      { icon: SiMongodb, color: "text-emerald-500" },
      { icon: GrMysql, color: "text-blue-500" },
      { icon: SiPostgresql, color: "text-blue-500" },
    ],
  },
  {
    title: "Tools",
    items: [
      { icon: GrGithub, color: "text-indigo-400" },
      { icon: FaFigma, color: "text-pink-400" },
      { icon: FaDocker, color: "text-blue-400" },
      { icon: FaSquareGit, color: "text-rose-400" },
    ],
  },
];

export default skillsData;
