"use client";

import { ExpandableCard } from "@/components/Cards/ExpandableCards";
import { FaGolang } from "react-icons/fa6";

export const technologyCards: ExpandableCard[] = [
  {
    description: "Description 1",
    title: "Title 1",
    src: ({ className }) => <FaGolang className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: <p></p>,
  },
  {
    description: "Description 2",
    title: "Title 2",
    src: ({ className }) => <FaGolang className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: <p></p>,
  },

  {
    description: "Description 3",
    title: "Title 3",
    src: ({ className }) => <FaGolang className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: <p></p>,
  },
  {
    description: "Description 4",
    title: "Title 4",
    src: ({ className }) => <FaGolang className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: <p></p>,
  },
];
