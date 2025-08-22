let employee = {
    employeeId: "INFY789123",
    firstName: "Md",
    middleName: "Mehtab",
    lastName: "Khan",
    age: 23,
    designation: "Software Developer",
    department: "IT",
    joinDate: "07/02/2021",
    salary: 35000,
    isPermanent: true,

    contactDetails: {
        email: "example143@gmail.com",
        phone: "90000010"
    },

    address: {
        street: "manchal road",
        city: "Hyderabd",
        state: "Telangana",
        zipCode: "501056"
    },

    skills: ["HTML", "CSS", "Tailwind css", "Bootstrap", "JavaScript", "React", "Node.js", "SQL", "Java", "Python"],
    
    projects: [
        {
            projectName: "E-commerce Website",
            role: "Frontend Developer",
            startDate: "2023-01-01",
            endDate: "2023-06-30"
        },
        
        {
            projectName: "Mobile App",
            role: "Full Stack Developer",
            startDate: "2022-07-01",
            endDate: "2022-12-31"
        }
    ]
};

console.log(employee);


console.log(employee.employeeId);
console.log(employee["firstName"]);
console.log(employee.contactDetails.email);
console.log(employee.contactDetails["phone"]);

console.log(employee.projects[0]);
console.log(employee.projects[0].role);

console.log(employee.projects[1]);
console.log(employee.projects[1].endDate);
console.log(employee.skills[0], employee.skills[1]);









