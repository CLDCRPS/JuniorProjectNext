const me = {
	siteName: 'Blog',
	avatar: '/avatar.jpeg',
	description:
		'<p>Hello, my name is Harry</p>' +
		'<p>I live in Revachol and I work for the police</p>' +
		'<p>I am a little tired</p>' 
}

export default function handler(req, res) {
	res.status(200).json(me)
}
