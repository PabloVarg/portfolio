import Image from "next/image";
import { TimelineEntry } from "@/components/Timeline/Timeline";
import Link from "next/link";

export const timelineItems: TimelineEntry[] = [
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        voluptate, officia quasi reiciendis similique suscipit cupiditate
        reprehenderit a harum iste. Accusamus accusantium itaque doloremque
        quaerat blanditiis recusandae delectus vero consequatur?
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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
        voluptate, officia quasi reiciendis similique suscipit cupiditate
        reprehenderit a harum iste. Accusamus accusantium itaque doloremque
        quaerat blanditiis recusandae delectus vero consequatur?
      </div>
    ),
  },
];
