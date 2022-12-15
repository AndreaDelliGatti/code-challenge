import { print, TreeNode } from "./utils";

class AVL {
    root: TreeNode | null;

    constructor() { this.root = null; }

    private createNode(value: number): TreeNode {
        return {
            height: 1,
            value,
            left: null,
            right: null
        }
    }

    height(node: TreeNode | null) {
        return (node == null) ? 0 : node.height;
    }

    balance(node: TreeNode | null) {
        return (node == null) ? 0 : (this.height(node.left) - this.height(node.right));
    }

    max(a: number, b: number) {
        return a > b ? a : b;
    }

    rightRotate(y: TreeNode) {
        var x = y.left!!;
        var T2 = x.right!!;

        x.right = y;
        y.left = T2;

        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;
        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;

        return x;
    }

    leftRotate(x: TreeNode) {
        var y = x.right!!;
        var T2 = y.left!!;

        y.left = x;
        x.right = T2;

        x.height = this.max(this.height(x.left), this.height(x.right)) + 1;
        y.height = this.max(this.height(y.left), this.height(y.right)) + 1;

        return y;
    }

    insert(node: TreeNode | null, value: number): TreeNode {
        if (node == null) return this.createNode(value);

        console.log("Nodo corrente:", node.value);

        if (value < node.value) node.left = this.insert(node.left, value);
        else if (value > node.value) node.right = this.insert(node.right, value);
        else return node;


        node.height = 1 + this.max(
            this.height(node.left),
            this.height(node.right)
        );
        console.log("Altezza: ", node.height);

        let balance = this.balance(node);
        console.log("Bilanciamento: ", balance);

        if (balance > 1 && value < node.left!!.value) {
            console.log("Rotazione a destra");
            console.log("Fine nodo corrente", node.value);
            return this.rightRotate(node);
        }

        if (balance < -1 && value > node.right!!.value) {
            console.log("Rotazione a sinitra");
            console.log("Fine nodo corrente", node.value);
            return this.leftRotate(node);
        }

        if (balance > 1 && value > node.left!!.value) {
            console.log("Doppia rotazione sinistra-destra");
            node.left = this.leftRotate(node.left!!);
            console.log("Fine nodo corrente", node.value);
            return this.rightRotate(node);
        }

        if (balance < -1 && value < node.right!!.value) {
            console.log("Doppia rotazione destra-sinistra");
            node.right = this.rightRotate(node.right!!);
            console.log("Fine nodo corrente", node.value);
            return this.leftRotate(node);
        }

        console.log("Fine nodo corrente", node.value);

        return node;
    }
}

let AVLTree = new AVL();
for (let i = 0; i < 10; i++) {
    let value = Math.floor((Math.random() * 30) + 1);
    console.log("Inserisco: ", value, "\n");
    
    console.log(print(AVLTree.root));

    AVLTree.root = AVLTree.insert(AVLTree.root, value);

    console.log(print(AVLTree.root));
    console.log("--------------------------------------------");
}