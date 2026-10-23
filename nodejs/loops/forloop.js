// simplest syntax of a loop

//  all 3 elements on a single declaration
// no additional declaration of a loop variable

// print numbers 1 to 10
for (let i = 1; i < 11; i++) {
  console.log(i);
}

// extract characters of a string
let fname = "john",
  temp = "";
for (let i = 0; i < fname.length; i++) {
  temp += fname.charAt(i);
}
console.log(temp);

// extract reverse of  string
temp = "";
for (let i = fname.length - 1; i >= 0; i--) {
  temp += fname.charAt(i);
}
console.log(temp);
