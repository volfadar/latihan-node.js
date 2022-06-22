const fs = require('fs');

fs.mkdirSync('text');

fs.writeFileSync('./text/bambang.txt', 'yess');

fs.readFile('./text/bambang.txt', 'utf-8', (e, data) => {
  if (e) throw e;
  console.log(data);
});
