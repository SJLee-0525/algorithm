const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [N, M] = input[0].split(' ').map(Number);

    const weeks = Array.from({ length: Math.floor((M - 1) / 7) + 1 }, () => new Object());
    const sortedSchedules = input.slice(1, N + 1).map((schedule) => {
        const [name, day, start, end] = schedule.split(' ');

        const week = Math.floor((Number(day) - 1) / 7);

        const [startHour, startMinute] = start.split(':').map(Number);
        const [endHour, endMinute] = end.split(':').map(Number);
        const broadcastTime = ((endHour * 60) + endMinute) - ((startHour * 60) + startMinute);

        return [name, week, broadcastTime];
    });

    for (let n = 0; n < N; n++) {
        const [name, week, broadcastTime] = sortedSchedules[n];

        if (!weeks[week][name]) weeks[week][name] = [1, broadcastTime];
        else {
            weeks[week][name][0]++;
            weeks[week][name][1] += broadcastTime;
        }
    }

    const candidates = new Set();
    for (const [name, [count, time]] of Object.entries(weeks[0])) {
        if (count >= 5 && time >= 3600) candidates.add(name)
    }

    if (weeks.length > 1) {
        for (let week = 1; week < weeks.length; week++) {
            for (const name of candidates.keys()) {
                if (!weeks[week][name] || weeks[week][name][0] < 5 || weeks[week][name][1] < 3600) {
                    candidates.delete(name);
                }
            }
        }
    }

    if (candidates.size === 0) console.log('-1');
    else console.log( Array(...candidates).sort().join('\n') );
}

solution(input);