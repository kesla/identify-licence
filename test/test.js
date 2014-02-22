var test = require('tap').test

	,	identifyLicence = require('../identify-licence')

test('with GPL text', function (t) {

	t.deepEqual(identifyLicence('blah GPL blah'), ['GPL'])
	t.deepEqual(identifyLicence('GPL blah'), ['GPL'])
	t.end()
})

test('with LGPL text', function (t) {

	t.deepEqual(identifyLicence('blah LGPL blah'), ['LGPL'])
	t.deepEqual(identifyLicence('LGPL blah'), ['LGPL'])
	t.end()
})

test('with GPLvx text', function (t) {

	t.deepEqual(identifyLicence('blah GPLv2 blah'), ['GPL'])
	t.deepEqual(identifyLicence('blah GPLv9 blah'), ['GPL'])
	t.deepEqual(identifyLicence('GPLv2 blah'), ['GPL'])
	t.end()
})

test('with MIT text', function (t) {

	t.deepEqual(identifyLicence('blah MIT blah'), ['MIT'])
	t.deepEqual(identifyLicence('MIT blah'), ['MIT'])
	t.end()
})

test('with (MIT) text', function (t) {

	t.deepEqual(identifyLicence('blah (MIT) blah'), ['MIT'])
	t.deepEqual(identifyLicence('(MIT) blah'), ['MIT'])
	t.end()
})

test('with MPL text', function (t) {
	t.deepEqual(identifyLicence('blah MPL blah'), ['MPL'])
	t.deepEqual(identifyLicence('MPL blah'), ['MPL'])
	t.end()
})

test('with Apache License text', function (t) {
	t.deepEqual(identifyLicence('blah Apache\nLicense blah'), ['Apache'])
	t.deepEqual(identifyLicence('Apache\nLicense blah'), ['Apache'])
	t.end()
})

test('with DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE text', function (t) {
	t.deepEqual(identifyLicence('blah DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE blah'), ['WTFPL'])
	t.deepEqual(identifyLicence('DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE blah'), ['WTFPL'])
	t.deepEqual(identifyLicence('dO WHAT the fUck you want tO PUBLIC licensE blah'), ['WTFPL'])
	t.deepEqual(identifyLicence('blah DO WHAT THE FUCK YOU WANT TO PUBLIC LICENCE blah'), ['WTFPL'])
	t.end()
})

test('with ISC text', function (t) {

	t.deepEqual(identifyLicence('blah ISC blah'), ['ISC'])
	t.deepEqual(identifyLicence('ISC blah'), ['ISC'])
	t.end()
})

test('with Eclipse Public License text', function (t) {

	t.test('in full', function (t) {

		t.deepEqual(identifyLicence('blah EPL blah'), ['Eclipse Public License'])
		t.end()
	})

	t.test('in abbreviation', function (t) {

		t.deepEqual(identifyLicence('blah EPL blah'), ['Eclipse Public License'])
		t.deepEqual(identifyLicence('blah EPL-1.0 blah'), ['Eclipse Public License'])
		t.deepEqual(identifyLicence('EPL blah'), ['Eclipse Public License'])
		t.deepEqual(identifyLicence('EPL-1.0 blah'), ['Eclipse Public License'])
		t.end()
	})

	t.end()
})

test('with BSD text', function (t) {

	t.deepEqual(identifyLicence('blah BSD blah'), ['BSD'])
	t.deepEqual(identifyLicence('BSD blah'), ['BSD'])
	t.end()
})

test('with dual license, e.g. GPL & MIT text', function (t) {

	t.deepEqual(identifyLicence('blah MIT blah\n\ncats GPL cats'), ['GPL', 'MIT'])
	t.end()
})
