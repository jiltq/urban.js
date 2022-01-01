const urban = require('./src/index.js');
const { random } = require('./src/index.js');

(async () => {
	const [answer] = await urban.define('javascript');
	console.log(answer);

    const e = random(await urban.define('javascript'));
    console.log(e)
})();