let myString: string = "This is string"
let myInt: Number = 5 

let myFloat: Number = 5.5

let myBool: boolean = true

let myArray: Number[]  = [1,2,3]
let list: Array<number> = [1, 2, 3];
let myAnyArray: any = [true, 9, "words"]
// define our tuple
let ourTuple: [number, boolean, string]

let myAny: any = "Five"
myAny = 5



// initialize correctly
ourTuple = [5, false, 'Coding God was here']

let myCarObj = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
}

// the `: number` here specifies that this function returns a number
const getTimeArrowFunc = (): number => {
    return new Date().getTime()
}

function getTime(): number {
    return new Date().getTime()
  }

function printHello(): void {
    console.log('Hello!')
}

class Person {
    name: string | undefined;
}
  
const person: Person = new Person()
person.name = "Jane"
const person2 = new Person()
person.name = "Jake"

console.log(myString)

// enums
// By default, enums will initialize the first value to 0 and add 1 to each additional value

enum Directions {
    North,
    East,
    South,
    West
}
// let currentDirection = CardinalDirections.North;
// logs 0
// console.log(currentDirection);
// throws error as 'North' is not a valid enum
// currentDirection = 'North'; // Error: "North" is not assignable to type 'CardinalDirections'.

enum CardinalDirections {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West)

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}
// logs 404
console.log(StatusCodes.NotFound);
// logs 200
console.log(StatusCodes.Success);

//#####   Basic Generics   #####
// Functions
// Generics with functions help make more generalized methods which more accurately represent the types used and returned.

function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}
console.log(createPair<string, number>('hello', 42)); 
//> ['hello', 42]
