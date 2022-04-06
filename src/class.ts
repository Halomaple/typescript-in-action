console.log('--------------class.ts--------------');

class Dog {
    constructor(name: string) {
        this.name = name;
    }
    public name: string = 'dog';
    run() {}

    private pri() {}
    protected pro() {}
    readonly legs: number = 4;
    static food: string = 'bones';
}
console.log(Dog.prototype);

let dog = new Dog('wangwang');
console.log(dog);

// dog.pri(); //Property 'pri' is private and only accessible within class 'Dog'.
// dog.pro(); //Property 'pro' is protected and only accessible within class 'Dog' and its subclasses
// dog.legs = 2; //Cannot assign to 'legs' because it is a read-only property.
console.log(Dog.food);
// console.log(dog.food); //Property 'food' does not exist on type 'Dog'. Did you mean to access the static member 'Dog.food' instead?

class Husky extends Dog {
    constructor(name: string, public color: string) {
        // 'public' makes property to be instance level property
        super(name);
        this.color = color;
    }
    //color: string;
}

console.log(Husky.food);
