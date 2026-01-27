let myDate = new Date()
console.log(myDate)
console.log(myDate.toDateString())
console.log(myDate.toISOString())

let myCreatedD = new Date(2025, 0, 12) // Month starts from zero => January #also (2023-12-1) YYYY-DD-MM or MM-DD-YYYY
console.log(myCreatedD)

let myCreatedDate = new Date(2025, 0, 12,5,3)
console.log(myCreatedDate.toLocaleString()) // Most customizable 