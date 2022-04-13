console.log('--------------class-interface.ts--------------');

interface Human {
    //new (name: string): void;
    name: string;
    eat(): void;
}

class Asian implements Human {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    eat() {}
    sleep() {}
}

interface Man extends Human {
    run(): void;
}

interface Child {
    cry(): void;
}

interface Boy extends Man, Child {}

let boy: Boy = {
    name: '',
    run() {},
    eat() {},
    cry() {},
};

class Auto {
    state = 1;
    // private state2 = 0; //Class 'ClassC' incorrectly implements interface 'AutoInterface'. Property 'state2' is missing in type 'ClassC' but required in type 'Auto'.
}

interface AutoInterface extends Auto {}

class ClassC implements AutoInterface {
    state = 1;
}

class Bus extends Auto implements AutoInterface {}
