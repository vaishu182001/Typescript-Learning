class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    front(): T | undefined {
        return this.items[0];
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
const queue = new Queue<number>();

queue.enqueue(5);
queue.enqueue(10);
queue.enqueue(15);

console.log(queue.dequeue()); // Output: 5
console.log(queue.front());   // Output: 10
console.log(queue.size());    // Output: 2
console.log(queue.isEmpty()); // Output: false

queue.clear();
console.log(queue.isEmpty()); // Output: true
