/*************************************************
  PREDICTIONS + EXPLANATIONS
  (Notes: Each numbered block is intended to run separately.
  If you paste EVERYTHING into one file as-is, redeclaring `let a`
  multiple times in the same scope will cause SyntaxError.)
**************************************************/

// -------- #1 --------
function funcOne() {
  let a = 5;                 // local to funcOne, starts at 5
  if (a > 1) {               // true (5 > 1)
    a = 3;                   // reassign local a -> 3
  }
  alert(`inside the funcOne function ${a}`); // => "inside the funcOne function 3"
}

// #1.1
funcOne(); // ALERT OUTPUT: 3

/* #1.2 (const instead of let)
function funcOne() {
  const a = 5;
  if (a > 1) {
    a = 3; // ❌ TypeError: Assignment to constant variable.
  }
  alert(`inside the funcOne function ${a}`); // not reached
}
Explanation:
- `const` makes the binding immutable; trying to reassign `a` throws at runtime.
*/


// -------- #2 --------
let a = 0;                   // global/module-scoped `a` = 0

function funcTwo() {
  a = 5;                     // mutate the same (outer) `a`
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree(); // ALERT OUTPUT: 0   (hasn't been changed yet)
funcTwo();   // sets a -> 5
funcThree(); // ALERT OUTPUT: 5   (reflects updated value)

/* #2.2 (const instead of let for the outer a)
const a = 0;

function funcTwo() {
  a = 5; // ❌ TypeError: Assignment to constant variable.
}

function funcThree() {
  alert(`inside the funcThree function ${a}`);
}

Run order:
funcThree(); // ALERT OUTPUT: 0   (ok)
funcTwo();   // throws TypeError; execution stops here
funcThree(); // not reached

Explanation:
- Reassigning a `const` binding is illegal.
*/


// -------- #3 --------
function funcFour() {
  // In browsers, properties set on `window` are accessible as globals.
  // (Note: top-level `let/const` do NOT become `window` props; `var` or direct assignment does.)
  window.a = "hello";        // creates/updates global `window.a`
}

function funcFive() {
  // No local `a` here, so it looks up the global.
  alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour(); // defines window.a = "hello"
funcFive(); // ALERT OUTPUT: "hello"

/*
If you called funcFive() BEFORE funcFour(), you'd get:
ReferenceError: a is not defined (because no global `a` existed yet).
*/


// -------- #4 --------
let a = 1;                   // outer `a` = 1

function funcSix() {
  let a = "test";            // shadowing: a NEW, inner `a` (block/function scoped)
  alert(`inside the funcSix function ${a}`); // ALERT OUTPUT: "test"
}

// #4.1
funcSix(); // ALERT OUTPUT: "test"

/* #4.2 (const instead of let)
- If the inner `a` is `const a = "test"`, result is the SAME (we don't reassign it).
- If the outer `a` is `const a = 1`, also SAME result, because the inner `a` shadows it.
- Errors occur only if you later try to reassign a `const`.
*/


// -------- #5 --------
let a = 2;                   // outer `a` = 2
if (true) {
  let a = 5;                 // block-scoped `a` (shadows outer only inside this block)
  alert(`in the if block ${a}`); // ALERT OUTPUT: 5
}
alert(`outside of the if block ${a}`); // ALERT OUTPUT: 2

/* #5.2 (const instead of let)
const a = 2;
if (true) {
  const a = 5; // block-scoped, independent from the outer `a`
  alert(`in the if block ${a}`);     // ALERT OUTPUT: 5
}
alert(`outside of the if block ${a}`); // ALERT OUTPUT: 2

Explanation:
- `let` and `const` are both block-scoped, so shadowing works the same here.
- No reassignment occurs, so `const` is fine.
*/
