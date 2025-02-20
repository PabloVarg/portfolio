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
  {
    title: (
      <Link target="_blank" href="https://www.tecnm.mx/">
        <Image
          src="/images/companies/tecnm.webp"
          alt="TecNM"
          width={250}
          height={50}
        />
      </Link>
    ),
    content: (
      <div>
        During my tenure at Tecnológico Nacional de México (TecNM), I focused on
        optimizing an application responsible for generating reports based on
        survey data collected from students to evaluate teachers&apos;
        performance. Utilizing my SQL expertise, I implemented optimizations
        within the application to enhance its performance. By fine-tuning SQL
        queries and database interactions, I was able to significantly improve
        the speed and efficiency of report generation. Working closely with the
        development team, I collaborated on identifying bottlenecks and
        implementing strategic improvements to ensure the application delivered
        accurate and timely reports. These optimizations not only streamlined
        the reporting process but also provided valuable insights into
        teachers&apos; performance and contributed to the overall improvement of
        educational quality. My experience at Tecnológico Nacional de México
        (TecNM) allowed me to apply my technical skills in a practical setting,
        optimize performance, and make a positive impact on the
        institution&apos;s evaluation processes.
      </div>
    ),
  },
];
