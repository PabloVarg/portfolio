import MainButton from "@/components/Buttons/MainButton";
import { InfiniteMovingCards } from "@/components/Carousels/InfiniteScroll";
import MeteorsHero from "@/components/MeteorsHero/meteors";
import { TextGenerateEffect } from "@/components/Text/GenerateText";
import { Timeline } from "@/components/Timeline/Timeline";
import { companies } from "@/constants/companies/companies";
import { timelineItems } from "@/constants/timeline/timeline";
import Image from "next/image";

import { GrDocumentDownload } from "react-icons/gr";

export default function Home() {
  return (
    <main>
      <Hero />
      <Companies />
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
        <span className="flex items-center justify-evenly gap-4">
          <span className="pr-4">Resume</span>
          <GrDocumentDownload />
        </span>
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
