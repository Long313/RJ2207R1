class Employee{
    constructor(code, lastName, firstName,salary){
        this.code = code;
        this.lastName = lastName;
        this.firstName = firstName;
        this.salary = salary;
    }
    getFullName(){
        return this.firstName + this.lastName;
    }
    getSalary() {
        return this.salary;
    }
    getAnualSalary() {
        return this.salary * 12;
    }
    raiseSalary(percent) {
        return this.salary += percent/100*this.salary;
    }
}

let employee = new Employee('NV123', 'Nam', 'Nguyen Van', 2000);
// console.log(employee.getFullName());
// console.log(employee.getSalary());
// console.log(employee.getAnualSalary());
// console.log(employee.raiseSalary(10));
// console.log(employee.getSalary());

class ParttimeEmployee extends Employee {
    constructor(code, lastName, firstName,salary,hourlyWage){
        super(code, lastName, firstName,salary)
        this.hourlyWage = hourlyWage;
        this.attendence = [];
    }
    checkAttendence(month,noOfHours) {
        if(month > 0 && month < 13) {
            this.attendence[month] = noOfHours;
        } else {
            this.attendence = 0;
        }
    }
    getSalary(month = (new Date).getMonth +1 ) {
        let noOfHours = this.attendence[month];
        return noOfHours > 0 ? noOfHours*this.hourlyWage : 0; 
    }
    getAnualSalary() {
        let sum = 0;
        this.attendence.map(function(month){
            sum +=month;
        })
        return sum*this.hourlyWage;
    }
    raiseSalary(percent) {
        return this.hourlyWage += this.hourlyWage*percent/100;
    }
}
let lee = new ParttimeEmployee('NV123', 'Nam', 'Nguyen Van', 1000,50);
lee.checkAttendence(3,10);
lee.checkAttendence(8,20);
console.log(lee.getSalary(3));
console.log(lee.getSalary(8));
console.log(lee.getAnualSalary());
console.log(lee.raiseSalary(10));
