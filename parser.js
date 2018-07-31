'use strict';

let args = process.argv.slice(2);
console.log(' ARGS:', args);
let goodInputs = [];

for(let index in args){
    const arg = args[index];
    const isKey =  arg.length > 2 && arg.substring(0,2) === '--' && arg.substring(0,3) != '---';
    if (isKey) {
        const keyLabel = arg.substring(2,arg.length).toString();
        let input = {};
        input[keyLabel] = true;
        if (index < args.length) {
            const next = args[++index];
            const nextIsValue = next && next.length > 0 && next.substring(0,1) != '-';
            if(nextIsValue) input[keyLabel] = +next? +next : next;
        }
        goodInputs.push(input);
    }
}
console.log('PARSED INPUTS', goodInputs);
