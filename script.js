class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class SLL{
  constructor(){
    this.head = null;
  }

  addFront(value){
    let newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    return this;
  }

  display(){
    let runner = this.head;
    while(runner){
      console.log("Node:", runner.value);
      runner = runner.next;
    }
  }

}

let sll1 = new SLL();
sll1.addFront(1).addFront(2).addFront(3).addFront(4).addFront(5)
sll1.display();