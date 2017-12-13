const fs = require('fs');

fs.readFile(__dirname + '/day9Input.txt', 'utf8', (err, raw) => {
  const input = raw.trim();
    let openCurly = 0;
    let currentlyGarbage = false;
    let count = 0;
    for (let i = 0; i < input.length; i + 0) {
      let character = input.charAt(i++);
      if (character === '!') {
        i++;
      } else if (currentlyGarbage && character !== '>') {
        continue;
      } else if (character === '{') {
        openCurly++;
        count += openCurly;
      } else if  (character === '}') {
        openCurly--;
      } else if (character === '<') {
        currentlyGarbage = true;
      } else if (character === '>') {
          currentlyGarbage = false;
      }
    }
    console.log(count);
  });
  