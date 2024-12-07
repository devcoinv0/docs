import Link from "next/link";

import {ChevronLeft, ChevronRight} from "@repo/icons";
import {getPreviousNext} from "@/lib/utils";

export default function Pagination({pathname}: {pathname: string}) {
	const res = getPreviousNext(pathname);

	return (
		<div className="flex items-center justify-between sm:py-7 py-5">
			<div>
				{res.prev && (
					<Link
						className="inline-flex items-center justify-center h-9 px-4 py-2 ml-auto whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !no-underline"
						href={`/docs${res.prev.href}`}
					>
						<ChevronLeft className="w-[1rem] h-[1rem] mr-1" />
						<p>{res.prev.title}</p>
					</Link>
				)}
			</div>
			<div>
				{res.next && (
					<Link
						className="inline-flex items-center justify-center h-9 px-4 py-2 ml-auto whitespace-nowrap rounded-md text-sm font-medium border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 !no-underline"
						href={`/docs${res.next.href}`}
					>
						<p>{res.next.title}</p>
						<ChevronRight className="w-[1rem] h-[1rem] ml-1" />
					</Link>
				)}
			</div>
		</div>
	);
}
