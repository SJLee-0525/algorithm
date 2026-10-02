// 65- 90
function solution(str1, str2) {
    const checkValid = (c) => {
        const ascii = c.charCodeAt();
        if ((65 <= ascii && ascii <= 90) || 97 <= ascii && ascii <= 122 ) return true;
        else return false;
    };
    
    const jacid = (arr, c1, c2) => {
        if (checkValid(c1) && checkValid(c2)) arr.push(c1.toUpperCase() + c2.toUpperCase());
    }
    
    const arr1 = Array();
    for (let s1 = 1; s1 < str1.length; s1++) {
        jacid(arr1, str1[s1 - 1], str1[s1])
    };
    
    const arr2 = Array();
    for (let s2 = 1; s2 < str2.length; s2++) {
        jacid(arr2, str2[s2 - 1], str2[s2])
    };
    
    const U = Array(), A = Array();
    const makeUA = (S, L) => {
        const usedS = Array(S.length).fill(0);
        const usedL = Array(L.length).fill(0);
        
        const findE = (s) => {
            for (let l = 0; l < L.length; l++) {
                if (S[s] === L[l] && !usedL[l]) {
                    usedL[l] = 1;
                    A.push(S[s]);
                    U.push(S[s]);
                    return;
                };
            };
            
            usedS[s] = 1;
            U.push(S[s]);
            return;
        };
        
        for (let s = 0; s < S.length; s++) findE(s);
        for (let u = 0; u < L.length; u++) if (!usedL[u]) U.push(L[u]);
    };
    
    if (arr1.length <= arr2.length) makeUA(arr1, arr2);
    else makeUA(arr2, arr1);
    
        // console.log(A.length, U.length, 0/0, 1/1, 1/0, 0/1)

    if (U.length === 0) return 65536;
    return Math.floor((A.length / U.length) * 65536);
}