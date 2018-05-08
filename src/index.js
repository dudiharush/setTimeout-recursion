function callSetTimeout(end, delay) {
  (function recurs(curr) {
    if (curr <= end) {
      setTimeout(() => {
        console.log(curr);
        recurs(curr + 1);
      }, delay);
    }
  })(1);
}

callSetTimeout(4, 1000);