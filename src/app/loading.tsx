import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <main className="grid h-svh place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <Loader2 className="text-primary h-16 animate-spin" />
    </main>
  );
}
