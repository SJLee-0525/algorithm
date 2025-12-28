const solution = (input) => {
    const [N, M] = input[0].trim().split(' ').map(Number);

    const adjL = Array.from({ length: N + 1 }, () => Array());
    for (let m = 1; m <= M; m++) {
        const [U, V] = input[m].trim().split(' ').map(Number);
        adjL[U].push(V);
        adjL[V].push(U);
    };

    const destroyedCitiesList = input[M + 2].split(' ').map(Number);
    const destroyedCities = Array(N + 1).fill(false);
    const checkedCities = Array(N + 1).fill(false);
    for (const distroyedCity of destroyedCitiesList) destroyedCities[distroyedCity] = true;

    function checkAdj(city) {
        if (!destroyedCities[city]) return false;
        for (const anotherCity of adjL[city]) if (!destroyedCities[anotherCity]) return false;

        checkedCities[city] = true
        for (const anotherCity of adjL[city]) checkedCities[anotherCity] = true;
        
        return true;
    };

    const candidateCitiesList = Array();
    for (let city = 1; city <= N; city++) if (checkAdj(city)) candidateCitiesList.push(city);

    if (!candidateCitiesList.length) return '-1';
    for (let city = 1; city <= N; city++) if (destroyedCities[city] !== checkedCities[city]) return '-1';

    return `${candidateCitiesList.length}\n${candidateCitiesList.sort((a, b) => a - b).join(' ')}`;
};

/////////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

console.log( solution(input) );