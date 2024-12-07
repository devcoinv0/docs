// @ts-nocheck
import Link from "next/link";

import { PageRoutes } from "@/lib/pageroutes";
import { Button } from "@repo/ui/button";

export default function Home() {
  return (
    <div className="min-h-[86.5vh] flex flex-col justify-center items-center text-center px-2 py-8">
      <h1 className="text-4xl font-bold mb-4 sm:text-7xl">
        Devcoin[1]
      </h1>
      <p className="max-w-[600px] text-foreground mb-8 sm:text-base">
        Docs for Devcoin[1]
      </p>
      <div className="flex items-center gap-5">
        <Link href={`/docs${PageRoutes[0]?.href}`}>
          <Button>Read Docs</Button>
        </Link>
      </div>
    </div>
  );
}