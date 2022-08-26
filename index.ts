class Queue {
    private stack1: number[];
    private stack2: number[];

    public constructor() { this.stack1 = []; this.stack2 = []; }

    public enQueue(n: number) {
        this.stack1.push(n);
    }

    public deQueue(): number {
        if(this.stack1.length == 0 && this.stack2.length == 0)
            throw new Error("stack empty");

        else {
            if(this.stack2.length == 0) {
                while(this.stack1.length > 0){
                    this.stack2.push(this.stack1.pop()!!);
                }
            }
            return this.stack2.pop()!!;
        }
    }
}

function start(){
    let queue = new Queue();
    queue.enQueue(1);
    queue.enQueue(2);
    queue.enQueue(3);

    console.log(queue.deQueue())
    console.log(queue.deQueue())
    console.log(queue.deQueue())
}

start();