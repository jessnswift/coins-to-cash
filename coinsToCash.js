const piggyBank = {
    pennies: 534,
    nickles: 507,
    dimes: 908,
    quarters: 900
}

const converter = {
    pennies: .01,
    nickles: .05,
    dimes: .10,
    quarters: .25
};

let myPennies = (piggyBank.pennies * converter.pennies);
let myNickles = (piggyBank.nickles* converter.nickles);
let myDimes = (piggyBank.dimes * converter.dimes);
let myQuarters = (piggyBank.quarters * converter.quarters);
let dollarAmount = (myPennies + myNickles + myDimes + myQuarters);

console.log(dollarAmount);