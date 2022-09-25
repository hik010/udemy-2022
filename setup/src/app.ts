type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee; //must have both if object types

type Combinable = string | number;
type Numeric = number | boolean;
type Universal = Combinable & Numeric; //will just be the type that is in common

// can also use interface for this
// interface Admin {
//   name: string;
//   privileges: string[];
// }

// interface Employee {
//   name: string;
//   startDate: Date;
// }

let n1: Universal = 1;

// interface ElevatedEmployee extends Employee, Admin {}

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('name' + emp.name);

  if ('privileges' in emp) {
    console.log('privilege' + emp.privileges);
  }
}

console.log(e1);

// type guards
function add1(a: Combinable, b: Combinable) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
