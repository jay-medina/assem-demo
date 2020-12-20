const assert = require("assert");
const myModule = require("..");
assert.equal(myModule.add(1, 2), 3);
console.log("ok");

assert.strictEqual(myModule.minus(4, 3), 1);
console.log("minus okay");
