let employees = [
    {
        name: "Naveen",
        id: 101,
        salary: 30000
    },
    {
        name: "John",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun",
        id: 103,
    salary: 45000
    }
];

employees.sort((a,b)=> a.salary - b.salary);
console.log("highest salary : ", employees[employees.length-1].salary);
console.log("Employee Name : ", employees[employees.length-1].name);

let searchId = 103;
let istrue=false;
let findByEmployeeID = employees.find((c,i,t)=>{

    if(c.id === searchId){
        istrue = true;
        return i;
    }

})
if(istrue){
    console.log("Employee Found");
    console.log("Employee Name : ", findByEmployeeID.name);
    console.log("Employee Salary : ", findByEmployeeID.salary);
}
else{
    console.log("Employee Not Found");
}

let calcutaleBonus = employees.map((c,i,t)=>{
    console.log(`${c.name} : ${c.salary +5000}`);
    
})

let employeesExperience = [
    {
        name:"Naveen",
        experience:2
    },
    {
        name:"John",
        experience:7
    },
    {
        name:"Arun",
        experience:5
    }
];
    

employeesExperience.map((c,i,t)=>{
    if(c.experience >= 5){
        console.log(`${c.name} - Senior Employee`); 
    }
    else{
        console.log(`${c.name} - Junior Employee`);
    }
})

employeesExperience.forEach((c,i,t)=>{
    console.log(c.name);
    
})

employees.map((c,i,t)=>{
    console.log(c.id);
    
})

let totalSalary = employees.reduce((acc,c,i,t)=>{
    return acc + c.salary;
},0)

console.log(`Total Salary : ${totalSalary}`);

let highEarners = employees.filter((c,i,t)=>{
    return c.salary > 40000;
});

highEarners.map((c,i,t)=>{
    console.log(c.name);
    
})

let increaseSalary = employees.map((c,i,t)=>{
    console.log(`${c.name} : ${c.salary +5000}`);
    
});

let employeesDetails = employees.map((c,i,t)=>{
    console.log(`Employee Name : ${c.name}`);
    console.log(`Employee ID : ${c.id}`);
    console.log(`Employee Salary : ${c.salary}`);                   
    
})

let employeesDetails1 = [
    {
    name:"Aravinth",
    id:101,
    salary:30000
},
{
    name:"Ashwin",
    id:102,
    salary:60000
},
{
    name:"Sam",
    id:103,
    salary:45000
}
];

let count =0;
let totalNoOfEmployees = employeesDetails1.map((c,i,t)=>{

    count ++;
})
console.log(`Total Number of Employees: ${count}`);


employeesDetails1.sort((a,b)=> a.salary - b.salary);
console.log("Employee Name : ", employeesDetails1[employeesDetails1.length-1].name);
console.log("highest salary : ", employeesDetails1[employeesDetails1.length-1].salary);


employeesDetails1.sort((a,b)=> b.salary - a.salary);
console.log("Employee Name : ", employeesDetails1[employeesDetails1.length-1].name);
console.log("Lowest salary : ", employeesDetails1[employeesDetails1.length-1].salary);



employeesDetails1.sort((a,b)=> a.salary - b.salary);
console.log("highest salary : ", employeesDetails1[employeesDetails1.length-1].salary);
console.log("Employee Name : ", employeesDetails1[employeesDetails1.length-1].name);

let totalSalary1 = employeesDetails1.reduce((acc,c,i,t)=>{
    return acc + c.salary;
},0)

console.log(`Total Salary : ${totalSalary1}`);

let highEarners1 = employeesDetails1.filter((c,i,t)=>{
    return c.salary > 40000;
})
console.log("High Earners:");
highEarners1.forEach((c,i,t)=>{
    console.log(c.name);
})

let EmployeesearchId = 102;
let isFound=false;
let findByEmployeeID2 = employeesDetails1.find((c,i,t)=>{

    if(c.id === EmployeesearchId){
        isFound = true;
        return i;
    }

})
if(isFound){
    console.log("Employee Found");
    console.log("Employee Name : ", findByEmployeeID2.name);
    console.log("Employee Salary : ", findByEmployeeID2.salary);
}
else{
    console.log("Employee Not Found");
}

employeesDetails1.map((c,i,t)=>{
    console.log(`${c.salary + 5000}`);
    
})

let employeesFullDetails = employeesDetails1.map((c,i,t)=>{
    console.log(`Employee Name : ${c.name}`);
    console.log(`Employee ID : ${c.id}`);
    console.log(`Employee Salary : ${c.salary}`);                   
    
})


