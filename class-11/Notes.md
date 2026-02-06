## Break Statement

The `break` statement is a control statement used inside loops (`for`, `while`, `do-while`) and `switch` statements.
Its main purpose is to immediately terminate the execution of the loop or switch block.

When the `break` statement is encountered, the program exits the loop entirely and control is transferred to the statement following the loop.

### Key Points

* Used to stop a loop before its normal ending condition
* Commonly used when a required condition is met
* After `break`, no further iteration occurs

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        break;
    }
    console.log(i);
}
```

Output:

```
1
2
```

Explanation:
When `i` becomes 3, the `break` statement executes and terminates the loop.

---

## Continue Statement

The `continue` statement is also a loop control statement.
It is used to skip the current iteration of the loop and move directly to the next iteration.

Unlike `break`, `continue` does not terminate the loop. It only skips the remaining code inside the loop for the current cycle.

### Key Points

* Used to skip specific iterations
* Loop continues until its condition becomes false
* Useful when certain values need to be ignored

### Example

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}
```

Output:

```
1
2
4
5
```

Explanation:
When `i` is 3, the `continue` statement skips the `console.log` and proceeds to the next iteration.

---

## Difference Between Break and Continue

| Break                          | Continue                             |
| ------------------------------ | ------------------------------------ |
| Terminates the loop completely | Skips only the current iteration     |
| Control moves outside the loop | Control moves to the next loop cycle |
| Used to stop execution         | Used to ignore specific conditions   |
