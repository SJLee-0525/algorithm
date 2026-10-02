function solution(people, limit) {
    let ans = people.length;

    const sortedPeople = people.sort((a, b) => a - b);

    let l = 0, r = sortedPeople.length - 1;
    while (l < r) {
        if (sortedPeople[l] + sortedPeople[r] <= limit) {
            ans--;
            l++;
        };
        
        r--;
    };
    
    return ans;
}