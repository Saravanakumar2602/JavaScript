let str = "  Hello World! JavaScript is fun.  ";

console.log("Length:", str.length); // 35

console.log("charAt(2):", str.charAt(2)); // H
console.log("charCodeAt(2):", str.charCodeAt(2)); // 72
console.log("at(-1):", str.at(-1)); // space

console.log("indexOf('World'):", str.indexOf("World")); // 8
console.log("lastIndexOf('i'):", str.lastIndexOf("i")); // 28
console.log("includes('JavaScript'):", str.includes("JavaScript")); // true
console.log("startsWith('  Hello'):", str.startsWith("  Hello")); // true
console.log("endsWith('.'):", str.endsWith(".")); // false

console.log("slice(2, 7):", str.slice(2, 7)); // Hello
console.log("substring(2, 7):", str.substring(2, 7)); // Hello
console.log("substr(2, 7):", str.substr(2, 7)); // Hello W

console.log("toUpperCase():", str.toUpperCase()); // HELLO WORLD! JAVASCRIPT IS FUN.
console.log("toLowerCase():", str.toLowerCase()); // hello world! javascript is fun.

console.log("replace('Hello', 'Hi'):", str.replace("Hello", "Hi")); // Hi World! JavaScript is fun.
console.log("replaceAll(' ', '_'):", str.replaceAll(" ", "_")); // __Hello_World!_JavaScript_is_fun.__

console.log("trim():", str.trim()); // Hello World! JavaScript is fun.
console.log("trimStart():", str.trimStart()); // Hello World! JavaScript is fun.
console.log("trimEnd():", str.trimEnd()); //   Hello World! JavaScript is fun.

console.log("split(' '):", str.split(" ")); // ["", "", "Hello", "World!", "JavaScript", "is", "fun.", "", ""]
console.log("concat(' Enjoy coding!'):", str.concat(" Enjoy coding!")); // Hello World! ... Enjoy coding!

console.log("repeat(2):", str.repeat(2)); // repeats twice

console.log("match(/World/):", str.match(/World/)); // ["World", ...]
console.log("padStart(40, '*'):", str.trim().padStart(40, "*")); // ********Hello World! JavaScript is fun.
console.log("padEnd(40, '*'):", str.trim().padEnd(40, "*")); // Hello World! JavaScript is fun.********

let str2 = "hello";
console.log("localeCompare('hello'):", str2.localeCompare("hello")); // 0
console.log("localeCompare('Hello'):", str2.localeCompare("Hello")); // 1
