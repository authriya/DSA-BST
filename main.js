class BinarySearchTree {
    constructor(key = null, value = null, parent = null){
    this.key = key;
    this.value = value;
    this.parent= parent;
    this.left = null;
    this.right = null;
    }
    insert(key, value) {
        if(this.key == null) {
            this.key = key;
            this.value = value;
        } else if(key < this.key) {
            if(this.left == null){
                this.left = new BinarySearchTree(key, value, this)
            } else {
                this.left.insert(key, value);
            }
        }
        else {
            if(this.right == null) {
                this.right = new BinarySearchTree(key, value, this)
            } else {
                this.right.insert(key, value)
            }
        }
    }
    find(key) {
        if(this.key == key) {
            return this.value;
        } else if(key < this.key && this.left) {
            return this.left.find(key)
        } else if (key > this.key && this.right) {
            return this.right.find(key)
        } else {
            throw new Error('Key Error')
        }
    }
    remove(key) {
        if(this.key == key) {
            if(this.left && this.right) {
                const successor = this.right._findMin()
                this.key = successor.key;
                this.value = successor.value;
                successor.remove(successor.key)
            }
            else if(this.left) {
                this._replaceWith(this.left)
            } else if(this.right) {
                this._replaceWith(this.right)
            } else {
                this._replaceWith(null)
            }
        } else if (key < this.key && this.left) {
            this.left.remove(key)
        } else if (key > this.key && this.right) {
            this.right.remove(key)
        } else {
            throw new Error('Key Error')
        }
    }
    _replaceWith(node) {
        if(this.parent) {
            if(this == this.parent.left) {
                this.parent.left = node
            } else if ( this == this.parent.right ) {
                this.parent.right = node
            } if(node) {
                node.parent = this.parent
            }
        } else {
            if(node) {
                this.key = node.key
                this.value = node.value
                this.left = node.left
                this.right = node.right
            } else {
                this.key = null;
                this.value = null;
                this.left = null;
                this.right = null;
            }
        }
    }
    _findMin() {
        if (!this.left) {
            return this
        }
        return this.left._findMin();
    }
}

//                        3
//            1                       4
//                    2                           6
//                                            5         9
//                                                    7
//                       
//                        E
//            A                       S
//                            Q                    Y
//                        E                   U
//                            I           S
//                               O           T
//                            N             

//2 remove root= two separate trees

//            1                       4
//                    2                           6
//                                            5         9
//                                                    7
//                       

//            A                       S
//                            Q                    Y
//                        E                   U
//                            I           S
//                               O           T
//                            N             


const BST = new BinarySearchTree();

BST.insert(3, 3);
BST.insert(1, 1);
BST.insert(4, 4);
BST.insert(6, 6);
BST.insert(9, 9);
BST.insert(2, 2);
BST.insert(5, 5);
BST.insert(7, 7);

const BSTAlph = new BinarySearchTree();

BSTAlph.insert(E, E)
BSTAlph.insert(A, A)
BSTAlph.insert(S, S)
BSTAlph.insert(Y, Y)
BSTAlph.insert(Q, Q)
BSTAlph.insert(U, U)
BSTAlph.insert(E, E)
BSTAlph.insert(S, S)
BSTAlph.insert(T, T)
BSTAlph.insert(I, I)
BSTAlph.insert(O, O)
BSTAlph.insert(N, N)

console.log(BST)
console.log(BSTAlph)

//4. 

function tree(t) {
    if (!t) {
      return 0;
    }
    return tree(t.left) + t.value + tree(t.right);
  }

//trying to add all values in a tree

console.log(tree(BST))

//5.

function height(t, counter = 0) {

    if(!t) {
        return 0
    } else {
        counter++

        let left = counter;
        let right = counter;

        if(t.left) {
            left = height(t.left, counter);
        }
        if(t.right) {
            right = height(t.right, counter)
        }
        return left > right ? left : right
    }
}

//time complexity= O(1) best case (single node) O(n) worst case

function isItATree(t) {
    if(!t) {
        return null
    }
    let leftCondition
    let rightCondition
    if(t.left < t) {
        leftCondition = isItATree(t.left)
    } else {
        return false
    }

    if(t.right > t) {
        rightCondition = isItATree(t.right)
    } else {
        return false
    }

    return !leftCondition || !rightCondition ? false : true
}

function returnArrayValues(t, array = []) {
    if(!t) {
        return null
    } else {
        array.push(t.key)
        if(t.left) {
            array = returnArrayValues(t.left, array)
        }
        if(t.right) {
            array = returnArrayValues(t.right, array)
        }
    }
    return array
}

function returnThirdLargest(t) {
    let unsorted = returnArrayValues(t)
    unsorted.sort((a, b) => a < b)
    return unsorted[2]
}

function balanced(t, count = 0) {
    if(!t) {
        return count;
    }
    if( t !== null) {
        count++

        let left = 0
        let right = 0

        right = balanced(t.right, count);
        if (right === false) {
            return false;
        }

        left = balanced(t.left, count);
        if(left === false) {
            return false
        }

        return Math.abs(left-right) > 1 ? false : right + left
    }
}

function findHighest(arr1, value) {
    if(!arr1) {
        return;
    } if(arr1[0] > value) {
        return arr1[0]
    } if(arr1[1]) {
        return findHighest(arr1.slice[1], value)
    }
}

function BSTIdentical(arr1, arr2) {
    if(arr1[0] !== arr2 [0]) {
        return false
    }
    arr1.sort();
    arr2.sort();

    if(arr1.length !== arr2.length) {
        return false
    }

    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}