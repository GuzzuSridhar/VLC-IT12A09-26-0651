// Logical operators
// applied to 2 or more conditions
/*
    And
    Or
    Not
*/

// grouping the conditions

let sal = 9999;
let comm = 400;
let role = "manager";
let res;

// And operator (&&)
res = sal > 5000 && comm < 200;
console.log(res);

// Or operator (||)
res = sal > 5000 || comm < 200;
console.log(res);

// Not operator (!)
res = !(sal > 5000 || comm < 200);
console.log((res = !(sal > 5000 || comm < 200)));
console.log(!res);
