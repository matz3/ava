import test from '@ava/test';

import {fixture} from '../helpers/exec.js';

test('running 50 tests in a child process works as expected', async t => {
	const result = await fixture(['--no-worker-threads']);
	t.is(result.stats.passed.length, 50);
});
