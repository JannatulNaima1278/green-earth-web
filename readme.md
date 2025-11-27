1/ What is the difference between var, let and const ?
Ans: var is function-scoped, can be redeclared and reassigned, and is hoisted with an initial value of undefined. let is block-scoped, cannot be redeclared but can be reassigned, and is hoisted into a temporal dead zone. const is block-scoped, cannot be redeclared or reassigned, and is also hoisted into the temporal dead zone.


2/ What is the difference between map(), forEach(), and Filter()?
Ans: map() transform every element of an array and returns a new array of the same length, used for modifying data. filter() selects elements based on a condition and returns a new array containing only the matching elements, used for subsetting data. forEach() iterates over the array to execute a function for the side effects and always returns undefined.


3/ What are arrow functions in ES6 ?
Ans: Arrow functions in ES6 are a concise syntax for function expressions that are primarily used for their handling of this keyword.
Lexical this: they do not bind their own this. they inherit it from the surrounding scope, solving common issues in callbacks and methods.
Conciseness: They offer implicit returns for single-expressions bodies and optional parentheses for a single argument.
Limitations: They cannot be used as contructors, and they do not have the arguments object.


4/How does destructing assignment work in ES6?
Ans: Destructuring assignment in an ES6 syntax that allows us to unpack values from arrays and properties from objects directly into distinct variables, simplifying data extraction.


5/Explain template literals in ES6. How are they different from string concatenation?
Ans: Template literals use backticks(``) instead of quotes, enabling string interpolation via ${expression} to embed varriables directly. they differ from string concatenation(+) by supporting multi-line strings without the \n escape sequence and offering far superior readability for dynamic strings. 