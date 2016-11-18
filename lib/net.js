'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function WebSocketProxy(url) {
	var self = this;
	EventEmitter.call(this);
	this.sock = new WebSocket(url);
	this.sock.addEventListener('open', function(e) {
		self.emit('connect');
	});
	this.sock.addEventListener('message', function(e) {
		self.emit('data', new Buffer(e.data));
	});
	this.sock.addEventListener('error', function(e) {
		self.emit('error', e);
	});
	this.sock.addEventListener('close', function(e) {
		self.emit('close');
	});
}
util.inherits(WebSocketProxy, EventEmitter);

WebSocketProxy.prototype.end = function() {
	this.destroy();
}

WebSocketProxy.prototype.destroy = function() {
	if (
		this.sock.readyState === WebSocket.CONNECTING ||
		this.sock.readyState === WebSocket.OPEN
	) {
		this.sock.close();
	}
}

WebSocketProxy.prototype.write = function(data) {
	if (this.sock.readyState === WebSocket.OPEN) {
		this.sock.send(data);
	}
}

WebSocketProxy.prototype.pause = function() {
	console.warn('WebSocketProxy stream pause/resume is not supported yet.');
}

WebSocketProxy.prototype.resume = function() {}

exports.createConnection = function(url) {
	// The url is rebuilt to avoid including the auth credentials.
	return new WebSocketProxy(url.format({
		protocol:  url.protocol,
		slashes:   url.slashes,
		host:      url.host,
		hostname:  url.hostname,
		port:      url.port,
		pathname:  url.pathname,
		search:    url.search,
		path:      url.path,
		query:     url.query,
		hash:      url.hash
	}));
}
