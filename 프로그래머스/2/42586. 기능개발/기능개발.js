function solution(progresses, speeds) {
    var answer = [];
    
    let maxDay = -1, cnt = 1;
    for (let i = 0; i < progresses.length; i++) {
        const remainDay = Math.ceil((100 - progresses[i]) / speeds[i]);
        if (maxDay === -1) {
            maxDay = remainDay
        } else if (maxDay < remainDay) {
            answer.push(cnt);
            maxDay = remainDay;
            cnt = 1;
        } else cnt++;
    };
    
    if (cnt > 0) answer.push(cnt);
    
    return answer;
}