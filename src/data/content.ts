export interface Project {
	no: string;
	title: string;
	desc: string;
	role: string;
	year: string;
	plate: string;
	alt: string;
}

export const projects: Project[] = [
	{
		no: "01",
		title: "Arus Balik: Dashboard Operasional",
		desc: "Placeholder: ringkasan satu kalimat tentang masalah, peran, dan hasil akan tinggal di sini. Ganti dengan studi kasus asli.",
		role: "Peran: placeholder",
		year: "Tahun: 20XX",
		plate: "/plates/proyek-01.svg",
		alt: "Sampul geometris: rel kalibrasi dengan garis emisi",
	},
	{
		no: "02",
		title: "Tabung Angka: Visualisasi Metrik",
		desc: "Placeholder: apa yang diukur, untuk siapa, dan keputusan apa yang dibantu. Ganti dengan proyek nyata.",
		role: "Peran: placeholder",
		year: "Tahun: 20XX",
		plate: "/plates/proyek-02.svg",
		alt: "Sampul geometris: tiga bank digit",
	},
	{
		no: "03",
		title: "Rangkaian Tanda: Identitas Interaktif",
		desc: "Placeholder: konteks brand, batasan, dan momen interaksinya. Ganti dengan karya asli.",
		role: "Peran: placeholder",
		year: "Tahun: 20XX",
		plate: "/plates/proyek-03.svg",
		alt: "Sampul geometris: satu garis lengkung menyala",
	},
	{
		no: "04",
		title: "Laut Malam: Kanvas Partikel",
		desc: "Placeholder: teknik yang dipakai dan batas performanya. Ganti dengan eksperimen nyata.",
		role: "Peran: placeholder",
		year: "Tahun: 20XX",
		plate: "/plates/proyek-04.svg",
		alt: "Sampul geometris: garis kontur gelombang",
	},
	{
		no: "05",
		title: "Dua Tinta: Arsip Zine Digital",
		desc: "Placeholder: arsip apa, siapa pembacanya, bagaimana dinavigasi. Ganti dengan proyek asli.",
		role: "Peran: placeholder",
		year: "Tahun: 20XX",
		plate: "/plates/proyek-05.svg",
		alt: "Sampul geometris: dua blok tinta bertumpuk",
	},
];

export const stack: string[] = [
	"Astro",
	"TypeScript",
	"Tailwind CSS",
	"Node.js",
	"Git",
	"Aksesibilitas (WCAG)",
];
