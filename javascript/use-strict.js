"use strict";
// Your entire script will run in strict mode
let x = 10;
// ...



// Locally

function myFunction() {
  "use strict";
  // Only this function will run in strict mode
  let y = 20;
  // ...
}

function anotherFunction() {
  // This function is NOT in strict mode
  // ...
}



// undeclared variables error

"use strict";
// x = 10; // Throws ReferenceError: x is not defined
// let x = 10; // Correct way



// Attempting to assign a value to a read-only property error

"use strict";
const obj = {};
Object.defineProperty(obj, 'x', { value: 10, writable: false });
// obj.x = 20; // Throws TypeError: Cannot assign to read only property 'x' of object '#<Object>'



// Attempting to delete a non-configurable property type error

"use strict";
// delete Object.prototype; // Throws TypeError: Cannot delete property 'prototype' of function Object() { [native code] }


// eval becomes safer as it only creates local scope not global

"use strict";

// Non-strict mode behavior (if not in strict mode):
// eval("var leaked = 'I leaked!'");
// console.log(leaked); // Would work in non-strict mode

// Strict mode behavior:
eval("var contained = 'I am contained!'");
// console.log(contained); // ReferenceError: contained is not defined



// Disallows Duplicate Parameter Names in Functions:

"use strict";
// function sum(a, a, b) { // Throws SyntaxError: Duplicate parameter name not allowed in strict mode
//   return a + a + b;
// }

