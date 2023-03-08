// EXAMPLE 1=
var a ="helllo";
var a="hello Tejas";
a="hello world";
console.log(a);
// WE CAN REDECLARE THE VAR VALUES

// EXAMPLE 2=
let b="HEYYY";
// let b="hey TEJAS";
b="HEYY TEJAS PHATANGARE";
console.log(b);
// WE CANT REDECLARE THE VALUES BUT WE CAN OVERRIDE THE VALUES

// EXAMPLE 3-
const c="Sam";
// const c="samruddhi";
// c="SAMR";
console.log(c);
// WE CANT REDECLARE VALUES AND ALSO WE CANT OVERRIDE THE VALUES

// SCOPE EXAMPLE:

// EXAMPLE-1=

if (true) {
  var x="HEY ES6"
}
console.log(x);

// EXAMPLE-2=

if (true) {
    let y="HEY ES6-Y"
  }
//   console.log(y); THROWS ERROR BECOZ OF BLOCK LEVEL SCOPE ONLY


// EXAMPLE-3=

if (true) {
    let Z="HEY ES6-Z"
  }
//   console.log(y); THROWS ERROR BECOZ OF BLOCK LEVEL SCOPE ONLY


for (var i=1; i<=5; i++ ){
  console.log("HELLO FRIENDS");
  console.log(i);          // WECAN ACCESS HERE WITH ALL KEYWORD
}
console.log(i);          // WE CAN NOT ACCESS HERE WITH LET KEYWORD