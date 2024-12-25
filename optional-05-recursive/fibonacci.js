function fibonacci(n) {
    // Basis: jika n adalah 0, kembalikan [0], jika n adalah 1, kembalikan [0, 1]
    if (n === 0) {
      return [0];
    } else if (n === 1) {
      return [0, 1];
    }
    // Rekursi: gabungkan hasil fibonacci(n-1) dengan angka berikutnya
    const seq = fibonacci(n - 1);
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return seq;
  }
  
  export default fibonacci;
  