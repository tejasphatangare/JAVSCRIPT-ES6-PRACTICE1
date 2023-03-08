// BEFORE TEMPLATE STRING
let user="tejas phatangare";
let greet="Congrats";
console.log("hello " +   user  +greet +  "thank you");

// AFTER TEMPLATE STRING 
let user1="tejaswi phatangare";
let greet1="congrats";
console.log(`hello ${user1} ${greet} thank you`);

// STORE THE TEMPLATE LITERAL METHODS IN VARIBALES
let name="tejas phatangare";
let msg="Good Morning";
let store=`hey ${name} ${msg} thank u`;
console.log(store);

// TEMPLATE LITERAL IN FUNCTION WITH RETURN VALUE;
let name1="tejas phatangare"
let age=20;
function test(name,age) {
    return ` hey ${name}  your age is ${age} thank you`
}
let test1=`hello ${test(name,age)}`;
console.log(test1)


                        // console.log(test("tejas",20));