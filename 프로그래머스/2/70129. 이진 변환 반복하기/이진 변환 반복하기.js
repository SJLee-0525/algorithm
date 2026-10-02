function solution(s) {
    let converted = 0, deleted = 0;
    let c = s;
    
    while (c !== '1') {
        converted++;
        
        let l = 0;
        for (let i = 0; i < c.length; i++) {
            if (c[i] === '1') l++;
            else deleted++;
        };
        c = l.toString(2);
    };
    
    return [converted, deleted];
}