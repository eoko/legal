const util = require('util');

module.exports = (object) => util.inspect(object, false, null);