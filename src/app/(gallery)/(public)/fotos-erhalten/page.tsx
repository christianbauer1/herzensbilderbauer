import GalleryUmbauMessage from "../../_components/gallery-umbau-message";

export const metadata = {
  title: "Deine Bilder erhalten | Fotograf Ansbach",
  description:
    "Hier könnt ihr eure Bilder ansehen und herunterladen. Derzeit im Umbau.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  return (
    <main>
      <GalleryUmbauMessage />
    </main>
  );
}
