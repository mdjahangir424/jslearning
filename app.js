for (i = 0; i < 5; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i), 1000;
    });
  })(i);
}
