export function functions_simple() {
    function add(a: number, b: number)/*: number*/ {
        return a * b
    }

    const multiply = (a: number, b : number) => {
        return a * b;
    }

    const c = add(12, 13);
}