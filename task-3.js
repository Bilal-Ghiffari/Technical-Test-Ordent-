function combines(charA, charB, charC) {
  let charCombine = ""; // Inisialisasi string kosong untuk menyimpan hasil penggabungan karakter
  let minLength = Math.min(charA.length, charB.length, charC.length); // untuk mencegah terjadi nya undefined ketika salah satu Char length nya tidak sama dengan yg lain. contoh charB length nya 4 sedangkan charA dan Char C itu length 3 jadi CharB mengikuti CharA dan CharC untuk lengthnya

  for (let i = 0; i < minLength; i++) {
    charCombine += charA[i]; // Mengambil karakter pada indeks ke-i dari charA, lalu menambahkannya ke charCombine
    charCombine += charB[i]; // Mengambil karakter pada indeks ke-i dari charB, lalu menambahkannya ke charCombine
    charCombine += charC[i]; // Mengambil karakter pada indeks ke-i dari charC, lalu menambahkannya ke charCombine
  }
  return charCombine; // mengembalikan hail penggabungan karakter
}

const result = combines("aaa", "bbb", "ccc");
console.log("redult", result);
