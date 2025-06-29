import MainButton from "@/components/Buttons/MainButton";
import { ExpandableCards } from "@/components/Cards/ExpandableCards";
import { OverlappedCards } from "@/components/Cards/OverlappedCards";
import { InfiniteMovingCards } from "@/components/Carousels/InfiniteScroll";
import MeteorsHero from "@/components/MeteorsHero/meteors";
import FlipWords from "@/components/Text/FlipText";
import { TextGenerateEffect } from "@/components/Text/GenerateText";
import { Timeline } from "@/components/Timeline/Timeline";
import { academicHighlights } from "@/constants/academy/academy";
import { companies } from "@/constants/companies/companies";
import { projectCards } from "@/constants/projects/projects";
import { technologyCards } from "@/constants/technologies/cards";
import { timelineItems } from "@/constants/timeline/timeline";
import Image from "next/image";

import { GrDocumentDownload } from "react-icons/gr";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
      <AboutMe />
      <Technologies />
      <Academy />
      <Projects />
      <Experience />
    </main>
  );
}

function Hero() {
  return (
    <MeteorsHero>
      <Image
        className="mb-4 rounded-3xl border-gold transition-shadow"
        src="/images/photos/avatar-hero.webp"
        alt="Pablo Vargas Bermudez"
        width={640 * 0.5}
        height={640 * 0.5}
      />

      <TextGenerateEffect
        className="mb-0"
        fontClasses="text-4xl"
        words="Pablo Vargas Bermúdez"
      />
      <TextGenerateEffect
        fontClasses="text-base text-wood"
        words="Software Backend Engineer"
      />

      <MainButton className="mt-8">
        <a href={"/files/cv.pdf"} download={true}>
          <span className="flex items-center justify-evenly gap-4">
            <span className="pr-4">Resume</span>
            <GrDocumentDownload />
          </span>
        </a>
      </MainButton>
    </MeteorsHero>
  );
}

function Companies() {
  return (
    <div className="bg-light-gold">
      <div className="grid place-items-center">
        <InfiniteMovingCards items={companies} />
      </div>
    </div>
  );
}

function Experience() {
  return (
    <Timeline
      title="My Experience"
      description="A journey through my professional and academic milestones, highlighting key projects, roles, and achievements that have shaped my growth as a backend-focused software engineer."
      data={timelineItems}
    />
  );
}

function AboutMe() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 place-items-center gap-8 py-16">
      <Image
        className="mb-4 rounded-3xl border-gold transition-shadow"
        src="/images/photos/avatar-suit.webp"
        alt="Pablo Vargas Bermudez"
        width={640 * 0.5}
        height={640 * 0.5}
      />

      <div className="text-lg">
        <h1 className="text-2xl underline decoration-light-gold mb-4">
          <span className="text-light-gold">P</span>
          ablo <span className="text-light-gold">Var</span>
          gas <span className="text-light-gold">Ber</span>
          mudez <span className="text-light-gold">(pvarber)</span>
        </h1>

        <p className="mb-4">
          I&apos;m a software engineer specializing in backend development, with
          a strong focus on <span className="text-light-gold">Go</span> and{" "}
          <span className="text-light-gold">Python</span>.
        </p>
        <p className="mb-8">
          I graduated with honors from "Tecnológico Nacional de México" (TecNM)
          with a Bachelor&apos;s degree in Computer Science{" "}
          <span className="text-light-gold">top of my generation</span>.
        </p>

        <span className="text-3xl overflow-hidden">
          I&apos;m deeply passionate about:
          <br />
          <FlipWords
            words={[
              "Algorithms",
              "Distributed Systems",
              "Backend",
              "Microservices",
            ]}
            className="text-light-gold"
          />
        </span>
      </div>
    </div>
  );
}

function Technologies() {
  return <ExpandableCards cards={technologyCards} />;
}

function Academy() {
  return <OverlappedCards testimonials={academicHighlights} />;
}

function Projects() {
  return (
    <>
      <h3 className="text-center text-3xl text-wood mb-2 font-bold">
        Highlighted projects
      </h3>
      <ExpandableCards cards={projectCards} />
    </>
  );
}
