
class LinkedList{
  constructor(data){
    this.head = {
      value:data,
      next:null
    }
    this.tail = this.head
    this.length =1;
  }
  append(data){
    const newNode = {
      value:data,
      next:null
    }
    this.tail.next = newNode;
    this.tail =newNode;
    this.length++
  }
  prepend(data){
    const newNode ={
      value:data,
      next:null
    }
    newNode.next = this.head
    this.head = newNode
  }
  traversing(req){
let counter =0;
let currentNode = this.head
while(counter!=req){


counter++
currentNode = currentNode.next

  }
  return currentNode
}

insert (index,data){
  const newNode = {
    value :data,
    next:null
  }
  const leaderNode = this.traversing(index-1);
  const nextNode =leaderNode.next

leaderNode.next = newNode;
newNode.next = nextNode;

}




}
const myList = new LinkedList(10)
myList.append(7)
myList.append(18)
myList.prepend(8)
myList.insert(1,4)

console.log(myList)



