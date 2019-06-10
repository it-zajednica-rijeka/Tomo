export function generics() {
    class Tree<T> {
        value?: T;
        left?: Tree<T> = undefined;
        right?: Tree<T> = undefined;
    }

    const treeOfStrings = new Tree<string>();
    treeOfStrings.value = "jkljk";

    const treeOfNumbers = new Tree<number>();
    treeOfNumbers.value = 17

    const treeOfNumbersOrStrings = new Tree<number|string>();
    treeOfNumbersOrStrings.value = 17
    treeOfNumbersOrStrings.value = "jkl"
    //treeOfNumbersOrStrings.value = {}
}