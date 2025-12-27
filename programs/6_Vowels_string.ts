function Vowels(str: string) {
  let i: number;
  let count: number = 0;
  for (i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u" ||
      str[i] === "A" ||
      str[i] === "E" ||
      str[i] === "I" ||
      str[i] === "O" ||
      str[i] === "U"
    ) {
      count++;
    }
  }
  console.log(`Total Vowel is ${count}`);
}

Vowels("Speed");
