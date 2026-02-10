
#  Algorithm Complexity — 

## 1. What is Complexity?

Algorithm complexity measures how the resource usage of an algorithm grows as input size increases.

Two main resources:

* Time Complexity → execution time
* Space Complexity → memory usage

We express complexity as a function of input size n.

---

## 2. Time Complexity

Time complexity describes how fast an algorithm runs.

Instead of measuring seconds, we count number of operations.

Example:
If an algorithm runs a loop n times → time depends on n.

### Common Time Complexities 

| Complexity | Name         | Example              |
| ---------- | ------------ | -------------------- |
| O(1)       | Constant     | Access array element |
| O(log n)   | Logarithmic  | Binary search        |
| O(n)       | Linear       | Single loop          |
| O(n log n) | Linearithmic | Merge sort           |
| O(n²)      | Quadratic    | Nested loops         |
| O(2ⁿ)      | Exponential  | Subset generation    |
| O(n!)      | Factorial    | Permutations         |

---

## 3. Handling Large Inputs

When input size is large (like n = 10⁵ or 10⁶), algorithm choice matters.

### Rough Performance Guide

| n size | Acceptable Complexity |
| ------ | --------------------- |
| 10⁶    | O(n)                  |
| 10⁵    | O(n log n)            |
| 10⁴    | O(n²)                 |
| 20–25  | O(2ⁿ)                 |

Rule of thumb:
Choose the fastest possible complexity for large n

This is critical in competitive programming 

---

## 4. Complexity Representation

We represent complexity using Asymptotic Notation.

### Big-O Notation → Upper Bound

Describes worst-case growth.

Example:

```
T(n) = 3n² + 5n + 2 → O(n²)
```

### Omega (Ω) → Lower Bound

Best case performance.

### Theta (Θ) → Tight Bound

Exact growth rate.

---

## 5. Graph Representation of Complexity

As input size increases:

* O(1) → flat line
* O(log n) → slow growth
* O(n) → straight line
* O(n²) → curve upward
* O(2ⁿ) → extremely steep

Growth speed comparison:

```
O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ) < O(n!)
```

This order is very important in exams and interviews.

---

## 6. Generating Complexity Equations

To find time complexity:

### Step 1 → Count loops

Single loop → O(n)

### Step 2 → Nested loops

```
for i in range(n):
    for j in range(n):
```

Total operations = n × n = O(n²)

### Step 3 → Sequential statements

Add complexities, keep largest term.

Example:

```
O(n² + n + 1) → O(n²)
```

### Step 4 → Logarithmic patterns

If input reduces by half each step → O(log n)

Example: binary search

---

## 7. TLE (Time Limit Exceeded)

TLE occurs when algorithm is too slow for input size.

Typical cause:

* Using O(n²) when O(n) is required
* Infinite loops
* Heavy recursion

Example:
If judge allows 10⁸ operations per second:

* n = 10⁵ with O(n²) → 10¹⁰ operations → TLE

So complexity must match input size.

---

## 8. Space Complexity

Space complexity measures extra memory used.

Includes:

* Variables
* Data structures
* Recursion stack

### Examples

| Code Pattern      | Space |
| ----------------- | ----- |
| Single variable   | O(1)  |
| Array of size n   | O(n)  |
| 2D matrix n×n     | O(n²) |
| Recursive depth n | O(n)  |

Important idea:
-> Sometimes we reduce time by using more space (time-space tradeoff).

---

## 9. Types of Complexity Cases

Algorithms can behave differently depending on input.

### Best Case

Minimum time required.

### Average Case

Expected performance.

### Worst Case

Maximum time required 


Example:
Linear search

* Best → element first → O(1)
* Worst → element last → O(n)
