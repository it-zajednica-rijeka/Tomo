export function classes() {
    class Greeter {
        greeting: string;
        constructor(message: string) {
            this.greeting = message;
        }
        greet() {
            return "Hello, " + this.greeting;
        }
    }

    let greeter = new Greeter("world");
    greeter.greet();
}

export function extending_classes() {
    class Animal {
        move(distanceInMeters: number = 0) {
            console.log(`Animal moved ${distanceInMeters}m.`);
        }
    }

    class Dog extends Animal {
        bark() {
            console.log('Woof! Woof!');
        }
    }

    const dog = new Dog();
    dog.bark();
    dog.move(10);
    dog.bark();
}

export function public_private_protected() {
    class Animal {
        private name: string;
        public constructor(theName: string) { this.name = theName; }
        public move(distanceInMeters: number) {
            console.log(`${this.name} moved ${distanceInMeters}m.`);
        }
    }

    const animal = new Animal("cat");
    // animal.name = "JKL"; // ERROR!
    animal.move(100);
}

export function parameter_properties() {
    class Octopus {
        readonly numberOfLegs: number = 8;
        constructor(readonly name: string) {
        }
    }
    const o = new Octopus("Jeremy");
    console.log(o.numberOfLegs);
    console.log(o.name);
}

export function accessors() {
    let passcode = "secret passcode";

    class Employee {
        private _fullName: string = "";

        get fullName(): string {
            return this._fullName;
        }

        set fullName(newName: string) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unauthorized update of employee!");
            }
        }
    }

    let employee = new Employee();
    employee.fullName = "Bob Smith";
    if (employee.fullName) {
        console.log(employee.fullName);
    }
}

export function abstract_classes() {
    abstract class Animal {
        abstract makeSound(): void;
        move(): void {
            console.log("roaming the earth...");
        }
    }

    class Cat extends Animal {
        makeSound() {
            console.info("meow");
        }
    }
    class Dog extends Animal {
        makeSound() {
            console.info("woof");
        }
    }

    function getRandomAnimal(): Animal {
        if (Math.random() < 0.5) {
            return new Cat();
        }
        return new Dog();
    }

    for (let i = 0; i < 10; i ++) {
        const animal = getRandomAnimal();
        animal.makeSound();
    }
}

export function classes_vs_interfaces() {
}