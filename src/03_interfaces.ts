export function interfaces() {
    function printLabel(labeledObj: { label: string }) {
        console.log(labeledObj.label);
    }
    let myObj = { size: 10, label: "Size 10 Object" };
    printLabel(myObj);
}

export function explicit_interfacess() {
    interface HasLabel {
        label: string
    }
    function printLabel(labeledObj: HasLabel) {
        console.log(labeledObj.label);
    }

    class MyClass /*implements HasLabel*/ {
        size: number = 0;
        label: string = "";
    }
    let myObj = new MyClass();
    myObj.size = 10
    myObj.label = `Size ${myObj.size} object`;
    printLabel(myObj);
}

export function optional_properties() {
    interface SquareConfig {
        color?: string;
        width?: number;
    }

    function createSquare(config: SquareConfig): { color: string; area: number } {
        let newSquare = { color: "white", area: 100 };
        if (config.color) {
            newSquare.color = config.color;
        }
        if (config.width) {
            newSquare.area = config.width * config.width;
        }
        return newSquare;
    }

    let mySquare = createSquare({ color: "black" });
}

export function readonly_properties() {
    interface Point {
        readonly x: number;
        readonly y: number;
    }

    let p1: Point = { x: 10, y: 20 };
    // p1.x = 5;
}

export function interfaces_and_classes() {
    interface IPoint {
        x: number;
        y: number;
    }
    class CPoint {
        x: number = 0;
        y: number = 0;
    }
}

export function excess_propery_check() {
    interface SquareConfig {
        color?: string;
        width?: number;
        [propName: string]: any;
    }
    // SquareConfig can have any number of properties, and as long as they aren’t color or width, their types don’t matter.
}

export function function_and_indexable_types() {
    interface SearchFunc {
        (source: string, subString: string): boolean;
    }
    interface StringArray {
        [index: number]: string;
    }
}

export function implementing_an_interface() {
    interface ClockInterface {
        currentTime: Date;
        tick(): void;
    }

    class Clock /*implements ClockInterface*/ {
        currentTime: Date = new Date();
        constructor(d: Date) {
            this.currentTime = d;
        }

        tick() { console.info("tick!"); }
    }

    function doSomethingOnClocks(c: ClockInterface) {
        c.tick();
    }
    doSomethingOnClocks(new Clock(new Date()));
}

export function extend_interfaces() {
    interface Shape {
        color: string;
    }

    interface Square extends Shape {
        sideLength: number;
    }

    let square = <Square>{};
    square.color = "blue";
    square.sideLength = 10;
}