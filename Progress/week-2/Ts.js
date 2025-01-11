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
// let random: String = "TS";
// console.log("Compiling the ts file");
// if (random == ''){
//     random = "js";
// }
// let d: number = 24;
// let init = 24;
// let level;
// let user: [number, string] = [1, 'b'];
// // problematic 
// user.push(24);
// console.log(user)
// enums
// to represent three characterstic of one object using
// const small = 1;
// const medium = 2;
//PascalCase
// by using const we can create more optimized code on the js file
// without it iti s pretty lengthy 
// const enum Size {Small = 1, Medium, Large};
// let mySize: Size = Size.Medium;
// console.log(mySize)
// function claculator(val: number): void {
//     console.log(val * val)
// }
// function claculatodr(val: number): number {
//     if (val > 240)
//         return val * 24;
//     return 0
// }
// function claculator(val: number, tax: 25): void {
//     if (tax < 24)
//         console.log(val * val)
// }
// initialiing the object 
// let employee: {
//     readonly id: number,
//     name: string,
//     retire: (data: Date) => void
// } = { id: 1,
//       name: 'be',
//       retire: (data: Date) => {
//     console.log("no")
// }};
