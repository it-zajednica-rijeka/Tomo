export function intersection_types() {
    // TYpe1 & Type2 & & Type3
    // That means an object of this type will have all members of all three types
}

export function union_types() {
    /**
     * @param value 
     * @param padding if number -- the number of spaces, otherwise the padding string
     */
    function padLeft(value: string, padding: string | number) {
        if ("string" === typeof padding) {
            let res = value
            while (res.length < (<number><unknown>padding)) {
                res = "0" + res;
            }
        }
        return <string>padding + value;
    }
}

export function string_literal_types() {
    function formatDate(d: Date, format: "long" | "short") {
        switch (format) {
            case "long":
                return d.toString();
            case "short":
                return d.toJSON();
            /*
            case "Short":
                return "..."
            */
        }
    }

    // same for numeric literal types
    function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
        //return 7;
        return 5; // ...
    }
}

export function type_aliases() {
    type Format = "long" | "short";
    function formatDate(d: Date, format: Format) {
        switch (format) {
            case "long":
                return d.toString();
            case "short":
                return d.toJSON();
            /*
            case "Short":
                return "..."
            */
        }
    }
    function formatNumber(n: number, format: Format) {
        // ...
    }
}

export function polymorfic_this() {
    class BasicCalculator {
        public constructor(protected value: number = 0) { }
        public currentValue(): number {
            return this.value;
        }
        public add(operand: number): BasicCalculator {
            this.value += operand;
            return this;
        }
        public multiply(operand: number): BasicCalculator {
            this.value *= operand;
            return this;
        }
        // ... other operations go here ...
    }

    let v = new BasicCalculator(2)
        .multiply(5)
        .add(1)
        .currentValue();

    class ScientificCalculator extends BasicCalculator {
        public constructor(value = 0) {
            super(value);
        }
        public sin() {
            this.value = Math.sin(this.value);
            return this;
        }
        // ... other operations go here ...
    }

    /*
    // How to fix this problem
    v = new ScientificCalculator(2)
        .multiply(5)
        .add(1)
        .sin()
        .currentValue();
    */
}