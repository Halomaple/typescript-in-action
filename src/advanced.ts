console.log('--------------advanced.ts--------------');

let ab = 1;
let ac = [1, null];

let ad = (x = 1) => x + 1;

window.onkeydown = (event) => {
    console.log(event.key);
    // console.log(event.button); //Property 'button' does not exist on type 'KeyboardEvent'
};

interface AInterface {
    bar: number;
}
let af = {} as AInterface;
af.bar = 1;
let ag: AInterface = {
    bar: 1,
};
