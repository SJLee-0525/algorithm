function solution(s)
{
    const stack = Array();
    for (const c of s) {
        if (stack.length && stack[stack.length - 1] === c) stack.pop();
        else stack.push(c);
    };
    
    if (stack.length) return 0
    return 1;
}