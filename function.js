///////////////////////
/* let money = 0;

function ag(){
    money = money + 1;
}

ag() // money = 0 + 1 
ag() // money = 1 + 1 
ag() // money = 2 + 1 
console.log(money);


///////////////////////
function roman(){
   return money + 1;
}

roman() //returning a value of 1 
roman() //returning a value of 1  
roman() //returning a value of 1 

 //money will be 1 (If we comment out the three ag()'s)
console.log(
    money
)
*/
///////////////////////
/*
hoisting: The concept of hoisting refers to the behavior of how variable and function declarations are processed during the compilation phase before code execution.
due to hositing this will work:
*/
console.log(greet
    ('david')
    )

function greet(n){
    return `hello ${n}`;
}

/*
we can use parameters in our functions. In this function declaration, we have greet followed by a pair of parentheseis. Inside is n this is a parameter. We can many parameters (keep them low) and name them whatever we want.
when we invoke the function greet('david') the 'david' is the arguements used and therefore if we log it, it will result in
hello david
*/


const greeting = function(name){
    return `Hello, ${name}!`
}

console.log(greeting('Izzy')) // Hello, Izzy!


const arrowFunctionExample = () => {
    return 'hello world arrowFunctionExample';
}
console.log(arrowFunctionExample());


