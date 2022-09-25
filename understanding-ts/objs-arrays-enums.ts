// const person: {
//   name: string;
//   age: number;
// }

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: 'hyo',
  age: 30,
  hobbies: ['sports', 'cooking'],
  role: Role.ADMIN,
};

let favActivities: string[];
favActivities = ['Sports'];

console.log(person.name);

if ((person.role = Role.ADMIN)) console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
