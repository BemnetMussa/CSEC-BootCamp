


// let person = {
//     name: "John",
//     age: 30,
//     city: "New York"
// }
// let a = 'age';
// console.log(person[a])



// const a = document.getElementById('val');
// a.textContent = "Hello World";



// let userName = null;
// userName = "John";

// userName = userName ?? "Guest";
// console.log(userName)


// document.querySelector('img').addEventListener('click', (event) => {
//     const name = event.target;
//     name.setAttribute('src', '/CSEC-Bootcamp-frontend-basics/Ecommers/img/image.png')
// })




// const myname = prompt("Please enter your name:");
// if (myname !== null) {
//     // User clicked 'OK' and entered a name
//     localStorage.setItem("name", myname);
// } else {
//     // User clicked 'Cancel' or closed the prompt
//     console.log("User cancelled the prompt.");
// }




// if (!localStorage.getItem("name")) {
//     const myname = prompt("please enter your name. ")
//     localStorage.setItem("name", myname);
// } else {
//   const storedName = localStorage.getItem("name");
//   const myHeading = document.querySelector('button');
//   myHeading.textContent = `Mozilla is cool, ${storedName}`;
// }


// const z = () => { // enter new scope, TDZ starts
//     let log = function () {
//         console.log(message); // messagedeclared later
//     };

//     log()
//     // This is the TDZ and accessing log
//     // would cause a ReferenceError

//     // for this if you use 'let' then the funciton call will cause reference error but if you set to 'var' then it will be undefined
//     var message= 'Hello'; // TDZ ends
//     log(); // called outside TDZ
// }

// console.log(z())


// const obj = {
//     'name': 'John',
//     'age': 30,
//     'city': 'New York'
// }

// // it is an object
// console.log(obj)
// console.log(typeof(obj))

// // string representation of the object
// console.log(JSON.stringify(obj))
// console.log(typeof(JSON.stringify(obj)))



// const obj = {
//     'name': 'John',
//     'age': 30,
//     'city': 'New York'
// }

// const { name: n, age: a, city: c} = obj;

// console.log(n, a, c)




// // 
// const nums = [1,2,4, 5, 6, 7, 8, 9, 10];

// const sum = nums.reduce((a, b) => a+b);

// console.log(sum)



// let example = "s"; 

// console.log(example.padEnd(10, 1));
// console.log(example.padStart(101).length);

// function is_it() {
//     console.log("Hello World")
// }

// const Animal = require('./animal.js');

// let dog = new Animal('dog');

// dog.speak();
// dog.nam();




// const [first, ...rest] = [1, 2, 3, 5, 5, 6, 7]

// console.log(first, rest)

// const greet = (name = "Guest") => `Hello, ${name}`;

// function greet2(name = "guest") {
//     return `Hello, ${name}`;
// }
// console.log(greet());  // Outputs: Hello, Guest
// console.log(greet("John"));  // Outputs: Hello, John


// for (var i = 0; i < 5; i++) {
//     (function (i) {
//         setTimeout(function () {
//             console.log(i);
//         }, 1000);
//     })(i);
// }

// // on this the veariable i is a global variable because the var points to the global scope of i which is 5

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//         console.log(i);
//     }, 1000);
// }






// let scores = [75, 80, 95];

// for (let score of scores) {
//     score = score + 5;
// 	console.log(score);
// }


// for (const score of scores) {
 
//     console.log(score);
// }


// // it doesn't allows us to redeclare the varaible 
// let counter = 0;
// let counter = 2;


// // it allows us to redeclare the varaible 
// var counter = 0;
// var counter = 2;




// const d = () => {
//     var r = 5;
//     let q = 6;
// }
// d()


// console.log(r)



// let person = {
//   name: 'John',
//   age: 25,
// };

// function increaseAge(obj) {
//   obj.age += 1;

//   // reference another object
//   obj = { name: 'Jane', age: 22 };
// }

// increaseAge(person);

// console.log(person);


// function square(x) {
//     x = x * x;
//     return x = 204
// }

// let y = 10;
// let result = square(y);

// console.log(result); // 100 
// console.log(y); // 10 -- no change


