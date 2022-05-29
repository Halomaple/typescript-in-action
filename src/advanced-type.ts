console.log('--------------advanced-type.ts--------------');

interface DogInterface {
    run(): void;
}

interface CatInterface {
    jump(): void;
}

//交叉类型
let pet: DogInterface & CatInterface = {
    run() {},
    jump() {},
};

//联合类型
let aaaa: number | string = '1';
aaaa = 1;
let bbbb: 'a' | 'b' | 'c';
let cccc: 1 | 2 | 3;

class ADog implements DogInterface {
    run(): void {}
    eat() {}
}
class ACat implements CatInterface {
    jump(): void {}
    eat() {}
}

enum Master {
    Boy,
    Girl,
}

function getPert(master: Master) {
    let pet = master == Master.Boy ? new ADog() : new ACat();
    pet.eat();
    //pet.run();
    //pet.jump();
    return pet;
}

interface ASquare {
    kind: 'square';
    size: number;
}

interface ARectangle {
    kind: 'rectangle';
    width: number;
    height: number;
}

interface ACircle {
    kind: 'circle';
    radius: number;
}

type AShape = ASquare | ARectangle | ACircle;

// function getArea(s: AShape):number {
function getArea(s: AShape) {
    switch (s.kind) {
        case 'square':
            return s.size * s.size;

        case 'rectangle':
            return s.width * s.height;
        case 'circle':
            return Math.PI * s.radius ** 2;
        default:
            return ((e: never) => {})(s);
    }
}

console.log(getArea({ kind: 'circle', radius: 1 }));
