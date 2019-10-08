/* Section intro file

alert("hello");*/


/*log to console

console.log("Hello world");
console.log(123);
console.log(true);
var greeting="hello";
console.log(greeting);
console.log([1,2,3,4,5]);
console.log({a:1,b:2});
console.table({a:1,b:2});
console.error("this is some error");
console.clear();
console.warn("this is a warning");
console.time("hello");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
    console.log("Hello world");
console.timeEnd("hello");*/

/*var,let,const*/

// var name='john';
// console.log(name);
// name="steve smith"//reassign variable
// console.log(name);

//  //initialiaze variable
// var greeting;
// console.log(greeting);//undefined
// greeting="hello";
// console.log(greeting);

// //letters,numbers,_,$
// //can not start with number

// //Multi word vars
// var firstName="john";//Camel Case
// var first_name="sara"//Underscore
// // var FirstName="tom";//Pascal case
// // var firstname;

// // //LET
// // let name;
// // name='john';
// // console.log(name);
// // name="steve smith"//reassign variable
// // console.log(name);

// //CONST(CONSTANT)
// const name="john";
// console.log(name);
// //Can not be reassigned
// // name="sara";
// // console.log(name);//typeError
// // //have to assign to value
// // const greeting;//syntaxError

// //the only way you can reassign const
// const person={
//   name:"john",
//   age:"32"
// }//for object
// console.log(person.name="sara",person.age=28);
// console.log(person);

// const number=[1,2,3,4,5,6];//with array
// number.push(7);
// console.log(number);

//P rimitive Data TYPE
// * String
// * Number
// * Boolean
// * null
// * undefined
// * symbols(ES6)

//reference data type
// * Arrays
// * Object
// * Functions
// * Date

//Primitive

// //string
// const name="john doe";
// //Number
// const age=23;
// const haskids=true;
// //null
// const car = null;
// let test;
// //symbol
// const sym=Symbol();

// //REFERENCE TYPES - object
// //Array
// const hobbies=['movies','music'];
// //object literal
// const address={
//   city:"Boston",
//   state:"Ma"
// }
// //Date
// const date=new Date();

// console.log(date);
// console.log(typeof date);

let val;
 
//Number to string
val=String(555);
val=String(4+4);
//Boolean to String
val=String(true);
//Date to string
val=String(new Date());
//Array to string
val=String([1,2,3,4]);

//string to NUmmber
val=Number('5');
//Boolean to Number
val=Number(true);//1
val=Number(false);//0
//null to number
val = Number(null);//0
val=Number("hi"); //NAN
val=Number([1,2,3,4]);//NAN

val=parseFloat("10.3")


//output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(2));


