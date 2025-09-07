class Tony {
    constructor() {
        this.maxHeap = [null];
        this.minHeap = [null];
        this.levels = new Object(); // 난이도 모음 { 난이도: Set() {문제 목록} }
        this.problems = new Map();  // 문제 모음 { 문제 번호 => 난이도 }
    }

    levelPush(p, l) {
        if (!this.problems.has(p)) this.problems.set(p, l);

        // 레벨 값이 있는 경우 힙 갱신하지 않고, 레벨별 정보만 갱신 후 리턴
        if (this.levels[l]) {
            this.levels[l].add(p);
            return;
        } 
        
        this.maxHeap.push(l);
        this.minHeap.push(l);
        
        this.levels[l] = new Set([p]); // 새 난이도가 들어왔으니까, 난이도 추가 후 문제 추가
        
        // 최대 힙
        if (this.maxHeap.length === 2) return;
        
        let maxCur = this.maxHeap.length - 1, maxPar = Math.floor(maxCur / 2);
        while (maxPar !== 0) {
            if (this.maxHeap[maxCur] > this.maxHeap[maxPar]) {
                [this.maxHeap[maxCur], this.maxHeap[maxPar]] = [this.maxHeap[maxPar], this.maxHeap[maxCur]];
            } else break;

            maxCur = maxPar;
            maxPar = Math.floor(maxCur / 2);
        }
        
        // 최소 힙
        if (this.minHeap.length === 2) return;

        let minCur = this.minHeap.length - 1, minPar = Math.floor(minCur / 2);
        while (minPar !== 0) {
            if (this.minHeap[minCur] < this.minHeap[minPar]) {
                [this.minHeap[minCur], this.minHeap[minPar]] = [this.minHeap[minPar], this.minHeap[minCur]];
            } else break;

            minCur = minPar;
            minPar = Math.floor(minCur / 2);
        }

        return;
    }

    maxLevelPop() {
        if (this.maxHeap.length === 1) return null;
        else if (this.maxHeap.length === 2) return this.maxHeap.pop();

        this.maxHeap[1] = this.maxHeap.pop();

        let cur = 1, left = 2, right = 3;
        while ((left < this.maxHeap.length && this.maxHeap[cur] < this.maxHeap[left]) 
            || (right < this.maxHeap.length && this.maxHeap[cur] < this.maxHeap[right])) {
            if (right >= this.maxHeap.length || this.maxHeap[left] > this.maxHeap[right]) {
                [this.maxHeap[cur], this.maxHeap[left]] = [this.maxHeap[left], this.maxHeap[cur]];
                cur = left;
            } else {
                [this.maxHeap[cur], this.maxHeap[right]] = [this.maxHeap[right], this.maxHeap[cur]];
                cur = right;
            }

            left = cur * 2;
            right = left + 1;
        }

        return this.maxHeap[1];
    }

    minLevelPop() {
        if (this.minHeap.length === 1) return null;
        else if (this.minHeap.length === 2) return this.minHeap.pop();

        this.minHeap[1] = this.minHeap.pop();

        let cur = 1, left = 2, right = 3;
        while ((left < this.minHeap.length && this.minHeap[cur] > this.minHeap[left]) 
            || (right < this.minHeap.length && this.minHeap[cur] > this.minHeap[right])) {
            if (right >= this.minHeap.length || this.minHeap[left] < this.minHeap[right]) {
                [this.minHeap[cur], this.minHeap[left]] = [this.minHeap[left], this.minHeap[cur]];
                cur = left;
            } else {
                [this.minHeap[cur], this.minHeap[right]] = [this.minHeap[right], this.minHeap[cur]];
                cur = right;
            }

            left = cur * 2;
            right = left + 1;
        }

        return this.minHeap[1];
    }

    recommend(x) {
        // console.log(this.maxHeap, this.minHeap);
        // console.log(this.levels, this.problems);
        // console.log('\n\n');

        if (x === 1) {
            let highestLevel = this.maxHeap[1]; // 가장 높은 난이도
            
            // 가져온 난이도에 문제가 없다면 최대 힙에서 난이도 제거하면서 갱신
            while (!this.levels[highestLevel]) {
                highestLevel = this.maxLevelPop();  
            }

            // 번호가 가장 높은 문제
            let ans = -Infinity;
            for (const p of this.levels[highestLevel]) {
                if (p > ans) ans = p;
            }
            return ans;
        } else {
            let lowestLevel = this.minHeap[1]; // 가장 낮은 난이도

            // 가져온 난이도에 문제 없다면 최소 힙에서 난이도 제거하면서 갱신
            while (!this.levels[lowestLevel]) {
                lowestLevel = this.minLevelPop();   
            }

            // 번호가 가장 낮은 문제
            let ans = Infinity;
            for (const p of this.levels[lowestLevel]) {
                if (p < ans) ans = p;
            }
            return ans;
        }
    }

    solve(p) {
        if (!this.problems.has(p)) return null;
        
        // 문제에서 난이도 가져오고 문제 모음에서 제거
        const problemLevel = this.problems.get(p); 
        this.problems.delete(p);

        // 난이도에서 문제 제거 후, 해당 난이도에 남은 문제가 더 이상 없으면 난이도 모음에서도 제거
        this.levels[problemLevel].delete(p);
        if (this.levels[problemLevel].size === 0) delete this.levels[problemLevel];

        return;
    }
}

const solution = (input) => {
    const res = new Array();
    let idx = 0;

    const tonyList = new Tony();

    const N = Number(input[idx++].trim());
    for (let n = 0; n < N; n++) {
        const [p, l] = input[idx++].trim().split(' ').map(Number); 
        tonyList.levelPush(p, l);
    }

    const M = Number(input[idx++].trim());
    for (let m = 0; m < M; m++) {
        const [cmd, ...info] = input[idx++].trim().split(' ');

        if (cmd === 'add') {
            const [p, l] = info.map(Number);
            tonyList.levelPush(p, l);
        } else if (cmd === 'recommend') {
            const [x] = info.map(Number);
            res.push( tonyList.recommend(x) );
        } else {
            const [p] = info.map(Number);
            tonyList.solve(p);
        }
    }

    console.log(res.join('\n'));
}

// --------------------------------------------------------------------------------------

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

solution(input);