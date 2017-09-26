// type error
let count = 5;
count = 'a';

// variable not assigned. Type equals 'any'
let a;
a = 1;
a = 'abc';
a = true;
a = {};

// specifying type without initialing
let b: number;
b = 1;
b = 'abc';
b = true;
b = {};

// types of variables
let a1: number;
let a2: boolean;
let a3: string;
let a4: any;
let a5: number[] = [1,2,3];
let a6: any[] = [1,true,'a', false];

// enum
// enum Color { Red, Green, Blue};
enum Color { Red = 0, Green = 1, Blue = 2}; // specify value to avoid errors due to future addition of values
let backgroundColor = Color.Red;