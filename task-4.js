function acronym(name) {
  let combinedName = ""; // Inisialisasi string kosong untuk menyimpan hasil penggabungan karakter
  combinedName += name[0]; // Menambahkan karakter pertama dari name ke dalam combinedName
  for (let i = 0; i < name.length; i++) {
    if (name[i] === " ") {
      // Jika karakter pada indeks ke-i adalah spasi (" ")
      combinedName += name[i + 1][0]; // Tambahkan karakter setelah spasi ke dalam combinedName
    } else if (name[i] === "-") {
      // Jika karakter pada indeks ke-i adalah tanda hubung ("-")
      combinedName += name[i + 1][0]; // Tambahkan karakter setelah tanda hubung ke dalam combinedName
    }
  }

  return combinedName.toUpperCase(); // Kembalikan hasil dalam huruf kapital
}

const result = acronym("bilal al-ghiffari");
console.log("result", result);
