let student = {
    firstName: "Md",
    middleName: "Arbaj",
    lastName: "Khan",
    age: 24,
    isStudent: false,
}

// print all 
console.log(student);

// Access using dot notation
console.log(student.firstName); 

// Access using bracket notation
console.log(student['lastName']); 

// Update the age
student.age = 23; 
// Update the middle name
student['middleName'] = "Mehtab"; 
console.log(student);

// Adding a new property
student.gender = "Male"; 
// Adding another property
student['nationality'] = "Indian"; 
console.log(student);

// Remove the middle name property
delete student.isStudent; 
console.log(student);

// true if age exists
console.log('age' in student); 
// true if firstName exists
console.log(student.hasOwnProperty('firstName'));
console.log(student.hasOwnProperty('state'));


// Use Object.keys() to get an array of all the keys in the object
// ['firstName', 'lastName', 'age', 'isStudent']
console.log(Object.keys(student)); 


// Use Object.entries() to get an array of key-value pairs as sub-arrays.
// ['md','Mehtab' 'Khan', 23, ....]
console.log(Object.values(student)); 



// loop through object

for (let key in student) {
    console.log(key + ": " + student[key]);
}

// Using Object.assign()
let newStudent = Object.assign({}, student); 

// Using spread syntax
let anotherStudent = { ...student }; 
console.log(newStudent, anotherStudent);






