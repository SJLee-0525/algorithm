const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const solution = (input) => {
    const [openTime, closeTime] = input[0].trim().split(' ').map((time) => time.split(':').map(Number));
    const operatingTime = (closeTime[0] * 60 + closeTime[1]) - (openTime[0] * 60 + openTime[1]);

    const [N, T] = input[1].trim().split(' ').map(Number);

    const oneDayNeedTime = Math.floor((operatingTime - 1) / T);
    const needDay = Math.floor(N / oneDayNeedTime);

    const remainTime = (N % oneDayNeedTime) + 1;

    const arriveMinute = openTime[0] * 60 + openTime[1] + remainTime * T;
    const arriveHour = Math.floor(arriveMinute / 60);
    const arriveTime = arriveMinute % 60;

    const hh = String(arriveHour).padStart(2, '0');
    const mm = String(arriveTime).padStart(2, '0');

    console.log(needDay.toString());
    console.log(`${hh}:${mm}`);
}

solution(input);
