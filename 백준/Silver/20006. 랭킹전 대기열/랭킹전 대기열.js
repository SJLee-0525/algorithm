class Room {
    constructor(playerLevel, playerName) {
        this.level = playerLevel;
        this.players = [[playerLevel, playerName]];
    };

    sortByName() {
        this.players.sort((a, b) => a[1] < b[1] ? -1 : 1);
    };
};


class Game {
    constructor(M) {
        this.limit = M;
        this.rooms = new Array();
    };

    enter(playerLevel, playerName) {
        const room = this.rooms.find((room) => {
            if (room.players.length < this.limit && room.level - 10 <= playerLevel && playerLevel <= room.level + 10) return true;
        })

        if (room) room.players.push([playerLevel, playerName]);
        else {
            const newRoom = new Room(playerLevel, playerName);
            this.rooms.push(newRoom);
        };
    };

    print() {
        const res = Array();

        this.rooms.forEach((room) => {
            room.players.length < this.limit ? res.push('Waiting!') : res.push('Started!');

            room.sortByName();
            res.push( room.players.map(player => player.join(' ')).join('\n') );
        });

        console.log( res.join('\n') );
    };
};


const solution = (input) => {
    const [P, M] = input[0].trim().split(' ').map(Number);
    const game = new Game(M);

    for (let p = 1; p <= P; p++) {
        const [l, n] = input[p].trim().split(' ');
        game.enter(Number(l), n);
    };

    game.print();
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);