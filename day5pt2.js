const fs = require('fs');

fs.readFile(__dirname + '/day5Input.txt', 'utf8', (err, raw) => {
  const input = raw.split('\n').map(x => parseInt(x));
  let count = 0;
  let index = 0;
  while(index >= 0 && index < input.length) {
    if (input[index] >= 3) {
        index += input[index]--;
    } else {
        index += input[index]++
    }
    count++;
  }
console.log(count);
});