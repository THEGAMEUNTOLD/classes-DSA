
##  What Is a `do...while` Loop?

A `do...while` loop is a way to repeat a block of code until a condition becomes false.
The special thing about `do...while` is that it runs the code once before checking the condition.
So even if the condition is false at the start, the code inside the loop will still run one time.

---

##  How It Works

1. First, the code inside the `{ }` runs at least once.
2. After running the code, JavaScript checks the condition in the `while(...)`.
3. If the condition is true, the loop runs again.
4. If the condition is false, the loop stops.

---

##  Structure 

```
do {
   // step 1: do this first
   // step 2: do more tasks
} while (condition); 
```

We do the steps inside `{ }`, and then check the condition. If the condition is true, we do it again.

---

##   Example

Let’s say we want to print numbers from 1 to 5:

```javascript
let number = 1;

do {
  console.log(number);
  number++;
} while (number <= 5);
```

* First, it prints `1`.
* Then it adds `1` (so number = 2).
* It checks: 2 ≤ 5 → true → loop again.
* This continues until number becomes 6.
* 6 ≤ 5 → false → loop stops.

Output:

```
1
2
3
4
5
```

---

##  Example with False at Start

```javascript
let number = 10;

do {
  console.log("Hello!");
} while (number < 5);
```

Here, `number < 5` is false from the start. But the message prints **once** because `do...while` runs the code before checking the condition.

Output:

```
Hello!
```

---

##  When Do You Use `do...while`?

Use it when you must run some code at least once, and then continue running it only if a condition is true.

Example:

* Asking a user for input until they give a correct answer
* Showing a menu at least one time
* Repeating a task until done, but always do it once first
