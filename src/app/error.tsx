"use client";

import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

export default function error() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8">
      Da ging wohl etwas schief!
      <Button asChild>
        <Link href="/">Zurück zur Homepage</Link>
      </Button>
    </div>
  );
}
