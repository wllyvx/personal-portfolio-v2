/** Konstanta situs untuk SEO dan pratinjau sosial. */
export const SITE_NAME = "Willy Fajar Ramadhan";
export const SITE_DESCRIPTION =
	"Portfolio Willy Fajar Ramadhan, website developer. Edisi satu halaman: profil, proyek pilihan, dan kontak.";
export const SITE_LOCALE = "id_ID";
/** Gambar pratinjau bawaan bila halaman tidak punya gambar sendiri. */
export const DEFAULT_OG_IMAGE = "/hero-poster.svg";

/**
 * Jadikan path relatif-situs sebagai URL absolut bila origin diketahui
 * (Astro.site). Tanpa origin terkonfigurasi, kembalikan path apa adanya
 * agar tidak mengarang domain; isi `site` di astro.config.mjs saat deploy.
 */
export function absoluteUrl(site: URL | undefined, path: string): string {
	try {
		return new URL(path, site ?? undefined).href;
	} catch {
		return path;
	}
}
