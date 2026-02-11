import Section from "@/components/section";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const GALLERY_UMBAU_MESSAGE =
  "Die Herzensbilder Cloud befindet sich aktuell im Umbau. Bald findest du deine Bilder wieder hier. Bei Fragen kannst du mich gern kontaktieren.";

export default function GalleryUmbauMessage() {
  return (
    <Section>
      <Card className="mx-auto max-w-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            Galerie derzeit nicht verfügbar
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-center text-muted-foreground">
            {GALLERY_UMBAU_MESSAGE}
          </p>
          <p className="text-center">
            <Link
              href="/termin-vereinbaren"
              className="font-semibold text-primary underline underline-offset-4"
            >
              Kontakt aufnehmen
            </Link>
          </p>
        </CardContent>
      </Card>
    </Section>
  );
}
