'use strict';

var util = require('util');
var EventEmitter = require('events').EventEmitter;

function Socket(url) {
	console.log(url);
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
util.inherits(Socket, EventEmitter);

Socket.prototype.end = function() {
	this.sock.close();
}

Socket.prototype.destroy = function() {
	this.sock.close();
}

Socket.prototype.write = function(data) {
	this.sock.send(data);
}

//Socket.prototype.isPaused = function() {
	//return false;
//}

//Socket.prototype.setNoDelay = function() {}

Socket.prototype.resume = function() {}

exports.createConnection = function(port, host, wss) {
	var protocol = (wss)? 'wss' : 'ws';
	return new Socket(protocol + '://' + host + ':' + port);
}
