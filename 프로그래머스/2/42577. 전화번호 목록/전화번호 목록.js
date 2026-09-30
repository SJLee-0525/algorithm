class Node {
    constructor(val) {
        this.val = val;
        this.end = false;
        this.child = {};
    };
};

class Trie {
    constructor() {
        this.top = new Node(null);  
    };
    
    addPhoneNumber(phoneNum) {
        let cur = this.top;
        let isNew = false;
        
        for (let i = 0; i < phoneNum.length; i++) {
            if (!cur.child[phoneNum[i]]) {
                if (!isNew) isNew = true;
                cur.child[phoneNum[i]] = new Node(phoneNum[i]);
            };
            
            cur = cur.child[phoneNum[i]];
        };
        
        cur.end = true;
        
        if (isNew) return true;
        return false;
    };
};

function solution(phone_book) {
    const sortedPhoneBook = phone_book.sort((a, b) => b.length - a.length || a.localeCompare(b));
    
    const trie = new Trie();
    for (const phoneNum of sortedPhoneBook) {
        const isNew = trie.addPhoneNumber(phoneNum)
        if (!isNew) return false;
    };
    
    return true;
};