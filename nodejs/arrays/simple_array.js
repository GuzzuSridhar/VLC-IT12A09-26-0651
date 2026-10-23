// js supports hetrogenous elements in an array (elements of various types)

// declare an array
let names = ["Alex", "Dave", "Bill"];
// print the array to console
console.log(names);

// access array elements (zero based index)
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);

console.log(
  "---------Accessing array elements using traditional for loop---------",
);
// loop thru array using traditional loop
for (let i = 0; i < names.length; i++) {
  console.log(names[i]);
}

console.log(
  "---------Accessing array elements using enhanced for loop---------",
);
// loop thru array using enhanced for loop
for (const x in names) {
  console.log(names[x]);
}
