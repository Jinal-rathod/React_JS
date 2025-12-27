function Sum() {
  let array = [1, 2, 3, 4, 5];
  let sum: number = 0;
  let i: number;
  for (i = 0; i < 5; i++) {
    sum += array[i];
  }
  console.log(`${sum}`);
}

Sum();
