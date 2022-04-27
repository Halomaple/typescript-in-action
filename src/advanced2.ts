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
