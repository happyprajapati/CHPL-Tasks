class Node {
    constructor(data) {
      this.data = data;
      this.children = [];
    }
  
    add(data) {
      this.children.push(new Node(data));
    }
  
    remove(data) {
      this.children = this.children.filter((node) => {
        return node.data !== data;
      });
    }
  }
  
  // Tree class
  class Tree {
    constructor() {
      this.root = null;
    }
  
    traverseBF() {
      const arr = [this.root];
      while (arr.length) {
        const node = arr.shift();
  
        // console.log(node.data)
        // arr.push(...node.children);
            const print = (node) => {
                if(node?.children?.length > 0){
                    arr.push(node?.data)
                    return node.children.forEach(child => print(child))
                }else arr.push(node?.data)
            }
            print(node)
        }
        console.log(arr)
}

traverseDF() {
    const arr = [this.root];
    while (arr.length) {
        const node = arr.shift();
        
        arr.unshift(...node.children);
        if(node.children.length > 0){
            console.log(node.data)
            node.children.map(child => console.log(child.data))
        }    
        // console.log(arr)
      }
    }
  }
const node = new Node(1);
const node1 = new Node(2);
const tree = new Tree();
tree.root = node;

node.add(node1)
node.add(3)
node1.add(4)
node1.add(5)
tree.traverseBF()