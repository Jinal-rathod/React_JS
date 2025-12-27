function Sum() {
    var array = [1, 2, 3, 4, 5];
    var sum = 0;
    var i;
    for (i = 0; i < 5; i++) {
        sum += array[i];
    }
    console.log("".concat(sum));
}
Sum();
