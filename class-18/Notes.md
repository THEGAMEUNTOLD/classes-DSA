## 1. Array Left Rotation by One

### Concept: Array Rotation

Array rotation means shifting the elements of an array in a circular manner.

* In left rotation, each element moves one position to the left
* The first element moves to the last position

Example:
`[1, 2, 3, 4, 5] → [2, 3, 4, 5, 1]`

---

### Concepts Used

#### 1. Temporary Variable

A temporary variable is used to store a value before it gets overwritten.

```javascript
let first = arr[0];
```

Here, the first element is stored so that it can be placed at the end after shifting.

---

#### 2. Loop for Shifting Elements

A `for` loop is used to shift each element one position to the left.

```javascript
for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
}
```

Each element takes the value of the next index.

---

#### 3. Placing the First Element at the End

After shifting, the saved element is placed at the last index.

```javascript
arr[arr.length - 1] = first;
```
---

## 2. Array Left Rotation by k Elements

### Concept: Rotation by k Positions

Left rotation by `k` means shifting elements `k` times towards the left.

Example:
`[1, 2, 3, 4, 5], k = 2 → [3, 4, 5, 1, 2]`

---

### Concepts Used

#### 1. Modulus Operator (%)

The modulus operator ensures that `k` does not exceed array length.

```javascript
k = k % n;
```

This avoids unnecessary rotations.

---

#### 2. New Array Creation

A new array is created to store the rotated result.

```javascript
let rotated = [];
```

---

#### 3. Splitting the Array

* First loop adds elements from index `k` to end
* Second loop adds elements from index `0` to `k-1`

```javascript
for (let i = k; i < n; i++) {
    rotated.push(arr[i]);
}
for (let i = 0; i < k; i++) {
    rotated.push(arr[i]);
}
```

## 3. Count of Subarrays with Sum Equal to Target

### Concept: Subarray

A subarray is a continuous part of an array.

Example:
Array `[1, 2, 3]`
Subarrays: `[1]`, `[1,2]`, `[1,2,3]`, `[2]`, `[2,3]`, `[3]`

---

### Concept: Prefix Sum

Prefix sum is the sum of elements from index `0` to index `i`.

```text
prefixSum[i] = arr[0] + arr[1] + ... + arr[i]
```

---

### Mathematical Logic Used

If:

```
prefixSum[j] - prefixSum[i] = target
```

Then:

```
prefixSum[i] = prefixSum[j] - target
```

This means a subarray with required sum exists.

---

### Concepts Used

#### 1. Hash Map (Map)

A `Map` stores prefix sums and their frequency.

```javascript
let map = new Map();
map.set(0, 1);
```

This handles subarrays starting from index 0.

---

#### 2. Running Sum

The prefix sum is updated while traversing the array.

```javascript
prefixSum += arr[i];
```

---

#### 3. Checking Required Condition

If `(prefixSum - target)` exists in the map, then a valid subarray is found.

```javascript
if (map.has(prefixSum - target)) {
    count += map.get(prefixSum - target);
}
```

---

#### 4. Updating the Map

The current prefix sum count is updated.

```javascript
map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
```


```javascript
// 1. Array Left Rotation by 1
function leftRotateByOne(arr) {
    if (arr.length === 0) return arr;

    let first = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = first;

    return arr;
}

// Example
console.log(leftRotateByOne([1, 2, 3, 4, 5]));


// 2. Array Left Rotation by k Elements
function leftRotateByK(arr, k) {
    let n = arr.length;
    if (n === 0) return arr;

    k = k % n;
    let rotated = [];

    for (let i = k; i < n; i++) {
        rotated.push(arr[i]);
    }
    for (let i = 0; i < k; i++) {
        rotated.push(arr[i]);
    }

    return rotated;
}

// Example
console.log(leftRotateByK([1, 2, 3, 4, 5], 2));


3. print the count of subrarrays whose sum  is equal to to the target  
function countSubarraysWithSum(arr, target) {
    let count = 0;
    let prefixSum = 0;
    let map = new Map();
    map.set(0, 1);

    for (let i = 0; i < arr.length; i++) {
        prefixSum += arr[i];

        if (map.has(prefixSum - target)) {
            count += map.get(prefixSum - target);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}

// Example
console.log(countSubarraysWithSum([1, 2, 3, -2, 5], 3));
```
