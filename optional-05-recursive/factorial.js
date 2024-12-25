function factorial(n) {
    // Basis: jika n = 0 atau n = 1, kembalikan 1
    if (n === 0 || n === 1) {
      return 1;
    }
    // Rekursi: n * faktorial(n - 1)
    return n * factorial(n - 1);
  }
  
  export default factorial;
  