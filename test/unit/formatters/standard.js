/**
 * @description Unit tests standard formatter
 */

'use strict';


var standardFormat = require('../../../lib/formatters/standard.js'),
	should = require('should'),
	Module = require('../../../lib/module.js'),
	PackageSource = require('../../../lib/package-source'),
	FileSource = require('../../../lib/file-source'),
	input = [],
	mod,
	path = require('path'),
	expected;

// input module
mod = new Module('test@1.0.0', 'test', '1.0.0', '/dir/test');
mod.licenseSources.package.sources.push(new PackageSource('Apache'));
mod.licenseSources.license.sources.push(new FileSource(path.join(__dirname, '../../fixtures/MIT')));
input.push(mod);

// expected reponse
expected = 'test@1.0.0 [license(s): Apache, MIT]\n'
	+ '├── package.json:  Apache\n'
	+ '└── license files: MIT\n'


describe('standard formatter', function () {

	describe('render method', function () {

		it('should return a record in the expected format', function (done) {

			mod.licenseSources.license.sources[0].read(function (err) {
				if (err) {
					throw err;
				}

				standardFormat.render(input, function (err, output) {

					if (err)
					{
						throw err;
					}

					output.should.be.equal(expected);
					done();
				});
			});

		});

	});

});
