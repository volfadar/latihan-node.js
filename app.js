const fs = require('fs');

fs.mkdirSync('text');

fs.writeFileSync('./text/bambang.txt', 'yess');

console.log(fs.readFileSync('./text/bambang.txt', 'utf-8'));
