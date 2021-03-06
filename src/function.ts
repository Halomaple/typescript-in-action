console.log('--------------function.ts--------------');

// 定义函数
function addFunction1(x: number, y: number) {
    return x + y;
}

let addFunction2: (x: number, y: number) => number;

type addFunction3 = (x: number, y: number) => number;

interface AddFunction4 {
    (x: number, y: number): number;
}

function addFunction5(x: number, y?: number) {
    return y ? x + y : x;
}

console.log(addFunction5(1)); // 1
console.log(addFunction5(1, 2)); // 3

function addFunction6(x: number, y = 0, z: number, q = 1) {
    return x + y + z + q;
}

console.log(addFunction6(1, undefined, 3)); // 5

function addFunction7(x: number, ...rest: number[]) {
    return x + rest.reduce((pre, cur) => pre + cur);
}

console.log(addFunction7(1, 2, 3, 4, 5)); // 15

function AddFunction8(...rest: number[]): number;
function AddFunction8(...rest: string[]): string;
function AddFunction8(...rest: any[]): any {
    let first = rest[0];
    if (typeof first === 'string') {
        return rest.join('');
    }

    if (typeof first === 'number') {
        return rest.reduce((pre, cur) => pre + cur);
    }
}

console.log(AddFunction8(1, 2, 3)); // 6
console.log(AddFunction8('a', 'b', 'c')); // 'abc'
