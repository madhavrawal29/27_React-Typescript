// Primitives: number, string, boolean
// More complex types: arrays, objects
// Functions types, parameters


// Primitives

let age : number;

age = 30;

let userName : string;

userName = "Madhav";

let isCoach : boolean;

isCoach = true;

// More complex types

let hobbies : string[];

hobbies = ["Sports", "Cooking"];

type TypePerson = {
    name : string;
    age : number;
}

let person : TypePerson

person = {
    name : "Madhav",
    age : 30
}

// person = {
//     isEmployee: true
// }

let people: TypePerson[] ;

// Type Inference

let course = 'React - The Complete Guide'

// course = 123456                 // will give error


// Union Types

let myRealAge : number | string;

myRealAge = 30;

myRealAge = "Thirty years old";


// Functions & types

function add(a: number, b: number) {
    return a + b;
}

function print(value: any) {
    console.log(value)
}


// Generics

function insertAtBeginning<T>(array: T[], value: T){
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3, 4];

const updatedArray = insertAtBeginning(demoArray, -1) // [-1, 1, 2, 3, 4]	
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');