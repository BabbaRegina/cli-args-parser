'use strict';
let parsedInputs = {};

function updateKeyValue(keyLabel, keyValue) {
    const prevInput = parsedInputs[keyLabel];
    if(prevInput) {
        if (Array.isArray(prevInput)) {
            prevInput.push(keyValue);
            parsedInputs[keyLabel] = prevInput;
        } else {
            parsedInputs[keyLabel] = [prevInput, keyValue];
        }
    } else {
        parsedInputs[keyLabel] = keyValue;
    }
}

let args = process.argv.slice(2).toString();
args = args.substring(1, args.length-1);
const inputs = args.split('],[');
for(let index in inputs){
    const pair = inputs[index].split(',,');
    console.log(pair);
    const keyLabel = pair[0].substring(2,pair[0].length).toString();
    let newValue = true;
    if (pair.length>1) {
        newValue = +pair[1]? +pair[1] : pair[1];
    }
    updateKeyValue(keyLabel, newValue);
}

console.log('PARSED INPUTS', parsedInputs);


