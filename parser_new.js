
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

function isFlag(arg) {
    return arg.length > 2 && arg.substring(0, 2) === '--' && arg.substring(0, 3) != '---';
}

function nextArgIsValue(next) {
    return next && next.length > 0 && next.substring(0, 1) != '-';
}

module.exports = function cliParser (args) {
    if (!Array.isArray(args)) {
        args = args.split(' ');
    }
    let parsedInputs = {};
    for (let index in args) {
        const arg = args[index];
        if (isFlag(arg)) {
            const keyLabel = arg.substring(2,arg.length).toString();
            let newValue = true;
            if (index < args.length) {
                const nextValue = args[++index];
                if (nextArgIsValue(nextValue)) {
                    newValue = +nextValue? +nextValue : nextValue;
                }
            }
            updateKeyValue(parsedInputs, keyLabel, newValue);
        }
    }
    return parsedInputs;
}