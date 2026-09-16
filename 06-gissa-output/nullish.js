// Gissa vad varje console.log skriver ut INNAN du kör filen.
// Kör sedan: node 06-gissa-output/nullish.js

let declared;
console.log("1:", declared); // gissning:
console.log("2:", typeof declared); // gissning:

const nothing = null;
console.log("3:", typeof nothing); // gissning:

function noReturn() {
  const y = 5;
}
console.log("4:", noReturn()); // gissning:

const user = { name: "Kim", address: null };
console.log("5:", user.name); // gissning:
console.log("6:", user.email); // gissning:
console.log("7:", user.address?.city); // gissning:

try {
  console.log("8:", user.address.city);
} catch (e) {
  console.log("8:", e.name); // gissning:
}

console.log("9:", user.email ?? "saknas"); // gissning:
console.log("10:", 0 ?? "saknas"); // gissning:
console.log("11:", 0 || "saknas"); // gissning:
console.log("12:", "" || "saknas"); // gissning:
console.log("13:", [][0]); // gissning:
