
const isKey = (arg) => arg.substring(0, 2) === '--';

const updateKeyValue = (parsedArgs, label, value) => {
    const prevArg = parsedArgs[label];
    let updatedArg = value;
    if(prevArg) {
        if (Array.isArray(prevArg)) {
            prevArg.push(value);
            updatedArg = prevArg;
        } else {
            updatedArg = [prevArg, value];
        }
    }
    parsedArgs[label] = updatedArg;
};

module.exports = function cliParser (args) {
    if (!Array.isArray(args)) {
        args = args.split(' ');
    }
    let parsedInputs = {};
    for (let index in args) {
        const arg = args[index];
        if (isKey(arg)) {
            const keyLabel = arg.substring(2,arg.length);
            let newValue = true;
            const next = args[++index];
            if (next && !isKey(next)) {
                newValue = +next? +next : next;
            }
            updateKeyValue(parsedInputs, keyLabel, newValue);
        }
    }
    return parsedInputs;
};