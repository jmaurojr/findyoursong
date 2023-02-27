function insert(num) {
  var number = document.getElementById("display-terms").innerHTML;
  document.getElementById("display-terms").innerHTML = number + num;
}

function clean() {
  document.getElementById("display-terms").innerHTML = "";
  document.getElementById("display-results").innerHTML = "";
}

function backspace() {
  let results = document.getElementById("display-terms").innerHTML;
  document.getElementById("display-terms").innerHTML = results.substring(
    0,
    results.length - 1
  );
}

function calculate() {
  let results = document.getElementById("display-terms").innerHTML;
  if (results) {
    document.getElementById("display-results").innerHTML = eval(results);
  }
}
