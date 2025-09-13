class Char {
    constructor(val) {
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

class Editor {
    constructor() {
        this.size = 0;
        this.front = null;
        this.tail = null;
        this.cursor = null;
    }

    moveLeft() {
        if (!this.cursor.prev) return null;

        this.cursor = this.cursor.prev;
    }

    moveRight() {
        if (!this.cursor.next) return null;

        this.cursor = this.cursor.next;
    }

    write(val) {
        const char = new Char(val);
        
        if (this.size === 0) {
            this.front = char;
            this.tail = char;
            this.cursor = char;
            this.size++;
            return;
        }
        
        if (this.cursor.next) {
            char.next = this.cursor.next;
            this.cursor.next.prev = char;
            char.prev = this.cursor;
            this.cursor.next = char;
        } else {
            this.cursor.next = char;
            char.prev = this.cursor;
        }

        this.cursor = char;
        this.size++;
    }

    backSpace() {
        if (!this.cursor.prev) return null;

        if (this.cursor.next) {
            this.cursor.prev.next = this.cursor.next;
            this.cursor.next.prev = this.cursor.prev;
        } else {
            this.cursor.prev.next = null;
            this.tail = this.cursor.prev;
        }
        
        this.cursor = this.cursor.prev;
        this.size--;
    }

    print() {
        const ret = new Array();

        let cur = this.front.next;
        while (cur) {
            ret.push(cur.val);
            cur = cur.next;
        }

        return ret.join('');
    }
}

const solution = (input) => {
    const res = new Array();

    const T = Number(input[0].trim());

    for (let tc = 1; tc <= T; tc++) {
        res.push( testcase(input[tc].trim()) );
    }

    console.log(res.join('\n'));
}   

const testcase = (cmdInput) => {
    const editor = new Editor();
    editor.write('');
    
    for (const cmd of cmdInput) {
        switch (cmd) {
            case '<':
                editor.moveLeft();
                break;

            case '>':
                editor.moveRight();
                break;

            case '-':
                editor.backSpace();
                break;
            
            default:
                editor.write(cmd);
        }
    }

    return editor.print().trim();
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);