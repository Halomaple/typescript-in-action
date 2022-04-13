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

class ClassA {
    state = 1;
}

interface InterfaceA extends ClassA {}

class ClassB implements InterfaceA {
    state = 1;
}

// class ClassC implements InterfaceA {
//     name = 'C';
// }
// Class 'ClassC' incorrectly implements interface 'InterfaceA'. Property 'state' is missing in type 'ClassC' but required in type 'ClassA'.

class Bus extends ClassA implements InterfaceA {}
