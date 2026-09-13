import { getCollection, type CollectionEntry } from "astro:content";

export type ProyekEntry = CollectionEntry<"proyek">;

/** Slug URL Proyek: nama file tanpa ekstensi dan tanpa prefix angka. */
export function proyekSlug(entry: ProyekEntry): string {
	const withoutExt = entry.id.replace(/\.mdx?$/, "");
	const file = withoutExt.split("/").pop() ?? withoutExt;
	return file.replace(/^\d+[-_]+/, "");
}

/** Proyek non-Draft, diurutkan menaik berdasarkan Urutan. */
export async function getPublishedProyek(): Promise<ProyekEntry[]> {
	const entries = await getCollection("proyek", ({ data }) => !data.draft);
	return entries.sort((a, b) => a.data.order - b.data.order);
}
