import { LinkedList } from "./linkedlist";

function addTwoNumbers(l1: LinkedList, l2: LinkedList): LinkedList {
    let result = new LinkedList();

    let s1 = l1.sizeOfList();
    let s2 = l2.sizeOfList();

    let n1 = 0;
    let n2 = 0;
    
    for(let i = 0; i < s1; i++)
        n1 += (l1.getAt(i) * Math.pow(10, i));
    
    for(let i = 0; i < s2; i++)
        n2 += (l2.getAt(i) * Math.pow(10, i));    
    
    let sum = (n1 + n2).toString().split('').reverse().join('');
    
    for(let i = 0; i < sum.length; i++)
        result.add(parseInt(sum[i]));

    return result;
}

function start() {
    let l1 = new LinkedList();
    l1.add(2);
    l1.add(4);
    l1.add(3);

    let l2 = new LinkedList();
    l2.add(5);
    l2.add(6);
    l2.add(4);

    let res = addTwoNumbers(l1, l2);
    res.print();
}

start();