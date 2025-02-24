let user = {
    name: "Alice",
    age: 25,
    status: "active",
};
  
if (user.age >= 18) {
    console.log(`${user.name} is an adult.`);
} else {
    console.log(`${user.name} is a minor.`);
}

switch (user.status) {
    case "active":
        console.log(`${user.name} is active.`);
        break;
    case "inactive":
        console.log(`${user.name} is inactive.`);
        break;
    default:
        console.log(`${user.name}'s status is unknown.`);
}