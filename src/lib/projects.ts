export const projects = [
	{
		id: '113-dexter-rd-richmond-hill',
		title: '113 Dexter Rd, Richmond Hill',
		images: Array.from({ length: 51 }, (_, i) => `/projects/113-dexter-rd-richmond-hill/image-${String(i + 1).padStart(3, '0')}.jpg`)
	},
	{
		id: '36-honey-locust-vaughan',
		title: '36 Honey Locust, Vaughan',
		images: [
			'/projects/36-honey-locust-vaughan/image-001.heic',
			'/projects/36-honey-locust-vaughan/image-002.heic'
		]
	},
	{
		id: '36-kensington-dr-richmond-hill',
		title: '36 Kensington Dr, Richmond Hill',
		images: Array.from({ length: 52 }, (_, i) => {
			const num = String(i + 1).padStart(3, '0');
			const ext = i < 12 || (i >= 14 && i <= 27) || i >= 36 ? 'jpg' : 'heic';
			return `/projects/36-kensington-dr-richmond-hill/image-${num}.${ext}`;
		})
	},
	{
		id: 'assinck-mining-equipment-acton',
		title: 'Assinck Mining Equipment, Acton',
		images: Array.from({ length: 5 }, (_, i) => `/projects/assinck-mining-equipment-acton/image-${String(i + 1).padStart(3, '0')}.heic`)
	},
	{
		id: 'chinese-memorial-garden-richmond-hill',
		title: 'Chinese Memorial Garden, Richmond Hill',
		images: [
			'/projects/chinese-memorial-garden-richmond-hill/image-001.jpg',
			'/projects/chinese-memorial-garden-richmond-hill/image-002.jpg'
		]
	}
];