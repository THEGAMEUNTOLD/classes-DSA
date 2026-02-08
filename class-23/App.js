// Given a string consisting of both uppercase and lowercase alphabets, your task is to toggle the case of each alphabet in the string. . If the character is uppercase, convert it to lowercase. . If the character is lowercase, convert it to uppercase. . Non-alphabet characters should remain unchanged.

// /**
//  * @param {string} str
//  * @return {string}
//  */
// function toggleCase(str) {
//     let result = "";
// 
//     for(let ch of str){
//         if(ch >= 'a' && ch <= 'z'){
//             result += ch.toUpperCase();       }
//         else if(ch >= 'A' && ch <= 'Z' ){
//             result += ch.toLowerCase();
//         }
//         else{
//             result += ch;
//         }
//     }
//     return result;
// }
// 
// module.exports = { toggleCase };

// Given an array of strings words and a string pref, write a program to count how many strings in the array start with the given prefix. The prefix must match exactly from the beginning of the string.


// /**
//  * @param {string[]} words
//  * @param {string} pref
//  * @return {number}
//  */
// function countPrefixMatch(words, pref) {
//     let count = 0;
// 
//     for (let word of words) {
//         if (word.startsWith(pref)) {
//             count++;
//         }
//     }
// 
//     return count;
// }
// 
// module.exports = { countPrefixMatch };

// Given a space-separated sentence, your task is to split it into individual words and capitalize both the first and last characters of each word. Return the modified sentence where every word has its first and last characters capitalized.

// /**
//  * @param {string} str
//  * @return {string}
//  */
// function capitalizeEnds(str) {
//     return str
//         .split(" ")
//         .map(word => {
//             if (word.length === 0) return word;
//             if (word.length === 1) return word.toUpperCase();
// 
//             let first = word[0].toUpperCase();
//             let middle = word.slice(1, -1);
//             let last = word[word.length - 1].toUpperCase();
// 
//             return first + middle + last;
//         })
//         .join(" ");
// }
// 
// module.exports = { capitalizeEnds };

// Given a string, write a program to count and print the frequency of each alphabetic character present in the string. . Ignore spaces in the input. . The output should be sorted alphabetically by character and should not contain any repetitions

// /**
//  * @param {string} str
//  * @return {void}
//  */
// function characterFrequency(str) {
//     const freq = {};
// 
//     for (let ch of str.toLowerCase()) {
//         if (ch >= 'a' && ch <= 'z') {
//             freq[ch] = (freq[ch] || 0) + 1;
//         }
//     }
// 
//     const sortedKeys = Object.keys(freq).sort();
// 
//     for (let ch of sortedKeys) {
//         console.log(`${ch}: ${freq[ch]}`);
//     }
// }
// 
// module.exports = { characterFrequency };


// An anagram is a word or phrase formed by rearranging the letters of another word or phrase, using all the original letters exactly once. Two words are considered anagrams if: . They are of equal length . They have the same frequency of each character

// /**
//  * Check if two strings are anagrams of each other.
//  * @param {string} s1 - First string
//  * @param {string} s2 - Second string
//  * @return {boolean} - true if anagrams, false otherwise
//  */
// function isAnagram(s1, s2) {
//     if (s1.length !== s2.length) return false;
// 
//     const freq = {};
// 
//     for (let ch of s1) {
//         freq[ch] = (freq[ch] || 0) + 1;
//     }
// 
//     for (let ch of s2) {
//         if (!freq[ch]) return false;
//         freq[ch]--;
//     }
// 
//     return true;
// }
// 
// module.exports = { isAnagram };


// You are given an array of strings sentences, where each sentences[i] represents a single sentence. A sentence is a list of words separated by a single space with no leading or trailing spaces. Write a program to find the maximum number of words that appear in any single sentence from the array. Input Format: T -> Number of Test Cases [s[0], s[1] ..... s[n-1]] -> Input string array


// function mostWordsFound(sentences) {
//     let maxWords = 0;
// 
//     for (let sentence of sentences) {
//         // Split sentence by spaces to count words
//         const wordCount = sentence.split(" ").length;
// 
//         // Update maxWords if this sentence has more words
//         if (wordCount > maxWords) {
//             maxWords = wordCount;
//         }
//     }
// 
//     return maxWords;
// }
// 
// module.exports = { mostWordsFound };

// Given a sentence, your task is to sort the words in sorted order. Each word in the sentence is separated by a single space. Return the sorted words as a new sentence, maintaining the case as provided in the input. Input Format : T : Number of Test Cases s : Input String

// function sortSentence(s) {
//     // Split the sentence into words
//     const words = s.split(" ");
// 
//     // Sort the words alphabetically
//     const sortedWords = words.sort();
//    
//     // Join them back into a sentence
//     return sortedWords.join(" ");
// }
// 
// module.exports = { sortSentence };



