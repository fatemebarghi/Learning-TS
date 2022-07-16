let age: number = 23;
let numbers: number[] = [1, 2, 3]

//tuple
let user: [number, string] = [1, "Fateme"]

//using PascalCase, enum
const enum Size { Small=1, Medium=2, Large=3 };
let mySize: Size = Size.Small;

//function
//If you want to pass an argument optional it's better to set a default value for it.
//As the best practice always annotate the arguments and retrun values in a function.
function calculateTax(income:number, taxYear = 2022):number {
    if (income < 50_000 && taxYear > 2018) 
        return income*0.3
    else
        return income*0.5
}

