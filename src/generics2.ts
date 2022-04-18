console.log('--------------generics2.ts--------------');

class GLog<T> {
    // static run(value: T) { //Static members cannot reference class type parameters.
    run(value: T) {
        console.log(value);
        return value;
    }
}

let gLog1 = new GLog<number>();

gLog1.run(1);

let gLog2 = new GLog();

gLog2.run('12');

interface LengthInterface {
    length: number;
}

function fLog<T extends LengthInterface>(value: T): T {
    console.log(value, value.length);
    return value;
}

fLog([1, 2]);
fLog('123');
fLog({ length: 1 });
