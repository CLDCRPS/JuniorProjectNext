const links = [
	{
		_id: 'link_1',
		icon: {
			path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png',
			width: 76
		},
		gradient: {
			from: '#FEFEFE',
			to: '#00bbd5'
		},
		link: 'https://www.facebook.com/',
		title: 'My Facebook'
	},
	{
		_id: 'link_2',
		icon: {
			path: 'https://www.logo.wine/a/logo/Instagram/Instagram-Wordmark-Logo.wine.svg',
			width: 115
		},
		gradient: {
			from: '#fc5dff',
			to: '#FE4248'
		},
		link: 'https://www.instagram.com/',
		title: 'Instagram',
		isImportant: true
	},
	{
		_id: 'link_3',
		icon: {
			path: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg',
			width: 80
		},
		gradient: {
			from: '#010101',
			to: '#9F9F9F'
		},
		link: 'https://github.com/',
		title: 'GitHub'
	},
	{
		_id: 'link_4',
		icon: {
			path: 'https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Icon-Logo.wine.svg',
			width: 80
		},
		gradient: {
			from: '#76acfd',
			to: '#6ed0ff'
		},
		link: 'https://www.linkedin.com/',
		title: 'LinkedIn'
	},
	{
		_id: 'link_9',
		icon: {
			path: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/2560px-YouTube_full-color_icon_%282017%29.svg.png',
			width: 80
		},
		gradient: {
			from: '#CA0107',
			to: '#D94A4F'
		},
		link: 'https://www.youtube.com',
		title: 'Youtube'
	},
	{
		_id: 'link_10',
		icon: {
			path: 'https://static.cdnlogo.com/logos/s/89/spotify.svg',
			width: 80
		},
		gradient: {
			from: '#4DAB25',
			to: '#1D450C'
		},
		link: 'https://open.spotify.com/',
		title: 'Spotify'
	}
]

export default function handler(req, res) {
	res.status(200).json(links)
}
