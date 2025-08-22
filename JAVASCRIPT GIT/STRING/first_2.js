let txt = "Hello World!";

// includes: Checks if a string contains a specified value
console.log(txt.includes("World!"));
console.log(txt.includes('World'));

// indexOf() return the index of first occurenece
console.log(txt.indexOf("o"));
console.log(txt.indexOf("!"));

// lastIndecOf (return the lastindex of specified index)

console.log(txt.lastIndexOf("o"));


// match

console.log(txt.match(/l/g));
console.log(txt.match(/H/g));
console.log(txt.match(/W/g));

// replace() replace a specied value of another value

console.log(txt.replace("World", "JavaScript"));
console.log(txt.replace("World!", "JavaSCript"));


// search(): extracts the part of string and retirn new string

console.log(txt.search("World!"));

// spilt(): spilt a string in an array
console.log(txt.split(", "));

// subString() extrats char to a string betwwen to specified string

console.log(txt.substring(0,12));
console.log(txt.substring(3, 7));
console.log(txt.substring(0,3));










