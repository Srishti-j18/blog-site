// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = 'Srishti\'s Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export function withBase(path = '') {
	const base = import.meta.env.BASE_URL;
	const normalizedBase = base.endsWith('/') ? base : `${base}/`;
	const normalizedPath = path.replace(/^\/+/, '');

	return normalizedPath ? `${normalizedBase}${normalizedPath}` : normalizedBase;
}
