import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const contactDockItems = [
  {
    title: "Email",
    icon: <MdEmail className="w-full h-full text-light-gold" />,
    href: "mailto:work@pvarber.com",
  },
  {
    title: "LinkedIn",
    icon: <FaLinkedin className="w-full h-full text-light-gold" />,
    href: "https://www.linkedin.com/in/pablo-vargas-3215a2224/",
  },
  {
    title: "GitHub",
    icon: <FaGithub className="w-full h-full text-light-gold" />,
    href: "https://github.com/PabloVarg",
  },
];
