// there are 3 elements in a loop
/*
    - Loop variable
    - Condition check
    - Iteration (loop variable)
   
*/

// dowhile

// loop variable
let i = 1;
do {
  console.log(i);
  // increment the value of i by 1
  i++;
} while (i < 11);

// extract all characters from a string
let x = "hello",
  temp = "",
  idx = 0;
do {
  temp += x.charAt(idx);
  idx++;
} while (idx < x.length);
console.log(temp);

// reverse of the String
idx = x.length - 1;
temp = "";
do {
  temp += x.charAt(idx);
  idx--;
} while (idx >= 0);
console.log(temp);
