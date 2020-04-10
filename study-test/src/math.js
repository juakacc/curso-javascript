class Math {
  sum(a, b) {
    return a + b;
  }

  sumAsync(a, b, callback) {
    setTimeout(() => {
      callback(a + b);
    }, 2000);
  }

  mutiply(a, b) {
    return a * b;
  }
}

module.exports = Math;
