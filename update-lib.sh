#!/bin/bash
vimdiff lib/nats.js <(curl 'https://raw.githubusercontent.com/nats-io/node-nats/master/lib/nats.js')
vimdiff lib/nuid.js <(curl 'https://raw.githubusercontent.com/nats-io/node-nuid/master/lib/nuid.js')
