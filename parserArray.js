'use strict';

function updateKeyValue(parsedInputs, keyLabel, keyValue) {
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

function formatInputs(argv) {
    return argv.slice(2).toString().slice(1, -1).split('],[');
}

const inputs = formatInputs(process.argv);
let parsedInputs = {};
for (let index in inputs) {
    const pair = inputs[index].split(',,');
    const keyLabel = pair[0].substring(2,pair[0].length).toString();
    let newValue = true;
    if (pair.length>1) {
        newValue = +pair[1]? +pair[1] : pair[1];
    }
    updateKeyValue(parsedInputs, keyLabel, newValue);
}

console.log('PARSED INPUTS', parsedInputs);


