import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid h-svh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-primary text-base font-semibold">404</p>
        <h1 className="text-primary text-5xl font-black tracking-tighter md:text-6xl">
          Seite nicht gefunden
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry ich konnte die Seite die ihr sucht nicht finden.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button asChild>
            <Link href="/">Zurück zur Homepage</Link>
          </Button>
          <Button asChild variant={"link"}>
            <Link href="/termin-vereinbaren">Kontakt</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
