import Image from "next/image";
import Link from "next/link";

export const companies = [
  {
    name: "TecNM",
    content: (
      <Link target="_blank" href="https://www.tecnm.mx/">
        <Image
          src="/images/companies/tecnm.webp"
          alt="TecNM"
          width={250}
          height={50}
        />
      </Link>
    ),
  },
  {
    name: "Rocktech",
    content: (
      <Link target="_blank" href="#">
        <Image
          src="/images/companies/rocktech.webp"
          alt="Rocktech"
          width={250}
          height={50}
        />
      </Link>
    ),
  },
  {
    name: "BB",
    content: (
      <Link target="_blank" href="https://www.bb.com.mx">
        <Image
          src="/images/companies/bajio.webp"
          alt="Banco del Bajio"
          width={250}
          height={50}
        />
      </Link>
    ),
  },
  {
    name: "Alluxi",
    content: (
      <Link target="_blank" href="https://www.alluxi.com/">
        <Image
          src="/images/companies/alluxi.webp"
          alt="Alluxi"
          width={250}
          height={50}
        />
      </Link>
    ),
  },
];
