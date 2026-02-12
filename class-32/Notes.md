##  Introduction to Map in JavaScript (For DSA)

In Data Structures and Algorithms (DSA), we often need to store data in a way that allows fast searching, inserting, and updating. One useful structure in JavaScript for this purpose is the Map.

A Map is a built-in object that stores data in key–value pairs.
Each key is unique, and each key points to a value.

You can think of a Map like a real dictionary:

* The word is the key
* The meaning is the value

---

##  Why Map is Important in DSA

Map is widely used in problem solving because it provides:

 Fast lookup of values
 Storage of unique keys
 Ability to use any data type as a key
 Maintains insertion order
 Efficient frequency counting

Many DSA problems like:

* counting elements
* checking duplicates
* storing visited nodes
* hashing techniques

are easily solved using Map.

---

##  Creating a Map

```javascript
let map = new Map();
```

This creates an empty Map.

---

##  Basic Operations

### 1. Add data

```javascript
map.set("apple", 3);
map.set("banana", 5);
```

### 2. Get value

```javascript
console.log(map.get("apple")); // 3
```

### 3. Check if key exists

```javascript
console.log(map.has("banana")); // true
```

### 4. Delete key

```javascript
map.delete("apple");
```

### 5. Size of Map

```javascript
console.log(map.size);
```

---

##  Example in DSA — Frequency Counter

Count how many times each number appears in an array.

```javascript
let arr = [1, 2, 2, 3, 1, 2];
let freq = new Map();

for (let num of arr) {
    freq.set(num, (freq.get(num) || 0) + 1);
}

console.log(freq);
```

This technique is very common in coding interviews.
