class Stack<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    push(item: T): void {
        this.items.push(item);
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

// Example usage
const stack = new Stack<number>();

stack.push(5);
stack.push(10);
stack.push(15);

console.log(stack.pop()); // Output: 15
console.log(stack.peek()); // Output: 10
console.log(stack.size()); // Output: 2
console.log(stack.isEmpty()); // Output: false

stack.clear();
console.log(stack.isEmpty()); // Output: true
