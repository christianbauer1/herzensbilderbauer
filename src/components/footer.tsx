import Link from "next/link";
import { BottomColorblur, TopColorblur } from "@/components/colorblur";
import { InstagramIcon } from "@/components/icons";
import {
  EMAIL_ADDRESS,
  MENU_NAVIGATION_ITEMS,
  PHONE_NUMBER,
  PHONE_NUMBER_WRITTEN,
} from "@/lib/constants";
import { Separator } from "./ui/separator";
import Image from "next/image";
import GoogleMapsEmbed from "./google-maps-embed";

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
          <GoogleMapsEmbed />
        </div>

        <p className="mt-10 text-center text-xs text-accent-foreground">
          &copy; {currentYear} Herzensbilderbauer. All rights reserved.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-8 md:flex-row">
          <p className="text-center text-xs text-accent-foreground">
            Jüdtstr.24, 91522 Ansbach
          </p>

          <p className="text-center text-xs font-bold text-accent-foreground underline">
            <Link href={EMAIL_ADDRESS}>{EMAIL_ADDRESS}</Link>
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
