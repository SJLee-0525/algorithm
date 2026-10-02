function solution(prices) {
    const stack = Array();
    const history = Array(prices.length).fill(0);
    
    for (let p = 0; p < prices.length; p++) {
        if (!stack.length || stack[stack.length - 1][0] <= prices[p]) {
            stack.push([prices[p], p]);
        } else {         
            while (stack.length && stack[stack.length - 1][0] > prices[p]) {
                const [_, s] = stack.pop();
                history[s] = p - s;
            };
            
            stack.push([prices[p], p]);
        };
    };
    
    while (stack.length) {
        const [_, s] = stack.pop();
        history[s] = history.length - s - 1;
    };

    return history;
}