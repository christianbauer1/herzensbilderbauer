import GalleryUmbauMessage from "../../_components/gallery-umbau-message";

export const metadata = {
  title: "Bildergallerie freischalten",
  description: "Hier könnt ihr eure Bildergallerie freischalten. Derzeit im Umbau.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function Page() {
  return (
    <main>
      <GalleryUmbauMessage />
    </main>
  );
}
