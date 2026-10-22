// a block of code is statements within {}
// blocks are used in control structures such as if, else, for, while, switch

// annonymous block to understand the scope of variables
{
  let fname = "John";
  // redeclare within the scope of previous name variable is not allowed
  //   let name = "John";
  console.log(fname);
}
// redeclare outside the scope of previous name variable
let name = "John";
console.log(fname);
