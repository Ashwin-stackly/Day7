console.log("Task 1 - Student Management System");

let students = [
{
    name:"Naveen",
    id:101,
    mark:85
},
{
    name:"John",
    id:102,
    mark:45
},
{
    name:"Arun",
    id:103,
    mark:25
}
];
console.log("All Student details : ");
let count = 0;
students.map((s)=>{
    console.log(s);
    count++;
    
})
console.log("All Student names : ");
students.map((s)=>{
    console.log(s.name);
})

function getStudentById(id){
    return students.find((s)=>{ return s.id === id; });
}

console.log(getStudentById(102));

console.log("Students who passed:");
let passedStudents = students.filter((s)=>{
    return s.mark >=35;
});

passedStudents.map((s)=>{
    console.log(s.name);
})

console.log(`Total student : ${count}`);

console.log("Task 2 - Employee Salary System");

let employees = [
{
    name:"Naveen",
    salary:30000
},
{
    name:"John",
    salary:45000
},
{
    name:"Arun",
    salary:60000
}
]

employees.sort((a,b)=>{
    return a.salary - b.salary
})
console.log(`Highest salary : ${employees[employees.length-1].salary}`);


employees.sort((a,b)=>{
    return b.salary - a.salary
})
console.log(`Lowest salary : ${employees[employees.length-1].salary}`);

employees.map((e)=>{
    console.log(`Bonus Added : ${e.salary+5000}`);
    
})

let totalSalary = employees.reduce((acc,e)=>{
    return acc + e.salary;
},0);
console.log(`Total salary : ${totalSalary}`);

let earning = employees.filter((e)=>{
    return e.salary > 40000;
})
earning.map((e)=>{
    console.log(`Employee earning more than 40000 : ${e.name}`);
})

console.log("Task 3 - Shopping Cart");

let products = [
{
    name:"Laptop",
    price:50000
},
{
    name:"Mouse",
    price:500
},
{
    name:"Keyboard",
    price:1500
}
];

products.map((p)=>{
    console.log(`Product : ${p.name}`);
})

let totalCost = products.reduce((acc,p)=>{
    return acc + p.price;
},0);
console.log(`Total bill : ${totalCost}`);

let searchProduct = products.find((p)=>{
    return p.name === "Mouse";
});
console.log(`Searched Product  ${searchProduct.name} Founded`);

function discountedPrice(price){
    return price - (price * 0.1);
}
console.log(`Discounted Price : ${discountedPrice(totalCost)}`);


console.log(" Task 4 - Bank Account");

let account={
    name:"Naveen",
    balance:50000
}  

function deposit(amount){
    account.balance+=amount;
    console.log(`Amount deposited so balance is ${account.balance}`);
    
} 
deposit(10000);

function withdraw(amount){
    account.balance-=amount;
    console.log(`Amount withdrawal so balance is ${account.balance}`);
    
} 
withdraw(5000);

console.log(`Current Balance : ${account.balance}`);

if(account.balance >= 20000){
    console.log("More than 20000 rs");
    
}
else{
    console.log("Less than 20000 rs");
    
}

console.log(`name : ${account.name}`);
console.log(`Balance : ${account.balance}`);


console.log("Task 5 - Company Login");

let username = prompt("Enter username");
let password = prompt("Enter password");

(username === "ashwin" && password === "1234")?console.log(`Welcome ${username}`): console.log("Invalid usename and password");

console.log(" Task 6 - Traffic Signal");

let signal = prompt("enter the signal")
switch(signal){
    case "red"    : console.log("Stop"); break;
    case "yellow" : console.log("ready"); break;
    case "green"  : console.log("Go"); break;
    default       : console.log("invalid input"); break;
   
}

console.log(" Task 7 - ATM Machine");
let balance = 50000;
let option = prompt("Menu \n1.Balance \n2.Deposit \n3.Withraw \n4.Exit \n Enter your option ");


switch(option){
    case "1" : console.log(`Current balance ${balance}`); break;
    case "2" : 
                let deposit = prompt("Enter deposite amount")
                balance += Number(deposit);
                console.log("Amount credite");
                console.log(`new Balance : ${balance}`);    
                break;

    case "3" : 
                let withraw = prompt("Enter withdrawal amount ")
                balance-=Number(withraw);
                console.log("Amount debited");
                console.log(`new Balance : ${balance}`);
                break;
    case "4" : 
                console.log("exited");
                
                break;

    default :
                console.log("invalid input");
                break;
                
}

console.log("Task 8 - Cricket Score");

let score=[10,25,40,60,80,100];

let lowest = score[0];
let highest = score[0];
let sum = 0;
for(let a=0;a<score.length;a++){
    if(lowest>score[a])
        lowest=score[a];

    if(highest<score[a])
        highest=score[a];
    sum+=score[a];


        
}
console.log(`Highest score : ${highest}`);
console.log(`Lowest score : ${lowest}`);
console.log(`Total score : ${sum}`);
console.log(`Average score : ${sum/score.length}`);

let age = prompt("Enter your age")
if(age >= 18){
    console.log("Allow movie");
}
else{
    console.log("Not Allowed");
    
}

console.log("Task 10 - Hospital Appointment");

let tokenNo=prompt("Enter token number");

switch(tokenNo){
    case "1" : console.log("Doctor 1"); break;
    case "2" : console.log("Doctor 2"); break;
    case "3" : console.log("Doctor 3"); break;
    default  : console.log("Invalid input"); break;
}

console.log(" Task 11 - Array Method Practice");


let fruits=["Apple","Orange","Banana"];

fruits.push("papaya");
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);

fruits.unshift("Apple");
console.log(fruits);

fruits.splice(2,1)
console.log(fruits);

console.log(fruits.slice(0,1));

console.log("Task 12 - Higher Order Methods");


let employees=[
{name:"A",salary:20000},
{name:"B",salary:35000},
{name:"C",salary:50000},
{name:"D",salary:70000}
];


let addSalary = employees.map((c,i,t)=>{
    return c.salary+=5000;
})

addSalary.map((c)=>{
    console.log(`Salary : ${c}`);
})

let filteredSalary = employees.filter((c)=>{
    return c.salary > 30000;
})

filteredSalary.map((c)=>{
    console.log(`Employee earning more than 30000 : ${c.name}`);
})

let sameSalary =employees.find((c)=>{
    return c.salary === 55000;
})
console.log(sameSalary);

let totalSalary = employees.reduce((acc,c)=>{
    return acc + c.salary;
},0);
console.log(`Total salary : ${totalSalary}`);

let someEmployee = employees.some((c)=>{
    return c.salary > 60000;
})
console.log(`Is there any employee earning more than 60000 : ${someEmployee}`); 
let everyEmployee = employees.every((c)=>{
    return c.salary > 15000;
})
console.log(`Is every employee earning more than 15000 : ${everyEmployee}`);

console.log("Task 13 - String Practice");

let company=" Stackly IT ";

console.log(company.toUpperCase());
console.log(company.toLowerCase());
console.log(company.trim());
console.log(company.replace("IT","Software"));
console.log(company.includes("Stackly"));
console.log(company.split(" "));

console.log(" Task 14 - Digital Clock");

let time = setInterval(()=>{
    let date = new Date();
    console.log(date.toLocaleTimeString());


},1000)

setTimeout(()=>{
    console.log("Time's up");
    clearInterval(time);
},3000)
let api = "https://fakestoreapi.com/products";
fetch(api)
  .then((response) => {return response.json()})
  .then((products) => {

    console.log("Product Titles:");
    products.forEach(product => console.log(product.title));


    console.log("\nPrices:");
    products.forEach(product => console.log(product.price));

    console.log("\nProducts costing more than ₹100:");
    products.filter(product => product.price > 100)
    .forEach(product => console.log(product));

    console.log("\nTotal Products:");
    console.log(products.length);
    console.log("\nCategory Names:");
    products.forEach(product => console.log(product.category));

  })
  .catch((error) => {
    console.error("Error:", error)
});


