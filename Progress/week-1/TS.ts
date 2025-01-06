// console.log(4 / []);

// const obj = { width: 10, height: 15 };
// const area = obj.width * obj.heigth;


// console.log("typsecript basics")

// let age: number = 21;
// let name_: String = "Bemnet";
// let dept: String = "SW";


// interface Person {
//   name: string;
//   age: number;
// }

// function printId(id: string | number): void {
//     console.log(`ID: ${id}`);
// }

// printId(101);    // Valid
// printId("abc");   // Valid


// interface Person {
//     name: string;
//     age: number;
// }

// interface Contact {
//     email: string;
//     phone: string;
// }

// type Employee = Person & Contact;

// const employee: Employee = {
//     name: "Alice",
//     age: 30,
//     email: "alice@example.com",
//     phone: "123-456-7890"
// };



// type Person = {
//     name: string;
//     age: number;
// };

// // Making all properties optional
// type PartialPerson = {
//     [K in keyof Person]?: Person[K];
// };

// const partialPerson: PartialPerson = {
//     name: "Alice"
// };
