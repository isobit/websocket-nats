'use strict';

var crypto = window.crypto || window.msCrypto;

exports.randomBytes = function(size, cb) {
	var buf = new Uint8Array(size);
	if (size > 0) {
		crypto.getRandomValues(buf);
	}
	return buf;
};
