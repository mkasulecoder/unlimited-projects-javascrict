// for Loops

// for (initializer; condition; increment / decrement) {
//     statements
// }

// Used only when working with 1 statement
for (let i = 0; i < 5; i++) console.log("Loop " + i);

console.log("========== EVEN Numbers ============");

// for Multiple statements
for (let i = 0; i < 5; i++) {
  //checking for even numbers
  if (i % 2 == 0) console.log("Even " + i);
}

console.log("========= ODD Numbers =============");

for (let i = 0; i < 5; i++) {
  //checking for odd numbers
  if (i % 2 != 0) console.log("Odd " + i);
}

console.log("========= Reverse Numbers =============");

for (let i = 5; i > 0; i--) {
  //checking for odd numbers
  console.log("Reverse numbers " + i);
}

for (let i = 5; i > 0; i--) {
  //checking for odd numbers
  if (i % 2 != 0) console.log("Odd " + i);
}

console.log("========= Print numbers in list =============");

let list = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < list.length; i++) {
  //checking for odd numbers
  console.log("Number in list is " + i);
}

// While Loops
// while (condition) {
//   //statements
// }

let w = 0;

while (w < 5) {
  console.log("While loop " + w);
  w++;
}

//Never for get to increment or decrement the index

// How to get the sum using while loop
let total = 0;
let p = 0;
while (p < 10) {
  total += p;
  p++;
}
// sum is returned outside
let result = document.getElementById("while-loop");
result.innerText = total;
console.log("Total is: " + total);

// Do while Loops
// do {
//statements
//increment
//}
// while (condition);

let k = 0;
let sum_K = 0;
do {
  sum_K += k;
  k++;
} while (k < 8);

console.log("Sum of K: " + sum_K);
