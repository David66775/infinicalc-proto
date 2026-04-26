let y = [];
let x = [];
let a;
let b;
let r;
let r2;
let s;
let t;
function reload() {
  location.refresh;
}
function add(num1, num2) {
  y = num1.split('');
  x = num2.split('');
  for (i = 0; i < x.length; i++) {
    a = Number((y[y.length - i]));
    b = Number((x[x.length - i]));
    r = a - b;
    if (r < 0) {
      if (y[((x.length - i) - s)] === "9") {
        y[((x.length - i) - s)] = "8";
      }
      else if (y[((x.length - i) - s)] === "8") {
        y[((x.length - i) - s)] = "7";
      }
      else if (y[((x.length - i) - s)] === "7") {
        y[((x.length - i) - s)] = "6";
      }
      else if (y[((x.length - i) - s)] === "6") {
        y[((x.length - i) - s)] = "5";
      }
      else if (y[((x.length - i) - s)] === "5") {
        y[((x.length - i) - s)] = "4";
      }
      else if (y[((x.length - i) - s)] === "4") {
        y[((x.length - i) - s)] = "3";
      }
      else if (y[((x.length - i) - s)] === "3") {
        y[((x.length - i) - s)] = "2";
      }
      else if (y[((x.length - i) - s)] === "2") {
        y[((x.length - i) - s)] = "1";
      }
      else if (y[((x.length - i) - s)] === "1") {
        y[((x.length - i) - s)] = "0";
      }
      else if (y[((x.length - i) - s)] === "0") {
        y[((x.length - i) - s)] = "9";
        
      }
    }
  }
}
