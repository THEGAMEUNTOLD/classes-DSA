## Arrays in JavaScript 

### Definition of an Array

An array is a linear data structure that is used to store a collection of elements under a single variable name.
Each element in an array is stored at a contiguous memory location and can be accessed using an index.

In JavaScript, an array is a dynamic data structure, meaning its size can grow or shrink at runtime.

---

### Why Arrays are Used in DSA

Arrays are used because:

1. They allow efficient storage of multiple values.
2. They provide fast access to elements using index values.
3. They are the foundation for many advanced data structures such as:

   * Stacks
   * Queues
   * Matrices
   * Strings (internally)

---

### Characteristics of Arrays

1. Linear Data Structure
   Elements are arranged sequentially, one after another.

2. Index-Based Access
   Each element is accessed using an index starting from `0`.

3. Homogeneous or Heterogeneous

   * In theory (DSA): arrays store similar data types.
   * In JavaScript: arrays can store different data types.

4. Contiguous Memory (Conceptually)
   In DSA, arrays are assumed to occupy continuous memory locations.

---

### Array Declaration in JavaScript

```javascript
let arr = [10, 20, 30, 40, 50];
```

Here:

* `arr` is the array name
* `10, 20, 30, 40, 50` are elements
* Index starts from `0`

| Index | 0  | 1  | 2  | 3  | 4  |
| ----- | -- | -- | -- | -- | -- |
| Value | 10 | 20 | 30 | 40 | 50 |

---

### Accessing Array Elements

```javascript
console.log(arr[0]); // 10
console.log(arr[3]); // 40
```

Access time complexity: O(1)

---

### Traversing an Array

Traversal means visiting each element exactly once.

```javascript
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
```

Time Complexity: O(n)

---

### Insertion in an Array

* At the end (easy):

```javascript
arr.push(60);
```

* At the beginning:

```javascript
arr.unshift(5);
```

* At a specific index:

```javascript
arr.splice(2, 0, 25);
```

Time Complexity:

* End insertion: O(1)
* Beginning/middle insertion: O(n)

---

### Deletion from an Array

```javascript
arr.pop();      // removes last element
arr.shift();    // removes first element
arr.splice(2,1); // removes element at index 2
```

Time Complexity:

* End deletion: O(1)
* Beginning/middle deletion: O(n)

---

### Searching in an Array

1. Linear Search

```javascript
for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 30) {
        console.log("Element found at index", i);
    }
}
```

Time Complexity: O(n)

2. Binary Search (array must be sorted)
   Time Complexity: O(log n)

---

### Advantages of Arrays

1. Fast element access using index
2. Simple implementation
3. Efficient for fixed-size data storage

---

### Disadvantages of Arrays

1. Insertion and deletion are costly
2. Fixed size concept (in classical DSA)
3. Memory wastage may occur

---

### Applications of Arrays in DSA

* Pattern problems
* Sorting algorithms
* Searching algorithms
* Matrix operations
* Implementing other data structures
