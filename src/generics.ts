console.log('--------------generics.ts--------------');

function gLog<T>(value: T): T {
    console.log(value);
    return value;
}

gLog<string[]>(['a', 'b']);
gLog(['a', 'b']);

type LogType = <T>(value: T) => T;
let myLog: LogType = gLog;

interface LogInterface<T = string> {
    (value: T): T;
}

let myLog2: LogInterface<number> = gLog;
myLog2(1);
let myLog3: LogInterface = gLog;
myLog3('2');
