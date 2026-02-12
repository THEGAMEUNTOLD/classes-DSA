##  Introduction to Set (JavaScript — DSA)

A Set is a data structure used to store unique values.
This means a value can appear only once in a Set. If you try to add the same value again, it will not be stored twice.

In Data Structures and Algorithms (DSA), Sets are useful when we need:

* to remove duplicates
* to check if an element exists quickly
* to perform mathematical set operations (union, intersection, difference)

In JavaScript, a Set is a built-in object.

---

##  Creating a Set

```javascript
let numbers = new Set();
```

You can also create a Set with values:

```javascript
let numbers = new Set([1, 2, 3, 3, 4]);
console.log(numbers); 
// Output: {1, 2, 3, 4}
```

Duplicate values are automatically removed.

---

##  Common Set Methods

### 1. Add a value

```javascript
numbers.add(5);
```

### 2. Delete a value

```javascript
numbers.delete(2);
```

### 3. Check if value exists

```javascript
numbers.has(3); // true
```

### 4. Get size of Set

```javascript
numbers.size; 
```

### 5. Clear all values

```javascript
numbers.clear();
```

---

##  Why Set is Important in DSA

* Fast lookup of elements
* Removing duplicate items from arrays
* Solving problems like:

  * finding unique characters
  * checking repeated numbers
  * membership testing

Example — remove duplicates from an array:

```javascript
let arr = [1, 2, 2, 3, 4, 4];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4]
```