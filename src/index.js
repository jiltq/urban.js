const fetch = require('node-fetch');

module.exports = {
	async define(term) {
		const query = new URLSearchParams({ term });
		const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());
		return list;
	},
	random(array) {
		return array[Math.floor(Math.random() * array.length)];
	},
};