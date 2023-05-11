/** 
Diberikan sebuah string yang dapat mengandung huruf, angka, spasi dan tanda baca.
  ○ Ubahlah format string tersebut menjadi format penulisan judul yang hanya menerima huruf dan angka
  ○ Ubahlah format string tersebut menjadi format penulisan biasa dengan mengkonversi spasi
menjadi “-“ (strip)

*/

function convertToTitleCase(inputString) {
  // Menghapus karakter selain huruf, angka, dan spasi
  let cleanedString = inputString.replace(/[^\w\s]/g, '');
  
  // Memisahkan string menjadi array kata-kata
  let words = cleanedString.split(/\s+/);
  
  // Mengubah setiap kata menjadi huruf kecil kecuali huruf pertama
  let titleCaseWords = words.map((word) => {
    let lowercaseWord = word.toLowerCase();
    return lowercaseWord.charAt(0).toUpperCase() + lowercaseWord.slice(1);
  });
  
  // Menggabungkan kata-kata menjadi string kembali
  let titleCaseString = titleCaseWords.join(' ');
  
  return titleCaseString;
}

function convertToNormalCase(inputString) {
  // Menghapus karakter selain huruf, angka, dan spasi
  let cleanedString = inputString.replace(/[^\w\s]/g, '');
  
  // Mengganti spasi dengan strip ("-")
  let formattedString = cleanedString.replace(/\s+/g, '-');
  
  // Mengubah string menjadi huruf kecil
  let lowercaseString = formattedString.toLowerCase();
  
  return lowercaseString;
}

// Contoh penggunaan
let inputString = "SELamAt PaGi Dunia!!";
let formattedString_1 = convertToTitleCase(inputString);
let formattedString_2 = convertToNormalCase(inputString);

console.log(formattedString_1); // Output: Selamat Pagi Dunia
console.log(formattedString_2); 