var test = require('tap').test

	,	licenseFind = require('../identify-licence')

test('with GPL text', function (t) {

	t.deepEqual(licenseFind('blah GPL blah'), ['GPL'])
	t.deepEqual(licenseFind('GPL blah'), ['GPL'])
	t.end()
})

test('with LGPL text', function (t) {

	t.deepEqual(licenseFind('blah LGPL blah'), ['LGPL'])
	t.deepEqual(licenseFind('LGPL blah'), ['LGPL'])
	t.end()
})

test('with GPLvx text', function (t) {

	t.deepEqual(licenseFind('blah GPLv2 blah'), ['GPL'])
	t.deepEqual(licenseFind('blah GPLv9 blah'), ['GPL'])
	t.deepEqual(licenseFind('GPLv2 blah'), ['GPL'])
	t.end()
})

test('with MIT text', function (t) {

	t.deepEqual(licenseFind('blah MIT blah'), ['MIT'])
	t.deepEqual(licenseFind('MIT blah'), ['MIT'])
	t.end()
})

test('with (MIT) text', function (t) {

	t.deepEqual(licenseFind('blah (MIT) blah'), ['MIT'])
	t.deepEqual(licenseFind('(MIT) blah'), ['MIT'])
	t.end()
})

test('with MPL text', function (t) {
	t.deepEqual(licenseFind('blah MPL blah'), ['MPL'])
	t.deepEqual(licenseFind('MPL blah'), ['MPL'])
	t.end()
})

test('with Apache License text', function (t) {
	t.deepEqual(licenseFind('blah Apache\nLicense blah'), ['Apache'])
	t.deepEqual(licenseFind('Apache\nLicense blah'), ['Apache'])
	t.end()
})

test('with DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE text', function (t) {
	t.deepEqual(licenseFind('blah DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE blah'), ['WTFPL'])
	t.deepEqual(licenseFind('DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE blah'), ['WTFPL'])
	t.deepEqual(licenseFind('dO WHAT the fUck you want tO PUBLIC licensE blah'), ['WTFPL'])
	t.deepEqual(licenseFind('blah DO WHAT THE FUCK YOU WANT TO PUBLIC LICENCE blah'), ['WTFPL'])
	t.end()
})

test('with ISC text', function (t) {

	t.deepEqual(licenseFind('blah ISC blah'), ['ISC'])
	t.deepEqual(licenseFind('ISC blah'), ['ISC'])
	t.end()
})

test('with Eclipse Public License text', function (t) {

	t.test('in full', function (t) {

		t.deepEqual(licenseFind('blah EPL blah'), ['Eclipse Public License'])
		t.end()
	})

	t.test('in abbreviation', function (t) {

		t.deepEqual(licenseFind('blah EPL blah'), ['Eclipse Public License'])
		t.deepEqual(licenseFind('blah EPL-1.0 blah'), ['Eclipse Public License'])
		t.deepEqual(licenseFind('EPL blah'), ['Eclipse Public License'])
		t.deepEqual(licenseFind('EPL-1.0 blah'), ['Eclipse Public License'])
		t.end()
	})

	t.end()
})

test('with BSD text', function (t) {

	t.deepEqual(licenseFind('blah BSD blah'), ['BSD'])
	t.deepEqual(licenseFind('BSD blah'), ['BSD'])
	t.end()
})

test('with dual license, e.g. GPL & MIT text', function (t) {

	t.deepEqual(licenseFind('blah MIT blah\n\ncats GPL cats'), ['GPL', 'MIT'])
	t.end()
})
