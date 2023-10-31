console.clear()

// class Stack {
//     public stack: Array<number>;

//     constructor() {
//         this.stack = [];
//     }

//     addValue(val:number) {
//         this.stack.push(val);

//         return this.stack
//     }

//     removeValue() {
//         this.stack.pop();

//         return this.stack;
//     }

//     size() {
// return this.stack.length
//     }

//     peek() {
//         return this.stack[this.size() - 1]
//     }

//     isEmpty() {
//         if(this.size() === 0){
//             return true;
//         }else{
//             return false
//         }
//     }
// }

// let stack = new Stack();

// stack.addValue(4);
// stack.addValue(5);
// stack.addValue(2);
// stack.addValue(1);

// console.log(stack);
// stack.removeValue();
// console.log(stack.peek())
// console.log(stack.size())
// console.log(stack.isEmpty())

// console.log(stack);

// "Lagos sky appears to be white and sunny today" ==> ""

const changeString = (x: string) => {
    let z: string = x.split(" ").reverse().join(" ");
    return z
}

// console.log(changeString("Lagos sky appears to be white and sunny today"));

const nextString = (x:string) => {
    let z: Array<string> = x.split(" ")
    let w:string = "";

    while (z.length !== 0) {
        let k = z.pop();
        w += ` ${k}`
    }

    return w;
}

let word: string = "Lagos sky appears to be white and sunny today";
console.log(nextString(word))


// const nextNum = (xx:number) => {
//     let zz: number =
//     let ww:number = "";

//     while(zz.length !== 0){
//         let kk = zz.pop();
//     }
// }

// let num:number = 334456;
// console.log(nextNum(num))