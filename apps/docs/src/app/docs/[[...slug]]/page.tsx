import {notFound} from "next/navigation";
import documents from "../../../../public/search-data/documents.json";
import ReactMarkdown from "react-markdown";
import PageBreadcrumb from "@/components/navigation/pagebreadcrumb";
import Pagination from "@/components/navigation/pagination";

type PageProps = {
	params: {slug: string[]};
};

export default async function Page({params: {slug = []}}: PageProps) {
	const pathName = slug.length ? `/${slug.join("/")}` : "/introduction";
	const document = documents.find((doc) => doc.slug === pathName);

	if (!document) {
		return notFound();
	}

	return (
		<div className="flex items-start gap-14 max-w-full mx-auto px-6">
			<div className="flex-[3] pt-10 max-w-3xl">
				<PageBreadcrumb paths={slug} />
				<article className="docs-content">
					<h1 className="text-3xl font-bold tracking-tight -mt-2">
						{document.title}
					</h1>
					{document.description && (
						<p className="-mt-4 text-base text-muted-foreground text-[16.5px]">
							{document.description}
						</p>
					)}
					<ReactMarkdown className="docs-content prose dark:prose-invert max-w-none">
						{document.content}
					</ReactMarkdown>
				</article>
				<Pagination pathname={pathName} />
			</div>
		</div>
	);
}

export function generateStaticParams() {
	return documents.map((doc) => ({
		slug: doc.slug.split("/").filter(Boolean),
	}));
}

export function generateMetadata({params: {slug = []}}: PageProps) {
	const pathName = slug.length ? `/${slug.join("/")}` : "/introduction";
	const document = documents.find((doc) => doc.slug === pathName);

	if (!document) return {};

	return {
		title: document.title,
		description: document.description,
	};
}
