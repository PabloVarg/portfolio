"use client";

import { ExpandableCard } from "@/components/Cards/ExpandableCards";
import { SiEtcd } from "react-icons/si";
import { FaTasks, FaServer } from "react-icons/fa";
import { GrConfigure } from "react-icons/gr";
import { SlGraph } from "react-icons/sl";
import { PiGraph } from "react-icons/pi";
import { twMerge } from "tailwind-merge";

export const projectCards: ExpandableCard[] = [
  {
    description: "Raft based distributed key value store in Go",
    title: "Distributed key value store",
    src: ({ className }) => (
      <SiEtcd className={twMerge(className, "text-wood")} />
    ),
    ctaText: "Project on GitHub",
    ctaLink: "https://github.com/PabloVarg/distributed-key-value-store",
    content: (
      <p>
        This project implements a distributed key-value store in Go, utilizing
        etcd&apos;s Raft algorithm for consensus and fault tolerance. The system
        supports CRUD operations, leader election, and log replication across
        nodes to ensure high availability and consistency in a distributed
        environment.
      </p>
    ),
  },
  {
    description: "Distributed task scheduled written in Go",
    title: "Distributed taks scheduled",
    src: ({ className }) => (
      <FaTasks className={twMerge(className, "text-wood")} />
    ),
    ctaText: "Project on GitHub",
    ctaLink: "https://github.com/PabloVarg/distributed-task-scheduler",
    content: (
      <p>
        Distributed task scheduler that helps you efficiently manage and
        distribute tasks across a cluster of worker nodes. The scheduler
        supports two primary modes of worker discovery Heartbeat discovery and
        through external load balancer
      </p>
    ),
  },
  {
    description: "Kubernetes homelab with K3S and Grafana",
    title: "Kubernetes homelab",
    src: ({ className }) => (
      <FaServer className={twMerge(className, "text-wood")} />
    ),
    ctaText: "Project on GitHub",
    ctaLink: "https://github.com/PabloVarg/k8s-homelab",
    content: (
      <p>
        This project sets up a Kubernetes (k3s) homelab environment, enabling
        you to experiment with container orchestration and learn
        production-grade cluster management. The homelab is designed for
        self-hosting applications and understanding Kubernetes internals in a
        controlled environment
      </p>
    ),
  },
  {
    description: "Dotfiles to thrive on my day to day on Linux",
    title: "Dotfiles",
    src: ({ className }) => (
      <GrConfigure className={twMerge(className, "text-wood")} />
    ),
    ctaText: "Project on GitHub",
    ctaLink: "https://github.com/PabloVarg/dotfiles",
    content: (
      <p>
        This project contains the configuration files (dotfiles) I use to
        personalize and customize my development environment across different
        machines using Arch Linux
      </p>
    ),
  },
  {
    description: "Gradient Descent algorithm in Python",
    title: "Gradient Descent",
    src: ({ className }) => (
      <SlGraph className={twMerge(className, "text-wood")} />
    ),
    ctaText: "Project on GitHub",
    ctaLink: "https://github.com/Pabloitl/ai-gradient-descent",
    content: (
      <p>
        This project contains the gradient descent algorithm written in python,
        using SymPy
      </p>
    ),
  },
  {
    description: "Various automata manipulation operations written in Java",
    title: "Automata Manipulations",
    src: ({ className }) => (
      <PiGraph className={twMerge(className, "text-wood")} />
    ),
    ctaText: "Project on GitHub",
    ctaLink: "https://github.com/Pabloitl/automatons-automata",
    content: (
      <p>
        This project contains various algorithms to manipulate automatas, the
        operations in this project are equivalence tests between two automatas,
        minimization of an automata and builder for automatas.
      </p>
    ),
  },
];
