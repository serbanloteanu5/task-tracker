/* filename: complex_code.js */

// This code snippet is a complex implementation of a data structure called "Trie" 
// that is used for efficient string searching and matching.

class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in node.children)) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }

        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;

        for (let i = 0; i < word.length; i++) {
            const char = word[i];
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }

        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;

        for (let i = 0; i < prefix.length; i++) {
            const char = prefix[i];
            if (!(char in node.children)) {
                return false;
            }
            node = node.children[char];
        }

        return true;
    }
}

// Usage example:
const trie = new Trie();
trie.insert("apple");
trie.insert("banana");
trie.insert("grape");

console.log(trie.search("apple")); // Output: true
console.log(trie.search("banana")); // Output: true
console.log(trie.search("grape")); // Output: true
console.log(trie.search("orange")); // Output: false

console.log(trie.startsWith("ban")); // Output: true
console.log(trie.startsWith("app")); // Output: true
console.log(trie.startsWith("or")); // Output: false

// Complex code continues...
// More functions, validations, and optimizations can be added to the Trie data structure.