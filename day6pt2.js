const input = [2, 8, 8, 5, 4, 2, 3, 1, 5, 5, 1, 2, 15, 13, 5, 14];

function distribute(arr, maxIndex) {
let value = arr[maxIndex];
let index = maxIndex;
arr[index++] = 0;

while (value--) {
    if (index === arr.length) {
    index = 0;
    }
    arr[index]++;
    index++;
}
}
 
function nextCylce(arr) {
const max = arr.indexOf(Math.max(...arr));
distribute(arr, max);
return arr;
}

function run(input) {
const cycles = {};
let count = 0;
let configuration;

while (!(configuration in cycles)) {
    cycles[configuration] = count;
    configuration = nextCylce(input);
    count++;
}
return [count, count - cycles[configuration]];
}

console.log(run(input));