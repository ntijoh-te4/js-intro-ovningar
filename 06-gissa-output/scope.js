// Gissa vad varje console.log skriver ut INNAN du kör filen.
// Skriv din gissning i kommentaren. Kör sedan: node 06-gissa-output/scope.js

const results = [18, 12, 16, 23, 16];

function maxResult() {
  var i = 0;
  let max = 0;
  while (i < results.length) {
    const current = results[i];
    if (current > max) {
      max = current;
    }
    i += 1;
  }
  return max;
}

console.log("1:", maxResult()); // gissning:

function withVar() {
  if (true) {
    var a = "var";
  }
  return a;
}
console.log("2:", withVar()); // gissning:

function withLet() {
  if (true) {
    let b = "let";
  }
  try {
    return b;
  } catch (e) {
    return e.name;
  }
}
console.log("3:", withLet()); // gissning:

function neverRuns() {
  if (false) {
    var c = "aldrig";
  }
  return c;
}
console.log("4:", neverRuns()); // gissning:

const list = [1, 2];
list.push(3);
console.log("5:", list); // gissning:

try {
  const n = 1;
  n = 2;
  console.log("6:", n);
} catch (e) {
  console.log("6:", e.name); // gissning:
}

let x = 1;
{
  let x = 2;
}
console.log("7:", x); // gissning:
