
# Nested Loops and Pattern Programming

## 1. Nested Loop

### Definition

A nested loop is a loop placed inside another loop.
The inner loop executes completely for each single execution of the outer loop.

### General Syntax (JavaScript)

```javascript
for (initialization; condition; update) {
    for (initialization; condition; update) {
        // statements
    }
}
```

---

### Working Principle

* The outer loop controls the number of rows or iterations.
* The inner loop controls the number of columns or repeated operations within each row.
* For every one execution of the outer loop, the inner loop runs from start to end.

---

### Flow of Execution

1. Outer loop starts.
2. Inner loop executes fully.
3. Inner loop terminates.
4. Outer loop moves to the next iteration.
5. Steps repeat until the outer loop condition becomes false.

---

### Example: Basic Nested Loop

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(i, j);
    }
}
```

Output

```
1 1
1 2
2 1
2 2
3 1
3 2
```

---

## 2. Pattern Programming

### Definition

Pattern programming refers to printing structured designs using characters, numbers, or symbols.
Patterns are mainly used to:

* Understand nested loops
* Strengthen logical thinking
* Improve control over loop execution

---

### Important Observation

In pattern problems:

* Rows → controlled by the outer loop
* Columns / elements in each row → controlled by the inner loop

---

## 3. Star Pattern Examples

---

### Pattern 1: Square Pattern

```
* * * *
* * * *
* * * *
* * * *
```

#### Logic

* Number of rows = 4
* Number of columns in each row = 4

#### Code

```javascript
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= 4; j++) {
        row += "* ";
    }
    console.log(row);
}
```

---

### Pattern 2: Right-Angled Triangle

```
*
* *
* * *
* * * *
```

#### Logic

* Outer loop decides the row number
* Inner loop runs equal to the current row number

#### Code

```javascript
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
```

---

### Pattern 3: Inverted Right-Angled Triangle

```
* * * *
* * *
* *
*
```

#### Logic

* Outer loop runs from total rows to 1
* Inner loop runs up to the value of the outer loop

#### Code

```javascript
for (let i = 4; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += "* ";
    }
    console.log(row);
}
```

---

## 4. Number Pattern

### Pattern 4: Number Triangle

```
1
1 2
1 2 3
1 2 3 4
```

#### Logic

* Outer loop controls rows
* Inner loop prints numbers from 1 to current row

#### Code

```javascript
for (let i = 1; i <= 4; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j + " ";
    }
    console.log(row);
}
```

---

## 5. Time Complexity (DSA Perspective)

* Single loop → O(n)
* Nested loop (n × n) → O(n²)

Pattern programs mostly have quadratic time complexity, since the inner loop runs multiple times for each outer loop iteration.

---

## 6. Key Points to Remember

* Nested loops are essential for 2D problems.
* Outer loop → rows
* Inner loop → columns
* Pattern problems test:

  * Loop control
  * Logical sequencing
  * Time complexity understanding
