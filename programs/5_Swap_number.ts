// With out using 3rd variable

function Swap1(a: number, b: number) {
  a = a + b;
  b = a - b;
  a = a - b;
  console.log(`After swaping value of a is ${a}`);
  console.log(`After swaping value of b is ${b}`);
}

Swap1(15, 20);

// Using 3rd variable

function Swap2(a: number, b: number) {
  let c: Number = a;
  a = b;
  b = c;
  console.log(`After swaping value of a is ${a}`);
  console.log(`After swaping value of b is ${b}`);
}

Swap2(25, 30);

// Swap 3 value using 3rd variable

function Swap4(a: number, b: number, c: number) {
  let d: number = a;
  a = b;
  b = c;
  c = d;
  console.log(`After swaping value of a is ${a}`);
  console.log(`After swaping value of b is ${b}`);
  console.log(`After swaping value of c is ${c}`);
}

// Swap 3 value without using variable

function Swap5(a: number, b: number, c: number) {
  a = a + b - c;
  b = b + c - a;
  c = c + a - b;
  console.log(`After swaping value of a is ${a}`);
  console.log(`After swaping value of b is ${b}`);
  
}
