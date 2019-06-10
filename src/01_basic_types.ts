export function basic_types() {
    const decimal: number = 6;
    const hex: number = 0xf00d;
    const color: string = "blue";
    const fullName = "Ana";
    let sentence: string = `Hello, my name is ${fullName}`
    sentence += ".";
    // Error
    // sentence = 17;

    let something: any = `Hello, my name is ${fullName}`;
    something = 17;
}

export function arrays() {
    const array: number[] = [];
    array.push(17)
    //array.push("17");
}

export function tuples() {
    let tuple: [string, number];
    tuple = ["My age is", 17];

    let name = tuple[0];
    name += ".";

    let age = tuple[1];
    // age += "."
    age += 18;
}

export function enums() {
    enum Color { Red /*= 1*/, Green, Blue }
    let c: Color = Color.Green;
}

export function other_types() {
    // void, null, undefined, never
}

export function type_assertions() {
    let someValue: any = "this is a string";
    let strLength: number = (<string>someValue).length;
    //let strLength: number = (someValue as string).length;
}