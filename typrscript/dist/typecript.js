"use strict";
let myString = "This is string";
let myInt = 5;
let myFloat = 5.5;
let myBool = true;
let myArray = [1, 2, 3];
let list = [1, 2, 3];
let myAnyArray = [true, 9, "words"];
let ourTuple;
let myAny = "Five";
myAny = 5;
ourTuple = [5, false, 'Coding God was here'];
let myCarObj = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
const car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
const getTimeArrowFunc = () => {
    return new Date().getTime();
};
function getTime() {
    return new Date().getTime();
}
function printHello() {
    console.log('Hello!');
}
class Person {
}
const person = new Person();
person.name = "Jane";
const person2 = new Person();
person.name = "Jake";
console.log(myString);
var Directions;
(function (Directions) {
    Directions[Directions["North"] = 0] = "North";
    Directions[Directions["East"] = 1] = "East";
    Directions[Directions["South"] = 2] = "South";
    Directions[Directions["West"] = 3] = "West";
})(Directions || (Directions = {}));
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections["North"] = "North";
    CardinalDirections["East"] = "East";
    CardinalDirections["South"] = "South";
    CardinalDirections["West"] = "West";
})(CardinalDirections || (CardinalDirections = {}));
console.log(CardinalDirections.North);
console.log(CardinalDirections.West);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.NotFound);
console.log(StatusCodes.Success);
function createPair(v1, v2) {
    return [v1, v2];
}
console.log(createPair('hello', 42));
