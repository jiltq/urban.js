# urban.js
urban.js is a powerful Node.js module that allows you to easily interact with the Urban Dictionary API.

## example usage

to define "javascript":
```js
const urban = require('urban.js');

(async () => {
	const [answer] = await urban.define('javascript');
	console.log(answer);
})();
```

## example output

```js
{
	definition: 'A computer [programming language], provides a [source] of [endless suffering] for many poor middle-schoolers throughout the world (including myself).',
	permalink: 'http://javascript.urbanup.com/13778263',
	thumbs_up: 50,
	sound_urls: [],
	author: "stanley yelnats :')",
	word: 'javascript',
	defid: 13778263,
	current_vote: '',
	written_on: '2019-04-05T02:52:22.489Z',
	example: '"You have an [assignment] on javascript for [summer break]"',
	thumbs_down: 13
}
```
