// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
// while loop
const collectEmployees = function() {
const inputs = [];
let keepRunning = true;
while(keepRunning){ 
  const firstName = prompt("First Name");
  const lastName = prompt("Last Name");
  const salary = prompt("Salary");
const employee = {
  firstName: firstName, 
  lastName: lastName,
  salary: parseFloat(salary)
}
console.log(inputs);
inputs.push(employee);
keepRunning = confirm("Do you want to add a new employee?");
}
return inputs;
}
addEmployeesBtn.addEventListener("click", collectEmployees);
  // TODO: Get user input to create and return an array of employee objects
  // get user input
  // ask for first name
  // ask for last name
  // ask for salary
  // make employee objects
  // add them to an array
  // My instructor Dan wrote this comment:  MUST RETURN ARRAY OF EMPLOYEE DATA

// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  // My instructor Dan wrote this comment:  get salaries from objects

let totalSalary = 0;
employeesArray.forEach(employee => {
totalSalary += employee.salary;
});
const averageSalary = totalSalary / employeesArray.length;
console.log("Average Salary: " + averageSalary.toFixed(2));
}
// Select a random employee
const getRandomEmployee = function(employeesArray) {
  if (employeesArray.length === 0) {
    console.log("No employees");
    return;
  }
  const randomIndex = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomIndex];
  console.log("Random Employee");
  console.log(randomEmployee);
  // TODO: Select and display a random employee
  // My instructor Dan wrote this comment: don't forget: Math.floor(Math.random()*# of employees)
}
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
