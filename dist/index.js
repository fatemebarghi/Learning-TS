"use strict";
let age = 23;
let numbers = [1, 2, 3];
let user = [1, "Fateme"];
;
let mySize = 1;
function calculateTax(income, taxYear = 2022) {
    if (income < 50000 && taxYear > 2018)
        return income * 0.3;
    else
        return income * 0.5;
}
let employee = {
    id: 1,
    name: "Fateme",
    retire: (date) => console.log(date)
};
let newEmployee = {
    id: 2,
    name: "Ati",
    retire: (date) => console.log(date)
};
function kgToLbs(weight) {
    if (typeof (weight) === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
