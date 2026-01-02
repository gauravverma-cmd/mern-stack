// Loops are of many types => for, while, do while , foreach , forin , etc
// for (start; end; change) {}

// for (i = 1; i < 101; i++) {
//   console.log(i);
// }

//while ->

// start;
// while (end) {
//   code;

//   change;
// }

let i = 1;
while (i < 33) {
  console.log(i);
  i++;
}

// do while
let j = 13;
do {
  console.log(j); //isme km se km ek baar to loop chlega chye condition false hi kyu na ho
  j++;
} while (j < 1);

// Break in loops

for (k = 1; k < 200; k++) {
  console.log(k);
  if (k === 45) {
    // iska mtlb hai ki jb k ki value 45 ho jaye tb code of ruk jana hai
    break;
  }
}

//Continue

for (l = 1; l < 30; l++) {
  if (l === 2) {
    continue; // iska mtlb hai sare number print honge bs 32 nahi hoga
  }
  console.log(l);
}

//Question- Print even number from 1 - 20 using for loop

for (p = 1; p < 21; p++) {
  if (p % 2 === 0) {
    console.log(p);
  }
}
//Question- Print odd number from 1 - 20 using for loop

let u = 1;
while (u < 31) {
  if (u % 2 !== 0) {
    console.log(u);
  }
  u++;
}

//Question - Print the multiple of 5.

for (m = 1; m < 11; m++) {
  console.log(`5 * ${m} = ${5 * m}`);
}

//Question - Print the sum value of 1- 100

let sum = 0;
for (s = 1; s < 101; s++) {
  sum = sum + s;
}
console.log(sum);

// Question - The number is divisable by 3 and 5 upto 100;
for (c = 1; c < 101; c++) {
  if (c % 3 === 0 && c % 5 === 0) {
    console.log(c);
  }
}

// Question - Write a loop upto 100 and stop it on the first multiple of 7

for (f = 1; f < 101; f++) {
  console.log(f);
  if (f % 7 === 0) {
    break;
  }
}

// Question - Skip multipply by 3 upto 100

for (let t = 1; t < 21; t++) {
  if (t % 3 === 0) continue;
  console.log(t);
}
