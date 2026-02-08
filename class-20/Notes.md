## Searching Algorithms in Data Structures (JavaScript)

Searching is the process of locating a specific element inside a collection of data. The goal is to determine whether the element exists and, if it does, to find its position.

Two fundamental searching techniques are Linear Search and Binary Search.

---

## 1. Linear Search

### Definition

Linear search examines each element of the array sequentially, starting from the first element and continuing until the target value is found or the array ends.

### Characteristics

* Works on sorted or unsorted arrays
* Simple and easy to implement
* Compares elements one by one
* No preprocessing required

### Algorithm Steps

1. Start from index `0`.
2. Compare the current element with the target.
3. If they are equal, return the index.
4. Move to the next element.
5. If the end of the array is reached, return `-1`.

### JavaScript Implementation

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;
        }
    }
    return -1;
}
```


### When to Use

* Small datasets
* Unsorted data
* Simplicity is preferred over speed

---

## 2. Binary Search

### Definition

Binary search is an efficient searching technique that repeatedly divides a sorted array into halves to locate a target value.

### Key Requirement

The array must be sorted before applying binary search.

### Working Principle

Binary search compares the target with the middle element of the array:

* If equal → element found
* If target is smaller → search left half
* If target is larger → search right half
  This process continues until the element is found or the search space becomes empty.

### Algorithm Steps

1. Set two pointers: `left = 0`, `right = array length − 1`.
2. Find middle index.
3. Compare middle element with target.
4. Narrow the search range accordingly.
5. Repeat until found or range becomes invalid.

### JavaScript Implementation

```javascript
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) return mid;

        if (arr[mid] < target)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return -1;
}
```

### Why Binary Search is Faster

Each step eliminates half of the remaining elements.
For example:

* 1,000 elements → about 10 comparisons
* 1,000,000 elements → about 20 comparisons

---

## Linear Search vs Binary Search

| Feature          | Linear Search          | Binary Search     |
| ---------------- | ---------------------- | ----------------- |
| Data Requirement | Unsorted allowed       | Must be sorted    |
| Speed            | Slow for large data    | Very fast         |
| Implementation   | Very simple            | Moderate          |
| Best Use Case    | Small or unsorted data | Large sorted data |



1. Linear search in array If the element found Print the index else -1

```javascript
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i;   // element found → return index
        }
    }
    return -1;          // element not found
}
```

### Example

```javascript
const arr = [1, 2, 3, 4, 5];

console.log(linearSearch(arr, 3)); // 2
console.log(linearSearch(arr, 10)); // -1
```


