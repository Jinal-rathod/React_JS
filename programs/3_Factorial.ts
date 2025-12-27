function Factorial(num: number) {
  let fact: number = 1;
  let i: number;
  for (i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(`Factorial of ${num} number is : ${fact}`);
}

Factorial(5);
