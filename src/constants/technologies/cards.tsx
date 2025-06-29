"use client";

import { ExpandableCard } from "@/components/Cards/ExpandableCards";
import { FaGolang, FaAws, FaLinux } from "react-icons/fa6";
import {
  BiLogoKubernetes,
  BiLogoPostgresql,
  BiLogoPython,
} from "react-icons/bi";

export const technologyCards: ExpandableCard[] = [
  {
    description:
      "High-performance backend services and distributed architectures",
    title: "Go",
    src: ({ className }) => <FaGolang className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: (
      <p>
        Extensively used for developing scalable microservices and distributed
        architectures. Proficient in building REST APIs, implementing gRPC
        services for efficient inter-service communication, and using sqlc for
        compile-time safe SQL operations.
      </p>
    ),
  },
  {
    description:
      "Container orchestration for self-hosted and enterprise applications",
    title: "Kubernetes",
    src: ({ className }) => <BiLogoKubernetes className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: (
      <p>
        Hands-on experience with container orchestration for diverse workloads,
        from self-hosted applications (Kavita, Jellyfin, FileBrowser) to
        enterprise monitoring solutions. Proficient in managing multi-service
        deployments, including Grafana and Loki observability stacks in
        production environments.
      </p>
    ),
  },

  {
    description: "Django backend development with REST APIs and GraphQL",
    title: "Python",
    src: ({ className }) => <BiLogoPython className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: (
      <p>
        Primary backend language for developing Django-based systems in
        professional environments. Experience includes REST API development,
        GraphQL implementation, and creating admin interfaces with PostgreSQL
        data layer.
      </p>
    ),
  },
  {
    description: "Cloud infrastructure management and application deployment",
    title: "AWS",
    src: ({ className }) => <FaAws className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: (
      <p>
        Professional experience with cloud infrastructure management and
        application deployment across multiple AWS services. Proficient in
        container orchestration (ECS, Fargate, EKS), compute management (EC2),
        security services (IAM, Secrets Manager), and Infrastructure as Code
        using CDK and CloudFormation.
      </p>
    ),
  },
  {
    description:
      "Primary database with advanced SQL and PostgreSQL-specific features",
    title: "PostgreSQL",
    src: ({ className }) => <BiLogoPostgresql className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: (
      <p>
        Extensively used as the core database solution for diverse applications
        including web services, microservices, and distributed systems. Advanced
        experience with complex queries (CTEs), event-driven patterns using
        NOTIFY, PostgreSQL extensions (citext, vector search), and database
        maintenance including backup/recovery procedures.
      </p>
    ),
  },
  {
    description:
      "Daily OS with server management, containerization, and automation",
    title: "Linux",
    src: ({ className }) => <FaLinux className={className} />,
    ctaText: "GitHub",
    ctaLink: "https://github.com/PabloVarg",
    content: (
      <p>
        Daily driver and professional tool with deep hands-on experience.
        Managed production servers on AWS EC2, deployed containerized
        applications using Docker and Docker Compose, automated tasks with
        crontab scheduling, and developed shell scripts for various automation
        needs across Arch Linux and Debian systems.
      </p>
    ),
  },
];
