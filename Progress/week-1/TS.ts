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




// interface CallOrConstruct {
//   (n?: number): string;
//   new (s: string): Date;
// }
 
// function fn(ctor: CallOrConstruct) {
//   // Passing an argument of type `number` to `ctor` matches it against
//   // the first definition in the `CallOrConstruct` interface.
//   console.log(ctor(10));
               
// (parameter) ctor: CallOrConstruct
// (n?: number) => string
 
//   // Similarly, passing an argument of type `string` to `ctor` matches it
//   // against the second definition in the `CallOrConstruct` interface.
//   console.log(new ctor("10"));
                   
// (parameter) ctor: CallOrConstruct
// new (s: string) => Date
// }
 
// fn(Date);