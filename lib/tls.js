exports.connect = function(opts, cb) {
	throw new Error("TLS is not supported in the browser. Use WSS instead.");
}
