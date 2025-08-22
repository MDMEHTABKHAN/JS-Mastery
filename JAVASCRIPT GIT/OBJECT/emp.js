let employee = {
    employeeId: "INFY789123",
    firstName: "Md",
    middleName: "Mehtab",
    lastName: "Khan",
    age: 23,
    designation: "Software Engineer",
    department: "Development",
    joinDate: "07/02/2023",
    salary: 35000,
    isPermanent: true,
    email: "example143@gmail.com",
    phone: "9876543210",
    street: "Manchal Road",
    city: "Hyderabad",
    state: "India",
    zipCode: "501056",
    skills: ["HTML", "CSS", "Tailwind CSS", "BootStrap", "SEO", "Git & GitHub", "JavaScript", "React", "Node.js", "SQL", "Java", "Python"],
    projectName1: "Crime Data Analysis",
    role1: "Front-End Developer",
    projectStartDate1: "07/09/2024",
    projectEndDate1: "06/08/2024",
    projectName2: "Customer Portal",
    role2: "Full Stack Developer",
    projectStartDate2: "2021-09-01",
    projectEndDate2: "2021-12-15"
};

console.log(employee);
console.log(employee.department);
console.log(employee.projectName1);
console.log(employee.skills);
console.log(employee.skills[4]);
console.log(employee.skills[7]);

console.log(typeof employee);
console.log(typeof(employee));

employee.roll2 = "Backend Developer";
console.log(employee);

employee.fullName = "Md Mehtab Khan";
console.log(employee);







