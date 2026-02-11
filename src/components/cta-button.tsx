import Link from "next/link";
import { CursorArrowRaysIcon } from "@/components/icons";
import { Button } from "@/components/ui/button";

export default function CtaButton({ className }: { className?: string }) {
  return (
    <Button asChild className={`self-center ${className}`}>
      <Link href="/termin-vereinbaren">
        Zum kostenlosen Vorgespräch <CursorArrowRaysIcon className="ml-2 h-5" />
      </Link>
    </Button>
  );
}
