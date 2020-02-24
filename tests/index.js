const test = require('ava');
const HotThread = require('../index')

test('result', async t => {
	const ht = new HotThread()
    let data = (await ht.get()).data
    t.true(Boolean(data.result));
});

test('get cursor', async t => {
    const ht = new HotThread()
    let data = (await ht.get()).data
    t.not(ht.get_cursor, null);
});