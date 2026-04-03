const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('').map(String);

const solution = (input) => {
    const vowels = ['a', 'i', 'y', 'e', 'o', 'u'];
    const consonants = ['b', 'k', 'x', 'z', 'n', 'h', 'd', 'c', 'w', 'g', 'p', 'v', 'j', 'q', 't', 's', 'r', 'l', 'm', 'f'];

    const std = new Set(vowels);

    for (let s = 0; s < input.length; s++) {
        const asciiChar = input[s].charCodeAt();

        if (!((65 <= asciiChar && asciiChar <= 90) || (97 <= asciiChar && asciiChar <= 122))) continue;

        const isUpperCase = asciiChar > 90 ? false : true;
        const lowerChar = input[s].toLowerCase();
        
        let char = null;

        if (std.has(lowerChar)) {
            let idx = vowels.findIndex((vowel) => vowel === lowerChar);
            char = vowels[(idx + 3) % vowels.length];
        } else {
            let idx = consonants.findIndex((consonant) => consonant === lowerChar);
            char = consonants[(idx + 10) % consonants.length];
        };

        input[s] = isUpperCase ? char.toUpperCase() : char;
    };

    console.log(input.join(''));
};

solution(input);