export function functions() {
    function add(x: number, y: number): number {
        return x + y;
    }

    let myAdd = function (x: number, y: number): number { return x + y; };

    // Infer the return type
    let yetAnotherAdd = (x: number, y: number) => x + y;
}

export function optional_parameters() {
    function buildName(firstName: string, lastName?: string) {
        if (lastName)
            return firstName + " " + lastName;
        else
            return firstName;
    }

    let result1 = buildName("Bob");                  // works correctly now
    //let result2 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result3 = buildName("Bob", "Adams");         // ah, just right
}

export function parameters_with_default_values() {
    function buildName(firstName: string, lastName = "Smith") {
        return firstName + " " + lastName;
    }

    let result1 = buildName("Bob");                  // works correctly now, returns "Bob Smith"
    let result2 = buildName("Bob", undefined);       // still works, also returns "Bob Smith"
    //let result3 = buildName("Bob", "Adams", "Sr.");  // error, too many parameters
    let result4 = buildName("Bob", "Adams");         // ah, just right
}

export function rest_parameters() {
    function buildName(firstName: string, ...restOfName: string[]) {
        return firstName + " " + restOfName.join(" ");
    }

    // employeeName will be "Joseph Samuel Lucas MacKinzie"
    let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
}

export function overloads() {
    let suits = ["hearts", "spades", "clubs", "diamonds"];

    function pickCard(x: { suit: string; card: number; }[]): number;
    function pickCard(x: number): { suit: string; card: number; };
    function pickCard(x: any): any {
        // Check to see if we're working with an object/array
        // if so, they gave us the deck and we'll pick the card
        if (typeof x == "object") {
            let pickedCard = Math.floor(Math.random() * x.length);
            return pickedCard;
        }
        // Otherwise just let them pick the card
        else if (typeof x == "number") {
            let pickedSuit = Math.floor(x / 13);
            return { suit: suits[pickedSuit], card: x % 13 };
        }
    }
}