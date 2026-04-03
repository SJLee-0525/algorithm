const DATE = new Date()

console.log(DATE.getFullYear())
console.log(DATE.getMonth() < 9 ? "0" + (DATE.getMonth() + 1) : DATE.getMonth() + 1)
console.log(DATE.getDate() < 10 ? "0" + DATE.getDate() : DATE.getDate())
