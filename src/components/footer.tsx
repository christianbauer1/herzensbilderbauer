import Link from "next/link";
import { BottomColorblur, TopColorblur } from "@/components/colorblur";
import { InstagramIcon } from "@/components/icons";
import {
  MENU_NAVIGATION_ITEMS,
  PHONE_NUMBER,
  PHONE_NUMBER_WRITTEN,
} from "@/lib/constants";
import { Separator } from "./ui/separator";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden bg-[#E6DDD6]"
      aria-labelledby="footer-heading"
    >
      <TopColorblur />
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 font-bold lg:flex lg:justify-center lg:space-x-12"
          aria-label="Footer"
        >
          {MENU_NAVIGATION_ITEMS.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm hover:text-primary">
                {item.name}
              </a>
            </div>
          ))}

          <div className="pb-6">
            <a href={"/impressum"} className="text-sm hover:text-primary">
              Impressum
            </a>
          </div>

          <div className="pb-6">
            <a href={"/datenschutz"} className="text-sm hover:text-primary">
              Datenschutz
            </a>
          </div>
        </nav>

        <div className="mt-10 flex items-center justify-center space-x-10">
          {navigation.social.map((item) => (
            <Link
              target="_blank"
              key={item.name}
              href={item.href}
              className="hover:text-primary"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon />
            </Link>
          ))}

          <div className="hidden h-12 w-0.5 bg-neutral-300 md:flex"></div>

          <div className="hidden flex-row gap-8 md:flex">
            {["1", "7", "6", "4"].map((i, idx) => (
              <div key={idx} className="h-20 w-20">
                <Image
                  src={`/images/main-portfolio/${i}.jpg`}
                  height={100}
                  width={100}
                  alt="Instagram Vorschaubild"
                  className="h-full w-full rounded-md object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-12 w-full">
          <iframe
            className="h-64 w-full"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.033830972777!2d10.608484177072077!3d49.261145372278165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798b976d1f1b993%3A0xdd274c0d711fad0e!2sHerzensbilder%20Bauer!5e1!3m2!1sde!2sde!4v1731936603895!5m2!1sde!2sde"
            width="600"
            height="450"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p className="mt-10 text-center text-xs text-accent-foreground">
          &copy; {currentYear} Herzensbilderbauer. All rights reserved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
          <p className="text-center text-xs text-accent-foreground">
            Jüdtstr.24, 91522 Ansbach
          </p>

          <p className="text-center text-xs font-bold text-accent-foreground underline">
            <Link href={"mailto:hey@herzensbilderbauer.de"}>
              hey@herzensbilderbauer.de
            </Link>
          </p>

          <p className="text-center text-xs font-bold text-accent-foreground underline">
            <Link href={`tel:${PHONE_NUMBER}`}>{PHONE_NUMBER_WRITTEN}</Link>
          </p>
        </div>
      </div>
      <BottomColorblur />
    </footer>
  );
}

const navigation = {
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/herzensbilder_bauer/",
      icon: () => <InstagramIcon className="h-12" />,
    },
  ],
};
