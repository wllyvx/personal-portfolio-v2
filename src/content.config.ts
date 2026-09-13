import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const proyek = defineCollection({
	loader: glob({ pattern: "**/*.md", base: "./src/content/proyek" }),
	schema: ({ image }) =>
		z.object({
			title: z.string().min(1, "Proyek membutuhkan judul."),
			summary: z.string().min(1, "Proyek membutuhkan ringkasan."),
			role: z.string().min(1, "Proyek membutuhkan peran."),
			year: z.string().min(1, "Proyek membutuhkan tahun."),
			topics: z.array(z.string()).optional(),
			cover: image().refine((img) => img !== undefined, {
				message: "Proyek membutuhkan Sampul.",
			}),
			coverAlt: z.string().min(1, "Proyek membutuhkan teks alternatif Sampul."),
			demoUrl: z.string().url("Tautan demo harus URL valid.").optional(),
			repoUrl: z.string().url("Tautan repo harus URL valid.").optional(),
			draft: z.boolean({
				required_error: "Proyek membutuhkan penanda Draft.",
				invalid_type_error: "Penanda Draft harus true atau false.",
			}),
			order: z.number("Proyek membutuhkan angka Urutan."),
		}),
});

export const collections = { proyek };
