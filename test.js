'use strict';

const assert = require('assert');

test('Test simple power assert failure', () => {
	let x = 'abc';
	let y = 'zyz';

	assert(x === y);
});
