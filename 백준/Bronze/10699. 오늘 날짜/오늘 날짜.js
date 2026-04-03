let today = new Date().toLocaleString("ko-KR", { timeZone: "Asia/Seoul" })

const DATE = today.split(". ")

const YEAR = DATE[0]
const MONTH = DATE[1].length === 1 ? "0" + DATE[1] : DATE[1]
const DAY = DATE[2].length === 1 ? "0" + DATE[2] : DATE[2]

console.log(`${YEAR}-${MONTH}-${DAY}`)
