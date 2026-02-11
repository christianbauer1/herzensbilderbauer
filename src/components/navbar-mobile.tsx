"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon, XIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MENU_NAVIGATION_ITEMS } from "@/lib/constants";

import { DownloadCloudIcon } from "lucide-react";
import { antic } from "@/fonts";

export default function NavbarMobile({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger className={className}>
        <div className="rounded-full bg-background p-3 shadow-lg">
          <Bars3Icon className="h-8" aria-hidden="true" />
        </div>
      </SheetTrigger>

      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden">Herzensbilder Menü</SheetTitle>
          <div className="flex justify-between pt-3">
            <SheetClose>
              <XIcon className="h-6 w-6" aria-hidden="true" />
            </SheetClose>
          </div>
        </SheetHeader>

        <ScrollArea className="h-full">
          <div className="flex flex-col items-center justify-center gap-8 pb-20 pt-8">
            {MENU_NAVIGATION_ITEMS.map((item, idx) => (
              <SheetClose asChild key={idx}>
                <Link
                  href={item.href}
                  className={`text-center font-mono text-4xl sm:text-5xl ${antic.variable} tracking-tight ${pathname === item.href && "text-primary underline decoration-primary decoration-2 underline-offset-8"}`}
                >
                  {item.name}
                </Link>
              </SheetClose>
            ))}

            <SheetClose asChild>
              <Button asChild>
                <Link href="/fotos-erhalten">
                  Deine Bilder herunterladen
                  <DownloadCloudIcon className="ml-2 h-5" />
                </Link>
              </Button>
            </SheetClose>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}
