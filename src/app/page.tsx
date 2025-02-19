import MainButton from "@/components/Buttons/MainButton";
import { InfiniteMovingCards } from "@/components/Carousels/InfiniteScroll";
import MeteorsHero from "@/components/MeteorsHero/meteors";
import { TextGenerateEffect } from "@/components/Text/GenerateText";
import { companies } from "@/constants/companies/companies";
import Image from "next/image";

import { GrDocumentDownload } from "react-icons/gr";

export default function Home() {
  return (
    <main>
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
      <div className="bg-light-gold">
        <div className="grid place-items-center">
          <InfiniteMovingCards items={companies} />
        </div>
      </div>
    </main>
  );
}
