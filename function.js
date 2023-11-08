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


const arrowFunctionExampleTwo = () => 'hello world arrowFunctionExampleTwo'
console.log(arrowFunctionExampleTwo())


const ae1 = (name) =>  `hello ${name}`
console.log(ae1(`Izzy`))

const ae3 = () => {
    return 'hello kyle and joy!'
}

console.log(
    () => {
        return 'hello kyle and joy!'
    }
)

console.log(
    ae3
)

//the logs are the same in that they are logging out functions. one is anonymous. the other has a name of ae3.

//defaulting parameters



const logThing = (thing = 'lettuce') => {
    console.log(thing)
}

logThing(); //will log lettuce because the default value of 'thing' is lettuce
logThing('tomato'); //will log tomato because we are using the default anymore. We are actually using tomato

const manyArgs = (...arg) => {
    console.log(arg);
}

manyArgs(1)

manyArgs(1, 'jonny', 'legos', 'squid')

// passing in objects as parameters

const myFunc = (argObj) => {
    console.log(argObj.cheese)
    console.log(argObj.bread)
}

myFunc({cheese: 'gouda', bread: 'rye'})


const theBestTeach = (teacherName) => {
    return { name: teacherName }
}

const x = theBestTeach('Izzy')
console.log(x.name)

//lets add another property to another function
//this time instead of the property being a string, we will add a function to it 
//fun fact: a function inside objects called methods
//declare a variable called 'y' and invoke the function.
// the y variable will be an Object. 
//the object will have a property called name and function aka method called teach
//therefore we can do y.teach() and have it log out the 'im teaching!' string
const theBestTeachForReal = (teacherName) => {
    return { 
        name: teacherName,
        teach: () => console.log('im teaching!')
    }
}

const y = theBestTeachForReal('kyle');
console.log(y)

// passing functions as arguments
// callback pattern

const sf = (cb) => {
    cb()
}

const theCbF = () => {
    console.log('this function wsa used as an argument')
}

sf(theCbF);
