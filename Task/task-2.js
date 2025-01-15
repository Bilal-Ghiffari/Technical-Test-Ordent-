function summation(n, m) {
  const detail = `(remainder of ${n} / ${m})`;
  // pembagian dengan 0 tidak diperbolehkan
  if (n > m && m === 0) {
    // check jika value m itu kosong
    return NaN;
  }
  if (n < m && n === 0) {
    // check jika value n itu kosong
    return NaN;
  }
  const calculation = n > m ? n % m : m % n; // malakukan kalkulasi
  return `${calculation} ${detail}`;
}

const result = summation(17, 5);
console.log("result", result);
