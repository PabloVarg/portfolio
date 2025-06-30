import { NavItem } from "@/components/NavBar/NavBar";
import { SiGooglehome } from "react-icons/si";
import {
  FaBuilding,
  FaInfoCircle,
  FaCogs,
  FaGraduationCap,
  FaProjectDiagram,
} from "react-icons/fa";
import { MdOutlineTimeline } from "react-icons/md";

export const navItems: NavItem[] = [
  {
    name: "Home",
    link: "#",
    icon: <SiGooglehome />,
  },
  {
    name: "Companies",
    link: "#companies",
    icon: <FaBuilding />,
  },
  {
    name: "About Me",
    link: "#me",
    icon: <FaInfoCircle />,
  },
  {
    name: "Technologies",
    link: "#technologies",
    icon: <FaCogs />,
  },
  {
    name: "Academy",
    link: "#academy",
    icon: <FaGraduationCap />,
  },
  {
    name: "Experience",
    link: "#experience",
    icon: <MdOutlineTimeline />,
  },
  {
    name: "Projects",
    link: "#projects",
    icon: <FaProjectDiagram />,
  },
];
