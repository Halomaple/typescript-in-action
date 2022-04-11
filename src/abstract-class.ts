console.log('--------------abstract-class.ts--------------');

abstract class Animal {
    eat() {
        console.log('Eat');
    }

    abstract sleep(): void;
}

// let animal = new Animal(); // Cannot create an instance of an abstract class.

class Cat extends Animal {
    constructor(name: string) {
        super();
        this.name = name;
    }
    public name: string = 'cat';
    run() {}
    sleep(): void {
        console.log('Cat sleep');
    }
}

let cat = new Cat('miaomiao');
cat.eat();

class Chicken extends Animal {
    sleep(): void {
        console.log('Chicken sleep');
    }
}

let chicken = new Chicken();

let animals: Animal[] = [cat, chicken];

animals.forEach((i) => {
    i.sleep();
});

class WorkFlow {
    step1() {
        return this;
    }

    step2() {
        return this;
    }
}

new WorkFlow().step1().step2();

class MyFlow extends WorkFlow {
    next() {
        return this;
    }
}
new MyFlow().next().step1().step2();
