console.log('datatype.ts');
// 原始类型
let bool: boolean = true;
let num: number = 123;
let str: string = 'abc';
// str = 123;

// 数组
let arr1: number[] = [1, 2, 3];
let arr2: Array<number | string> = [1, 2, 3, '4'];

// 元组
let tuple: [number, string] = [0, '1'];
tuple.push(2);
// tuple[2];
console.log(tuple);

// 函数
let add = (x: number, y: number): number => x + y;
let compute: (x: number, y: number) => number;
compute = (a, b) => a + b;
console.log(compute(1, 2));

// 对象
let obj: { x: number; y: number } = { x: 1, y: 2 };
obj.x = 3;

// Symbol
let s1: symbol = Symbol();
let s2 = Symbol();
console.log(s1 === s2);

// undefined, null
let un: undefined = undefined;
let nu: null = null;

// void
let noReturn = () => {};
void 0;
(function () {
    var undefined = 0;
    console.log('undefined is ', undefined);
})();

// any
let x;
x = 1;
x = '2';
x = obj;
x = s1;
x = un;
x = () => {};

// never
let error = () => {
    throw new Error('error');
};
let endless = () => {
    while (true) {}
};
