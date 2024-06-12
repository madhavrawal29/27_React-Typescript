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

let person : {
    name : string;
    age : number;
}

person = {
    name : "Madhav",
    age : 30
}

// person = {
//     isEmployee: true
// }

let people: {
    name : string;
    age : number;
}[];

// Type Inference

let course = 'React - The Complete Guide'

// course = 123456                 // will give error


// Union Types

let myRealAge : number | string;

myRealAge = 30;

myRealAge = "Thirty years old";