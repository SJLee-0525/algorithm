const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

const STUDIES = {
    'Algorithm': '204',
    'DataAnalysis': '207',
    'ArtificialIntelligence': '302',
    'CyberSecurity': 'B101',
    'Network': '303',
    'Startup': '501',
    'TestStrategy': '105'
};

const solution = (input) => {
    const N = Number(input[0].trim());
    const res = Array();
    
    for (let n = 1; n <= N; n++) {
        const study = input[n].trim();
        res.push(STUDIES[study]);
    };
    
    console.log( res.join('\n') );
};

solution(input);