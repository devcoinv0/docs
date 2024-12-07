import Link from "next/link";

export function Logo() {
    return (
      <Link href="/" className="flex items-center gap-2.5">
        <h1 className="text-md font-semibold">Docs</h1>
      </Link>
    );
}