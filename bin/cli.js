#!/usr/bin/env node

// Load `jake` global

require('../lib/jake');

var args = process.argv.slice(2);

jake.run.apply(jake, args);
