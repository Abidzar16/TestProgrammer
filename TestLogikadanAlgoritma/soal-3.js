const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Masukkan nilai: ', (input) => {
  const n = parseInt(input);

  if (isNaN(n) || n <= 0) {
    console.log('Input tidak valid. Harap masukkan angka positif.');
    rl.close();
    return;
  }

  console.log('Deret angka 1: ');
  let series1 = '';
  for (let i = 0; i < n; i++) {
    series1 += (i * i) + ' ';
  }
  console.log(series1);

  console.log('Deret angka 2: ');
  let series2 = '';
  for (let i = 0; i < n; i++) {
    series2 += ((i + 1) * (i + 2)) + ' ';
  }
  console.log(series2);

  console.log('Deret angka 3: ');
  let series3 = '0 1 ';
  let prev1 = 0;
  let prev2 = 1;
  for (let i = 2; i < n; i++) {
    let current = prev1 + prev2;
    series3 += current + ' ';
    prev1 = prev2;
    prev2 = current;
  }
  console.log(series3);

  console.log('Deret angka 4: ');
  let series4 = '0 0 ';
  let prev3 = 0;
  let prev4 = 0;
  for (let i = 2; i < n; i++) {
    let current = prev3 + prev4 + 1;
    series4 += current + ' ';
    prev3 = prev4;
    prev4 = current;
  }
  console.log(series4);

  rl.close();
});