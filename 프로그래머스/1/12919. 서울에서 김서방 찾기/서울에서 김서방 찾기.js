function solution(seoul) {
    for (let s = 0; s < seoul.length; s++) {
        if (seoul[s] === 'Kim') return `김서방은 ${s}에 있다`
    }
}