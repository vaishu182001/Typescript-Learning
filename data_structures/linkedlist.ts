class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList<T> {
    private head: Node<T> | null;
    private tail: Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(data: T): void {
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            this.tail = newNode;
        }
    }

    prepend(data: T): void {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        if (!this.tail) {
            this.tail = newNode;
        }
    }

    delete(data: T): void {
        if (!this.head) {
            return;
        }

        if (this.head.data === data) {
            this.head = this.head.next;
            if (!this.head) {
                this.tail = null;
            }
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                if (!current.next) {
                    this.tail = current;
                }
                return;
            }
            current = current.next;
        }
    }

    display(): T[] {
        const result: T[] = [];
        let current = this.head;
        while (current) {
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

// Example usage
const linkedList = new LinkedList<number>();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.prepend(0);
linkedList.delete(2);

console.log(linkedList.display()); // Output: [0, 1, 3]
