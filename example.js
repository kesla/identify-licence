var identifyLicence = require('./identify-licence')
  , thisLicence = require('fs').readFileSync('./LICENCE', 'utf8')
  , multipleLicenses = 'blah MIT blah\n\ncats GPL cats'

console.log('This project is', identifyLicence(thisLicence))
console.log('Dual licences works to:', identifyLicence(multipleLicenses))