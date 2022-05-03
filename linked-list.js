/** Node: node for a singly linked list. */

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

/** LinkedList: chained together nodes. */

class LinkedList {
	constructor(vals = []) {
		this.head = null;
		this.tail = null;
		this.length = 0;

		for (let val of vals) this.push(val);
	}

	/** push(val): add new value to end of list. */

	push(val) {
		let newNode = new Node(val);

		if (this.head === null) this.head = newNode;
	
		if (this.tail !== null) this.tail.next = newNode;
	
		this.tail = newNode;
	}

	/** unshift(val): add new value to start of list. */

	unshift(val) {
		
		let curr = this.head;
		let newNode = new Node(val);
		
		if (this.head === null) {
			this.head = newNode;
			this.tail = newNode;
		}
		
		else  { 
			newNode.next = curr;
			this.head = newNode;
		}

		this.length++ 

	}

	/** pop(): return & remove last item. */

	pop() {
		let curr = this.head;
		let removed = null;

		while (curr != null) {
			this.length++;

			if (curr.next == null) {
				removed = curr;
				curr = null;
				this.head = curr;
				this.tail = curr;
				this.length = 0;

				return removed.val
			}

			else if (curr.next.next == null) {
				this.length++;

				removed = curr.next
				curr.next = null;

				this.tail = curr;

				this.length--;

				return removed.val
			}

			this.length--;
		}
	}

	/** shift(): return & remove first item. */

	shift() {
		let curr = this.head;

		if (curr == null) {
			this.head = null
			this.tail = null
			this.length = 0
			return null
		}
		
		if (this.head.next == null) {
			this.head = null
			this.tail = null
			this.length = 0
			return curr.val
		}
		
		while (curr != null) {
			this.length++;
			curr = curr.next;
		}
		
		let removed = this.head
		this.head = this.head.next
		this.length--;

		return removed.val

	}

	/** getAt(idx): get val at idx. */

	getAt(idx) {
		// create a var to store the curr node location
		let count = 0;
		let curr = this.head

		// if idx is below 0
		if (idx < 0) {
			return null
		}

		// else we keep going until we find it
		while (count <= idx) {

			// if count == idx, we know we found the right index
			if (count == idx) {
				return curr.val
			}

			// increase count
			count++;

			// then set the curr node to the next one in the list
			curr = curr.next;
		}
	}

	/** setAt(idx, val): set val at idx to val */

	setAt(idx, val) {
		let curr = this.head;
		let count = 0;

		if (idx < 0) {
			return null
		}

		while (count <= idx) {
			if (count == idx) {
				curr.val = val
				return
			}
			count++; 
			curr = curr.next
		}

	}

	/** insertAt(idx, val): add node w/val before idx. */

	insertAt(idx, val) {
		let count = 0;
		this.length = 0;

		let newNode = new Node(val)

		let curr = this.head;

		if (idx < 0) {
			return null
		}

		if (idx == 0) {
			if (curr != null) {
				this.head = newNode;
				newNode.next = curr;
				this.length++;
			}
			this.head = newNode;
			this.tail = newNode;
			this.length++;
			return
		}

		while (curr != null) {
			if (count + 1 == idx) {
				newNode.next = curr.next;
				curr.next = newNode;
			}
			count++;
			this.tail = curr
			curr = curr.next
			this.length++;
			console.log("current count", count)
		}


	}

	/** removeAt(idx): return & remove item at idx, */

	removeAt(idx) {
		let count = 0;
		this.length = 0;

		let curr = this.head;

		if (idx < 0) {
			return null
		}

		if (idx == 0 && curr.next == null) {
			this.head = null;
			this.tail = null;
			return
		}

		while (curr != null) {
			if (count + 1 == idx) {
				curr.next = curr.next.next;
				this.length--;
			}
			this.length++;
			curr = curr.next;
		}
	}

	/** average(): return an average of all values in the list */

	average() {
		let curr = this.head;
		let sum = 0;

		if (curr == null) {
			return 0;
		}

		while (curr != null) {
			sum += curr.val;
			curr = curr.next;
		}

		return sum / this.length
	}
}

module.exports = LinkedList;