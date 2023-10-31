class Noded {
    public val: number;
    public next: Noded | null | any;

    constructor(val:number){
        this.val = val;
        this.next = null;
    }
}

class Link {
    public head: Noded | null | any;
    public tail: Noded | null | any;
    public length: number;

    constructor() {
        this.head = null;
        this.tail = null; 
        this.length = 0;
    }

    addTail(val:number){
        let node = new Noded(val);
        if(!this.head) {
            this.head = node; 
            this.tail = this.head;
        }else {
            this.tail.next = node;
            this.tail = node;
        }

        this.length++;
        return this
    }

    addHead(val:number){
        let node = new Noded(val);
        if(!this.head) {
            this.head = node; 
            this.tail = this.head;
        }else {
            node.next = this.head;
            this.head = node;
        }

        this.length++;
        return this
    }

    removeTail(){
        if(!this.head) {
             return undefined;
        }else {
            let current = this.head;
            let newTail = current;

            while(current.next){
                newTail = current;
                current = current.next;
            }
            this.tail = newTail;
            this.tail.next = null;

            this.length--;
            return this;
        }
    }

    removeHead(){
        if(!this.head) {
             return undefined;
        }else {
            let current = this.head;
            this.head = current.next;

            this.length--;
            return this;
        }
    }

    get(index:number){
        if(index < 0 || index > this.length) {
            return undefined
        }else {
            let count: number = 0;
            let current = this.head; 

            while(index !== count){
                current = current.next;
                count++
            }
            return current;
        }
    }

    set(index: number, val: number) {
        let node = this.get(index);

        if(node) {
            node.val = val;
            return true;
        }else{
            return false;
        }
    }

    insert(index: number, val: number) {
        let node = new Noded(val)

        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.addHead(val);
        if(index === this.length) return this.addTail(val);

        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = node;
        node.next = temp;

        this.length++;
        return this;
    }

    remove(index: number) {
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return !!this.removeHead();
        if(index === this.length) return !!this.removeTail();

        let prev = this.get(index - 1);
        let temp = prev.next;

        prev.next = temp.next;

        this.length--;
        return true;
    }
}

console.clear()
let link = new Link();
link.addTail(3)
link.addTail(4)
link.addTail(5)
link.addHead(2)
link.addTail(6)
// console.clear()
console.log()
console.log(link)
console.log("removeTail:", link.removeTail())
console.log("removeHead:", link.removeTail())
console.log("getting:", link.get(0))
console.log("setting:", link.set(2, 22))
console.log("Inserting:", link.insert(3, 30))
console.log("Removing:", link.remove(4))
console.log(link)