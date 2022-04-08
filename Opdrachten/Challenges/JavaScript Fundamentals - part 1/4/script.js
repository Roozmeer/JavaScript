const bill = 275;
let tip;

console.log(bill >= 50 && bill <= 300 ? tip = (bill * 0.15) : tip = (bill * 0.2))


// if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//     console.log(bill, tip);
// } else {
//     tip = bill * 0.2;
//     console.log(bill, tip);
// }
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);