const fs = require('fs');

function bigBang() {
    // create fixed array of size 100, filled with empty strings
    const output = Array(100).fill('');
    // for loop iterating 1 - 100
    for (let i = 1; i <= 100; i++) {
        const x = i;
        // check if x is divisible by 3, 5 or both
        if (x % 5 === 0 && x % 3 === 0) {
            output[i - 1] = "BIGBANG";
        } else if (x % 3 === 0) {
            output[i - 1] = "BIG";
        } else if (x % 5 === 0) {
            output[i - 1] = "BANG";
        } else {
            output[i - 1] = x.toString();
        }
    }
    return output;
}

const jsonOutput = JSON.stringify(bigBang(), null, 2);
fs.writeFile('output.json', jsonOutput, (err) => {
    if (err) throw err;
    console.log('File "output.json" has been saved!');
});
