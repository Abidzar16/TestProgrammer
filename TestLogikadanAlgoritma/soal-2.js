/**  
Diberikan sebuah paragraf sebagai berikut, hitunglah berapa jumlah setiap karakter (ex. a(123), b(20), c(12), dst…) yang ada dalam paragraf tersebut: 

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

*/


function countCharacters(paragraph) {
  let characterCount = {};
  
  // Menghapus karakter selain huruf dan angka
  let cleanedParagraph = paragraph.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();;
  
  // Menghitung jumlah setiap karakter
  for (let i = 0; i < cleanedParagraph.length; i++) {
    let char = cleanedParagraph.charAt(i);
    if (characterCount[char]) {
      characterCount[char]++;
    } else {
      characterCount[char] = 1;
    }
  }
  
  return characterCount;
}

// Contoh penggunaan
let paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
let characterCount = countCharacters(paragraph);
console.log(characterCount);