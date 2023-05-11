function calculateValues(input) {
  // Menghapus spasi dan koma, dan membagi deret menjadi array angka
  const numbers = input.replace(/[\s,]+/g, ' ').trim().split(' ');

  let total = 0;
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;

  // Menghitung total, nilai terbesar, dan nilai terkecil
  for (let i = 0; i < numbers.length; i++) {
    const num = parseInt(numbers[i]);
    if (!isNaN(num)) {
      total += num;
      if (num > max) {
        max = num;
      }
      if (num < min) {
        min = num;
      }
    }
  }

  const average = total / numbers.length;

  return {
    total,
    max,
    min,
    average
  };
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan deret angka: ', (input) => {
  const result = calculateValues(input);
  console.log('Nilai total:', result.total);
  console.log('Nilai terbesar:', result.max);
  console.log('Nilai terkecil:', result.min);
  console.log('Nilai rata-rata:', result.average);

  rl.close();
});
