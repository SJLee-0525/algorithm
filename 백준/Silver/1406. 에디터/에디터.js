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
        this.cursor = null;
        this.front = null;
        this.tail = null;
    }

    typeLast(val) {
        const char = new Char(val);

        if (this.size === 0) {
            this.front = char;
            this.tail = char;
        } else {
            this.tail.next = char;
            char.prev = this.tail;
            this.tail = char;
        }

        this.size++;
        return;
    }

    moveToEnd() {
        if (this.size === 0) return null;

        this.cursor = this.tail;
    }

    moveLeft() {
        if (!this.cursor.prev) return null;

        this.cursor = this.cursor.prev;
        return;
    }

    moveRight() {
        if (!this.cursor.next) return null;

        this.cursor = this.cursor.next;
        return;
    }

    deleteLeftChar() {
        if (!this.cursor.prev) return null;

        const prev = this.cursor.prev;
        const next = this.cursor.next;

        if (next) {
            prev.next = next;
            next.prev = prev;
        } else {
            prev.next = null;
            this.tail = null;
        }
        
        this.cursor = prev;
        this.size--;
        return;
    }

    writeChar(val) {
        const char = new Char(val);

        const next = this.cursor.next;
        if (next) {
            char.next = next;
            next.prev = char;
        } else {
            this.tail = char;
        }

        this.cursor.next = char;
        char.prev = this.cursor;
        this.cursor = char;

        this.size++;
    }

    readText() {
        const ret = new Array();

        let cur = this.front.next;
        while (cur) {
            ret.push(cur.val);
            cur = cur.next;
        }

        return ret.join('').trim();
    }
}

const solution = (input) => {
    const initialStr = input[0].trim();

    const editor = new Editor();
    editor.typeLast(' ')
    for (const char of initialStr) editor.typeLast(char);
    editor.moveToEnd();

    const M = Number(input[1].trim());

    for (let m = 2; m < M + 2; m++) {
        const [cmd, ...info] = input[m].trim().split(' ');

        switch (cmd) {
            case 'L':
                editor.moveLeft();
                break;

            case 'D':
                editor.moveRight();
                break;

            case 'B':
                editor.deleteLeftChar();
                break;

            case 'P':
                editor.writeChar(info[0]);
                break;
            
            default:
                continue;
            }
        }
        
    console.log( editor.readText() );
}

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);