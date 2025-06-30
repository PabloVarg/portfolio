import Image from "next/image";
import { TimelineEntry } from "@/components/Timeline/Timeline";
import Link from "next/link";

export const timelineItems: TimelineEntry[] = [
  {
    title: (
      <Link target="_blank" href="http:/www.praxispro.ai">
        <Image
          src="/images/companies/praxispro.webp"
          alt="PraxisPro"
          width={250}
          height={50}
        />
      </Link>
    ),
    content: (
      <div>
        <h3 className="text-light-gold mb-2 text-2xl">
          Rocktech (April 2025 - Present)
        </h3>
        Building the future of sales training on the pharma field by creating
        and mantaining backend scalable solutions
      </div>
    ),
  },
  {
    title: (
      <Link target="_blank" href="https://www.alluxi.com/">
        <Image
          src="/images/companies/alluxi.webp"
          alt="Alluxi"
          width={250}
          height={50}
        />
      </Link>
    ),
    content: (
      <div>
        <h3 className="text-light-gold mb-2 text-2xl">
          Alluxi (September 2023 - April 2025)
        </h3>
        Led development of multiple e-commerce platforms with expertise in
        large-scale codebases like Saleor. Mentored team members and implemented
        over four payment, invoicing, and shipping integrations to optimize
        transaction workflows. Developed a comprehensive platform managing
        millions of SEC filings for U.S. clients, engineering scalable backends
        with Django REST Framework and dynamic frontends with Next.js
      </div>
    ),
  },
  {
    title: (
      <Link target="_blank" href="https://www.bb.com.mx">
        <Image
          src="/images/companies/bajio.webp"
          alt="Banco del Bajio"
          width={250}
          height={50}
        />
      </Link>
    ),
    content: (
      <div>
        <h3 className="text-light-gold mb-2 text-2xl">
          BanBajio (April 2023 - September 2023)
        </h3>
        Developed key features in embossing systems for credit and debit card
        distribution across multiple providers using Java. Created comprehensive
        reports utilizing SQL across Oracle Database, MySQL, and SQL Server
        environments as well as pipeline processes for cleaning transactions
        data
      </div>
    ),
  },
  {
    title: (
      <Link target="_blank" href="#">
        <Image
          src="/images/companies/rocktech.webp"
          alt="Rocktech"
          width={250}
          height={50}
          className="bg-white"
        />
      </Link>
    ),
    content: (
      <div>
        <h3 className="text-light-gold mb-2 text-2xl">
          Rocktech (June 2022 - April 2023)
        </h3>
        Developed an innovative business diagnostic tool integrating ChatGPT
        through OpenAI's API with customized prompts. Built "Equity Manager," a
        comprehensive system for managing private equity investments using
        Django, GraphQL, and Next.js. Applied complex financial formulas for
        interest calculations and integrated with Banxico's APIs for real-time
        financial metrics
      </div>
    ),
  },
  {
    title: (
      <Link target="_blank" href="#" className="grayscale">
        <Image
          src="/images/companies/rocktech.webp"
          alt="Rocktech"
          width={250}
          height={50}
          className="bg-white"
        />
      </Link>
    ),
    content: (
      <div>
        <h3 className="text-light-gold mb-2 text-2xl">
          Rocktech (March 2022 - June 2022)
        </h3>
        Developed a complete Content Management System for restaurant "La
        Cocinoteca," managing blogs, menus, and galleries using Django, React,
        and Next.js. Gained foundational experience in full-stack development
        and client collaboration
      </div>
    ),
  },
];
