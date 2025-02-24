const person = {
    name: "John",
    age: 30,
    city: "New York",
  };
  
  for (let key in person) {
    console.log("Key:", key, "Value:", person[key]);
  }