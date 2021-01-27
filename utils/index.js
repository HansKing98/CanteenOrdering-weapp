const color = ['#3688FF', '#feca57', '#ff6b6b', '#a55eea', '#cf6a87', '#61b756']

function getHash(str) {
	let hash = 0;
	let char = 0;
	if (str.length == 0) {
		return hash;
	}

	for (let i = 0; i < str.length; i++) {
		char = str.charCodeAt(i);
		hash = ((hash << 5) - hash) + char;
		hash = hash & hash; // Convert to 32bit integer
	}
	return hash % 6;
}

function getAvatar(name) {
	let api = "https://www.dute.org/imgplaceholder"
	let avatarUrl = api + '/200x260?bgcolor=F8F8F8' + '&forecolor=' + color[getHash(name)].slice(1) + '&text=' + name
	// console.log('avatarUrl', avatarUrl)
	return avatarUrl
}

function getShitangAvatar(name) {
	name = name.slice(-3, -1)
	let api = "https://www.dute.org/imgplaceholder"
	let avatarUrl = api + '/200x260?bgcolor=F8F8F8' + '&forecolor=' + color[getHash(name.slice(0, 1))].slice(1) +
		'&text=' + name
	// console.log('avatarUrl', avatarUrl)
	return avatarUrl
}

export {
	getAvatar,
	getShitangAvatar
}
