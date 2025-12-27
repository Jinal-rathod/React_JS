function Factorial(num) {
    var fact = 1;
    var i;
    for (i = 1; i <= num; i++) {
        fact *= i;
    }
    console.log("Factorial of ".concat(num, " number is : ").concat(fact));
}
Factorial(5);
