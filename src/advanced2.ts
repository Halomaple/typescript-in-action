console.log('--------------advanced2.ts--------------');

/*
 * X 兼容 Y：X(目标类型) = Y(源类型)
 */

let as: string = 'a';
// as = null;

// 接口兼容性
interface AX {
    a: any;
    b: any;
}

interface AY {
    a: any;
    b: any;
    c: any;
}

let ax: AX = {
    a: 1,
    b: 2,
};

let ay: AY = {
    a: 1,
    b: 2,
    c: 3,
};

ax = ay; //源类型必须具有目标类型的必要属性，就可以赋值
// ay = ax; //类型 "AX" 中缺少属性 "c"，但类型 "AY" 中需要该属性。

// 函数兼容性
type AHandler = (a: number, b: number) => void;
function AFun(handler: AHandler) {
    return handler;
}
// 目标函数兼容源函数需要满足3个条件：
// 条件1：参数个数
// 目标函数的参数个数要多于源函数的参数个数
let aHandler1 = (a: number) => {}; // 目标函数AHandler有2个参数，源函数aHandler1有1个参数
AFun(aHandler1);
let aHandler2 = (a: number, b: number, c: number) => {}; // 目标函数AHandler有2个参数，源函数aHandler2有3个参数
// AFun(aHandler2); //类型“(a: number, b: number, c: number) => void”的参数不能赋给类型“AHandler”的参数。

// 可选参数和剩余参数
let aHandler3 = (p1: number, p2: number) => {};
let aHandler4 = (p1?: number, p2?: number) => {};
let aHandler5 = (...args: number[]) => {};

// a.固定参数可以兼容可选参数和剩余参数
aHandler3 = aHandler4;
aHandler3 = aHandler5;

// b. 可选参数不兼容固定参数和剩余参数
// aHandler4 = aHandler5;
//不能将类型“(...args: number[]) => void”分配给类型“(p1?: number | undefined, p2?: number | undefined) => void”。
//   参数“args”和“p1” 的类型不兼容。
//     不能将类型“number | undefined”分配给类型“number”。
//       不能将类型“undefined”分配给类型“number”。
// aHandler4 = aHandler3;
//不能将类型“(p1: number, p2: number) => void”分配给类型“(p1?: number | undefined, p2?: number | undefined) => void”。
//   参数“p1”和“p1” 的类型不兼容。
//     不能将类型“number | undefined”分配给类型“number”。
//       不能将类型“undefined”分配给类型“number”。t
// 可以关闭strictFunctionTypes来兼容

// c.剩余参数可以兼容固定参数和可选参数
aHandler5 = aHandler3;
aHandler5 = aHandler4;

// 条件2：参数类型
// 参数类型需要匹配
let aHandler6 = (a: string) => {};
// AFun(aHandler6);
//类型“(a: string) => void”的参数不能赋给类型“AHandler”的参数。
//   参数“a”和“a” 的类型不兼容。
//     不能将类型“number”分配给类型“string”。

interface APoint3D {
    x: number;
    y: number;
    z: number;
}
interface APoint2D {
    x: number;
    y: number;
}

let aP3D = (point: APoint3D) => {};
let aP2D = (point: APoint2D) => {};

aP3D = aP2D;
// aP2D = aP3D;
// 不能将类型“(point: APoint3D) => void”分配给类型“(point: APoint2D) => void”。
//   参数“point”和“point” 的类型不兼容。
//     类型 "APoint2D" 中缺少属性 "z"，但类型 "APoint3D" 中需要该属性。
// 可以关闭strictFunctionTypes来兼容

// 条件3：返回值类型
// 目标函数的返回值类型必须与源函数的返回值类型相同，或为其子类型
let af1 = () => ({
    name: 'Jeff',
});
let af2 = () => ({
    name: 'Jeff',
    location: 'Shenzhen',
});
af1 = af2;
// af2 = af1;
//不能将类型“() => { name: string; }”分配给类型“() => { name: string; location: string; }”。
//   类型 "{ name: string; }" 中缺少属性 "location"，但类型 "{ name: string; location: string; }" 中需要该属性。

// 函数重载
// 声明是目标函数，实现是源函数
function adOverload(a: number, b: number): number;
function adOverload(a: string, b: string): string;
function adOverload(a: any, b: any): any {}
// 此重载签名与其实现签名不兼容。
// function adOverload(a: any, b: any, c:any): any {}
// 此重载签名与其实现签名不兼容。
// function adOverload(a: any, b: any) {}

//枚举兼容性
enum AFruit {
    Apple,
    Banana,
}
enum AColor {
    Red,
    Yellow,
}
let aFruit: AFruit.Apple = 1;
let aColor: AColor.Red = 1;
let aNumber1: number = 1;

aFruit = 1;
aFruit = aNumber1;
// aColor = aFruit; //不能将类型“AFruit.Apple”分配给类型“AColor.Red”。

// 类兼容性
class AClass1 {
    constructor(p: number, q: number) {}
    id: number = 1;
    // private name: string = '';
}
class AClass2 {
    static s = 1;
    constructor(p: number) {}
    id: number = 2;
    // private name: string = '';
}
let aa = new AClass1(1, 2);
let bb = new AClass2(1);

aa = bb;
bb = aa; // 因为aa和bb都具有实例属性id，构造函数和静态成员不进行比较
// 如果类中含有私有成员 private name: string = '';，就不能兼容了

class AClass3 extends AClass1 {}
let cc = new AClass3(1, 2);
aa = cc;
cc = aa;

// 范型兼容性
interface Empty<T> {
    // value: T
}
let aObj1: Empty<number> = {};
let aObj2: Empty<string> = {};
aObj1 = aObj2;

let ALog1 = <T>(x: T): T => {
    console.log(x);
    return x;
};
let ALog2 = <U>(y: U): U => {
    console.log(y);
    return y;
};
ALog1 = ALog2; // 如果两个范型函数的定义相同，但是没有指定类型参数，也是可以兼容的
