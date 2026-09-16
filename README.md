# JS Intro-övningar

De här övningarna är utformade för att låta er applicera det ni redan lärt er, men i JavaScript, samtidigt som ni introduceras för språkets särdrag. När ni är klara med dessa går ni vidare till [Exercism](https://exercism.org/tracks/javascript).

## Installation

Node installeras med [mise](https://mise.jdx.dev/), på samma sätt som Elixir:

```sh
mise use -g node@26
node --version
```

## Skapa ditt repo

Det här repot är en mall. Du ska inte klona eller forka det, utan skapa ett eget repo från det, på samma sätt som ni har ett eget repo för Elixir-övningarna.

1. Klicka på den gröna knappen **Use this template** högst upp på repots sida på GitHub, och välj **Create a new repository**.
2. Under **Owner**, välj **ntijoh-te4**, inte ditt eget konto.
3. Döp repot till `js-intro-` följt av ditt namn. Heter du Tage blir det `js-intro-tage`.
4. Lämna resten som det är och klicka **Create repository**.
5. Märk repot, som med Elixir-repot: gå till repots **Settings**, sedan **Custom properties** i vänstermenyn, och sätt **repo-type** till `javascript` och `student`.

Klona sedan ditt nya repo och installera testverktygen:

```sh
git clone https://github.com/ntijoh-te4/js-intro-tage.git
cd js-intro-tage
npm install
```

Committa och pusha när du får ett test grönt, inte bara när du är klar med allt.

## REPL

Precis som Elixir har `iex`, följer en REPL med Node. Starta den genom att skriva `node` i terminalen:

```
$ node
Welcome to Node.js v26.7.0.
Type ".help" for more information.
> 1 + 2
3
> "hello, world".toUpperCase()
'HELLO, WORLD'
> [1, 2, 3].map(x => x * 2)
[ 2, 4, 6 ]
```

Avsluta med `.exit` eller genom att trycka `ctrl+c` två gånger. REPL:en är perfekt när du snabbt vill testa en metod utan att behöva skapa en hel fil.

## Tester

Testerna är redan skrivna. Ditt mål är att få dem att lysa grönt.

```sh
npm test                      # kör alla tester en gång
npm run watch                 # kör om testerna varje gång du sparar
npx vitest run 01-funktioner  # bara en mapp
npx vitest run smallest       # bara en fil
```

Vi använder [Vitest](https://vitest.dev/) som testverktyg. Det använder `describe`, `it` och `expect`, precis som Jest (vilket är vad ni kommer möta på Exercism). Ett test ser ut så här:

```js
import { describe, it, expect } from "vitest";
import { smallest } from "./smallest.js";

describe("smallest", () => {
  it("när det minsta är först", () => {
    expect(smallest(1, 2)).toBe(1);
  });
});
```

**Viktigt om jämförelser:**
* `toBe` använder strikt jämförelse (`===`).
* `toEqual` jämför innehållet i objekt och arrayer. Detta behövs eftersom `[1, 2] === [1, 2]` är `false` i JavaScript (de är två olika instanser i minnet). Mer om detta i övning 6.

Varje övning består av en fil med en funktion som för tillfället kastar ett fel. Ta bort raden med `throw` och implementera funktionen. Läs testfilen (`.test.js`) noga, den fungerar som din specifikation.

### Funktioner

I dessa övningar använder vi funktionsdeklarationer:

```js
export function smallest(a, b) {
  ...
}
```

På Exercism kommer ni ofta se pilfunktioner tilldelade en konstant:

```js
export const smallest = (a, b) => {
  ...
};
```

Det är i praktiken samma sak. Pilfunktioner är standard när man skickar funktioner som argument (till exempel till `map`), vilket ni får prova i övning 3. Vi använder `function` för namngivna funktioner här eftersom det liknar Elixirs `def`.

Kom ihåg att använda `export` så att testfilen kan importera funktionen.

## Rekommendationer

1. Använd `const` framför `let`. Använd aldrig `var`.
2. Använd `===` framför `==`. Alltid.
3. Bygg nya arrayer istället för att mutera befintliga.
4. Undvik globala variabler. Håll allt i funktioner och exportera dem.
5. Är du osäker på vad en metod gör? Testa i REPL:en, läs sedan på MDN.

## Övningar

### 1. Funktioner och jämförelser

`01-funktioner/`: `smallest`, `largest`, `ticketPrice`.

Här gör ni samma grundövningar som i Elixir, men med `if` och `return` istället för guards och pattern matching.

**Tänk på följande:**
* **Använd alltid `===`**, aldrig `==`. Den senare gör automatiska typomvandlingar (t.ex. blir `"3" == 3` sant), vilket ofta leder till buggar.
* **Explicit return:** Till skillnad från Elixir returnerar inte JS automatiskt det sista uttrycket. En funktion utan `return` returnerar `undefined`.
* **Parenteser:** I `if (villkor) { ... }` är parenteserna runt villkoret obligatoriska.

Länkar: [MDN: if...else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else), [MDN: Strict equality](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality)

### 2. Arrayer för hand

`02-arrayer-for-hand/`: `first`, `last`, `isEmpty`, `prepend`, `append`, `concat`, `sum`, `contains`, `reverse`.

Ni har tidigare löst dessa med `[head | tail]` och rekursion. Gör det igen! **Använd inga inbyggda arraymetoder** i denna mapp: inte `push`, `concat`, `reduce`, `includes`, `reverse` eller `at`. Det ni får använda:

| Elixir | JavaScript | Funktion |
|---|---|---|
| `[head \| tail] = list` | `const [head, ...tail] = list;` | Destrukturering |
| `[val \| list]` | `[val, ...list]` | Spread (lägg till först) |
| | `[...list, val]` | Spread (lägg till sist) |
| `length(list)` | `list.length` | Egenskap (inte funktion) |
| `list == []` | `list.length === 0` | Kontrollera om tom |
| `def f(list, acc \\ [])` | `function f(list, acc = []) {` | Default-värde för argument |

**Två viktiga skillnader från Elixir:**

1. **Basfallet är en `if`-sats:** Eftersom JS saknar pattern matching i funktionshuvudet kan ni inte skriva `def sum([]), do: 0`. Istället skriver ni `if (list.length === 0) return 0;` högst upp i funktionen.
2. **Mutation:** Arrayer i JS kan ändras. `list.push(3)` ändrar originalarrayen på plats. För att undvika detta och följa modern praxis (som i React) bör ni använda *spread-syntax* för att skapa nya arrayer. Testerna för `prepend`, `append`, `concat` och `reverse` kontrollerar att originalarrayen förblir orörd.

Länkar: [MDN: Destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring), [MDN: Spread syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

### 3. Arrayer med inbyggda metoder

`03-arrayer-inbyggt/`: `first`, `last`, `sum`, `contains`, `reverse` (igen), samt `average`, `doubled`, `evens`, `count`, `max`.

Nu får ni använda det inbyggda. Det ni tidigare skrev med rekursion finns nu som metoder direkt på arrayen. Elixirs `Enum` motsvaras av följande i JS:

| Elixir | JavaScript |
|---|---|
| `Enum.map(list, fn x -> x * 2 end)` | `list.map((x) => x * 2)` |
| `Enum.filter(list, fn x -> x > 2 end)` | `list.filter((x) => x > 2)` |
| `Enum.reduce(list, 0, fn x, acc -> acc + x end)` | `list.reduce((acc, x) => acc + x, 0)` |
| `Enum.member?(list, 3)` | `list.includes(3)` |
| `Enum.at(list, 0)` | `list.at(0)` |
| `Enum.reverse(list)` | `list.toReversed()` |

**Notera:** I `reduce` kommer ackumulatorn först i JS, och startvärdet placeras efter funktionen.

Här använder vi **pilfunktioner**. `(x) => x * 2` är motsvarigheten till `fn x -> x * 2 end`. Om funktionen bara består av en rad behövs varken måsvingar `{}` eller `return`.

**Varning:** Vissa metoder muterar arrayen (`push`, `pop`, `reverse`, `sort`, `splice`), medan andra returnerar en ny kopia (`map`, `filter`, `slice`, `toReversed`, `toSorted`). Kolla MDN eller testa i REPL:en om du är osäker.

Länkar: [MDN: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), [MDN: Arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

### 4. Strängar

`04-strangar/`: `chomp`, `countChar`, `words`, `isPalindrome`.

Strängar är oföränderliga (immutable) i JS, precis som i Elixir. Varje metod returnerar en ny sträng. JS har ingen direkt motsvarighet till `String.graphemes`, men du kan använda `str.split("")` för att få en array av tecken, bearbeta den med arraymetoder, och sedan använda `arr.join("")` för att sätta ihop den igen.

Länkar: [MDN: String](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

### 5. Rövarspråket

`05-rovarspraket/`: `rovarize`, `derovarize`.

Samma logik som i Elixir. `rovarize` kan lösas med `split`, `map` och `join`. `derovarize` är mer utmanande då du behöver analysera strängen tre tecken i taget.

* [Rövarspråket - Wikipedia](https://sv.wikipedia.org/wiki/R%C3%B6varspr%C3%A5ket)

### 6. Gissa output

`06-gissa-output/`: `scope.js`, `coercion.js`, `nullish.js`.

Här finns inga tester. Istället hittar du tre filer med `console.log`. **Skriv din gissning i kommentaren på varje rad innan du kör filen.** Kör sedan med `node 06-gissa-output/scope.js` och jämför. Det du gissade fel på är det du bör läsa in dig mer på.

Här är de tre områdena där JS skiljer sig markant från vad ni är vana vid:

**Scope (Räckvidd).** `var` är funktions-scoped, vilket betyder att den syns i hela funktionen även utanför det block den skapades i. `let` och `const` är block-scoped (syns bara mellan `{` och `}`). **Använd aldrig `var`.** Använd `const` som standard och `let` endast om värdet måste ändras.

*Viktigt:* `const` innebär att namnet inte kan bindas om, inte att värdet är oföränderligt. `const list = [1]; list.push(2)` fungerar utmärkt.

**Typomvandling (Coercion).** `+` med en sträng resulterar i konkatenering, medan `-` med en sträng resulterar i subtraktion. `==` försöker omvandla typerna innan jämförelse, medan `===` inte gör det. Använd alltid `===`. Se gärna videon [Wat](https://www.destroyallsoftware.com/talks/wat) (4 min).

**Två sorters "ingenting".** 
* `undefined`: Värdet man får när något inte har definierats (t.ex. en variabel utan värde, en funktion utan `return` eller ett index utanför en array).
* `null`: Ett värde man sätter medvetet för att markera att något är "tomt".

Att läsa ett fält på `null` eller `undefined` kraschar programmet. För att undvika detta finns:
* `?.` (Optional chaining): Läser fältet om det finns, annars returnerar `undefined`.
* `??` (Nullish coalescing): Ger ett standardvärde om vänstersidan är `null` eller `undefined`. Detta är säkrare än `||`, som även byter ut `0` och tomma strängar `""`.

Länkar: [MDN: var](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var), [MDN: Equality comparisons](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness), [MDN: Optional chaining](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining), [MDN: Nullish coalescing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing)
