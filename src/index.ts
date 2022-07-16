//variable
let age: number = 23;

//array
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

//object
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Fateme",
    retire: (date: Date) => console.log(date)
}

//type alias
//we can rewrite the object in this way, it's more readable and a best practice 
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
}

let newEmployee: Employee = {
    id: 2,
    name: "Ati",
    retire: (date: Date) => console.log(date)
}

//union type
//we can give a variable more than one type 
function kgToLbs(weight: number | string) :number {
    // narrowing
    if (typeof (weight) === "number")
        return weight * 2.2;
    else
        return parseInt(weight) * 2.2;
}

//intersection type
type Draggable = {
    drag: () => void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
    drag: () => { },
    resize: () => { }
}

//literal types
//sometimes we want to limite the values we can assign to a variable
type Quantity = 50 | 100;
let quantity: Quantity = 100;

//optional chaining
type Customer = {
    birthday: Date;
}

function getCustomer(id: number): Customer | null{
    return id === 0 ? null : { birthday: new Date() }
}

let customer = getCustomer(1);
//this line of code executes only if the getCustomer() does not return null
console.log(customer?.birthday)


