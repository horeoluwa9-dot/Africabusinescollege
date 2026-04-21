const fs = require('fs');
const p = './src/translations/index.ts';
let c = fs.readFileSync(p, 'utf8');
c = c.replace(/Programme/g, 'Program')
     .replace(/programme/g, 'program')
     .replace(/ — /g, ' - ');
fs.writeFileSync(p, c);
console.log('done');
