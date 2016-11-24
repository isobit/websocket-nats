#!/bin/bash
curl 'https://raw.githubusercontent.com/nats-io/node-nats/master/lib/nats.js' > /tmp/nats.js
vimdiff lib/nats.js /tmp/nats.js
