console.log('--------------interface-fuction.ts--------------');
let addNumber: (x: number, y: number) => number;

interface AddNumber {
    (x: number, y: number): number;
}

type AddNumberType = (x: number, y: number) => number;

let addNumber1: AddNumber = (a, b) => a + b;

interface Lib {
    (): void;
    version: string;
    doSomething(): void;
}

function getLib() {
    let lib: Lib = (() => {}) as Lib;
    lib.version = '1.0';
    lib.doSomething = () => {};

    return lib;
}

let lib1 = getLib();
lib1();
console.log(lib1.version);
lib1.doSomething();

let lib2 = getLib();
lib2();
console.log(lib2.version);
lib2.doSomething();
