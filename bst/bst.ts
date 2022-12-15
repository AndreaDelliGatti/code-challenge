import { TreeNode, print } from "../avl/utils";

class BinaryTree {
    root: TreeNode | null;

    constructor() { this.root = null; }

    private createNode(value: number): TreeNode {
        return {
            height: 0,
            value,
            left: null,
            right: null
        }
    }

    insert(node: TreeNode | null, value: number): TreeNode {
        if (node == null)
            return this.createNode(value);

        else if (node.value > value)
            node.left = this.insert(node.left, value);

        else if (node.value < value)
            node.right = this.insert(node.right, value);

        return node;
    }

    print(node: TreeNode | null) {
        if (node != null) {
            console.log(node.value);
            this.print(node.left);
            this.print(node.right);
        }
    }

    inorder(node: TreeNode | null) {
        if (node != null) {
            this.print(node.left);
            console.log(node.value);
            this.print(node.right);
        }
    }
}


let BST = new BinaryTree();

for (let i = 0; i < 10; i++) {
    let value = Math.floor((Math.random() * 30) + 1);
    console.log("Inserisco: ", value, "\n");

    BST.root = BST.insert(BST.root, value);

    console.log(print(BST.root));
    console.log("--------------------------------------------");
}