console.log('--------------interface.ts--------------');

interface List {
    readonly id: number;
    name: string;
    age?: number;
}
interface Result {
    data: List[];
}
function render(result: Result) {
    result.data.forEach((value) => {
        console.log(value.id, value.name);
        if (value.age) {
            console.log(value.age);
        }
    });
}

let result = {
    data: [
        {
            id: 1,
            name: 'A',
            sex: 'male',
        },
        {
            id: 2,
            name: 'B',
        },
    ],
};

render(result);

render({
    data: [
        {
            id: 1,
            name: 'A',
            sex: 'male',
        },
        {
            id: 2,
            name: 'B',
        },
    ],
} as Result);

render(<Result>{
    data: [
        {
            id: 1,
            name: 'A',
            sex: 'male',
        },
        {
            id: 2,
            name: 'B',
        },
    ],
});

interface StringArray {
    [index: number]: string;
}
let chars: StringArray = ['A', 'B'];

interface Names {
    [x: string]: string;
    // y: number
    [z: number]: string;
}
