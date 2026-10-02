function solution(n) {
    const arr = Array(n + 1).fill(0)
    arr[0] = 1;
    arr[1] = 1;
    
    for (let a = 2; a < arr.length; a++) arr[a] = (arr[a - 2] + arr[a - 1]) % 1234567;

    return arr[n];
}