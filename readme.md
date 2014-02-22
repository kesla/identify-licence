<!-- @@NLF-IGNORE@@ -->

# identify-licence

identify-licence is a node.js module to identify licences from strings of text

## Kudos

This basis from this project was extracted from the npm package nlf (https://www.npmjs.org/package/nlf)

### Example/Usage

```javascript
var identifyLicence = require('./identify-licence')
  , thisLicence = require('fs').readFileSync('./LICENCE', 'utf8')
  , multipleLicenses = 'blah MIT blah\n\ncats GPL cats'

console.log('This project is', identifyLicence(thisLicence))
console.log('Dual licences works to:', identifyLicence(multipleLicenses))
```

## License

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright (c) 2013 Ian Kelly, David Björklund

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

