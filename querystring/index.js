const querystring = require('querystring')


console.log(querystring.stringify(querystring.parse('a=1&b=2&b=3')))