function solution(arr) {
    const uclid = (a, b) => {
        if (a % b === 0) return b
        return uclid(b, a % b)
    };
        
    while (arr.length > 1) {
        const a = arr.pop();
        const b = arr.pop();
        arr.push(
            (a * b) / uclid(a, b)
        );
    };
    
    return arr[0];
}