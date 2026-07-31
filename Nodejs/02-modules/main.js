const { addfnc, subfnc } = require("./maths");
console.log(
  "the value of sub is : ",
  subfnc(2, 4),
  "and the value of add is : ",
  addfnc(2, 6),
);

// We made modules because modules are the small small part of code that we made in our appliation to maintain the maintainablity , scalabilty and readbilty of our code.
// To import the module we used the built-in function of the node is (require function).
// And that's how we can use the multiples module in a program
