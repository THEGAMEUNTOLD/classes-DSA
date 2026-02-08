#  STRINGS IN JAVASCRIPT (For DSA)

## 1️ What is a String?

A **string** is a sequence of characters.

```javascript
let str = "hello";
let name = 'John';
let text = `Welcome`;
```

Strings are:
-> Immutable (cannot be changed directly)
-> Indexed (each character has a position)
-> Iterable (can loop through)

---

## 2 String Indexing

Each character has an index starting from **0**.

```javascript
let str = "hello";

console.log(str[0]); // h
console.log(str[1]); // e
console.log(str.length); // 5
```

-> Last character:

```javascript
str[str.length - 1]
```

Very common in DSA problems.

---

## 3️ Important String Methods for DSA

###  length

Returns number of characters.

```javascript
"hello".length // 5
```

Used in:

* palindrome problems
* loops
* two-pointer technique

---

###  toLowerCase() / toUpperCase()

```javascript
"HELLO".toLowerCase() // "hello"
"hello".toUpperCase() // "HELLO"
```

Used in:

* case-insensitive comparison
* anagram problems

---

###  trim()

Removes spaces from start and end.

```javascript
"  hello  ".trim() // "hello"
```

Used in:

* input cleaning
* word problems

---

###  slice(start, end)

Extracts part of string.

```javascript
let str = "javascript";

str.slice(0, 4) // "java"
str.slice(4)    // "script"
str.slice(-3)   // "ipt"
```

Used in:

* substring problems
* reversing
* pattern matching

---

###  substring(start, end)

Similar to slice but:
Does NOT support negative index

```javascript
"hello".substring(1, 4) // "ell"
```

In DSA → slice is preferred.

---

###  indexOf()

Finds first occurrence.

```javascript
"hello".indexOf("l") // 2
"hello".indexOf("z") // -1
```

Used in:

* searching
* duplicate detection

---

###  includes()

Checks if substring exists.

```javascript
"hello".includes("ell") // true
```

Used in:

* pattern problems
* filtering

---

###  split()

Converts string → array

```javascript
"hello".split("")      // ['h','e','l','l','o']
"a b c".split(" ")     // ['a','b','c']
```

VERY IMPORTANT for DSA.

Used in:

* reversing string
* frequency count
* word problems

---

### join()  (Array → String)

```javascript
['h','e','l','l','o'].join("") // "hello"
```

Used with split().

---

###  replace()

Replaces first match.

```javascript
"hello".replace("l", "x") // "hexlo"
```

Replace all:

```javascript
"hello".replaceAll("l", "x") // "hexxo"
```

---

###  repeat()

```javascript
"ha".repeat(3) // "hahaha"
```

Used in pattern building.

---

# 4️ Looping Through a String

### Method 1 — for loop

```javascript
let str = "hello";

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}
```

### Method 2 — for…of

```javascript
for (let ch of "hello") {
    console.log(ch);
}
```

---

# 5 Most Common DSA String Patterns

##  Reverse a String

```javascript
let str = "hello";

let reversed = str.split("").reverse().join("");
```

OR manual (important for interviews):

```javascript
let result = "";

for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
}
```

---

##  Check Palindrome

```javascript
let str = "madam";

let reversed = str.split("").reverse().join("");

console.log(str === reversed);
```

Two-pointer approach (better for DSA):

```javascript
let left = 0;
let right = str.length - 1;

while (left < right) {
    if (str[left] !== str[right]) {
        console.log(false);
        break;
    }
    left++;
    right--;
}
```

---

##  Count Character Frequency

```javascript
let str = "banana";
let map = {};

for (let ch of str) {
    map[ch] = (map[ch] || 0) + 1;
}

console.log(map);
```

Output:

```
{ b:1, a:3, n:2 }
```
