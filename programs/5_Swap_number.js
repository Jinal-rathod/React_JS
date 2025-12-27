// With out using 3rd variable

function Swap1(a, b) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log("After swaping value of a is ".concat(a));
  console.log("After swaping value of b is ".concat(b));
}
