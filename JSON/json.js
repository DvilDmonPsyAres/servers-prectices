// Using the built-in JSON object
// In modern JavaScript interpreters, there is a JSON object that has two methods on it that allows you to convert JSON-formatted strings into JavaScript objects and JavaScript object into JSON-formatted strings. They are:

// JSON.stringify(value) will turn the value passed into it into a string.
// JSON.parse(str) will turn a JSON-formatted string into a JavaScript object.
// So, it shouldn't come as much of a surprise how the following works.

const array = [1, 'hello, "world"', 3.14, { id: 17 }];
console.log(JSON.stringify(array));
// prints [1, "hello, \"world\"", 3.14, {"id":17}]
// It shouldn't surprise you that it works in the opposite direction, too.

const str = '[1,"hello, \\"world\\"",3.14,{"id":17}]';
console.log(JSON.parse(str));
// prints an array with the following entries:
//   0: 1
//   1: "hello, \"world\""
//   2: 3.14
//   3: { id: 17 }
const a = [1, 2, 3, 4, 5];
console.log(a[0]);

const s = JSON.stringify(a);
console.log(s[0]);

const v = JSON.parse(s);
console.log(v[0]);
