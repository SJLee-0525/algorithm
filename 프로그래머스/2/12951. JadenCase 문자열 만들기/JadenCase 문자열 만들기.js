function solution(s) {
    let ans = '';
    
    let i = 0, w = '';
    while (i < s.length) {   
        while (i < s.length && s[i] !== ' ') {
            w += s[i++];
        };
        
        if (w !== '') {
            let jaden = w[0].toUpperCase();
            for (let j = 1; j < w.length; j++) jaden += w[j].toLowerCase();
            ans += jaden;
            w = ''
        } else ans += s[i++];
    };
    
    return ans;
}