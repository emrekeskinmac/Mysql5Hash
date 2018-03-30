'use strict';
var crypto = require('crypto')

function fromHex(hex){
	
	var hex = hex.toString();
	var str = '';

	for (var i = 0; i < hex.length; i += 2)
		str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
	return str;
}

module.exports = function(pass) {
		const sha1 = crypto.createHash('sha1').update(pass).digest("hex");
		const sha2 = crypto.createHash('sha1').update(fromHex(sha1)).digest("hex");
		return '*'+sha2.toUpperCase()
};
