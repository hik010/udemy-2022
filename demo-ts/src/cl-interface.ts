enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

type Person = {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
};

const person = {
  name: 'hyo',
  age: 30,
  hobbies: ['sports', 'cooking'],
  //role: [2,'author'] //tuple, inference not enough
  role: Role.ADMIN,
};

console.log(person.name);

if ((person.role = Role.ADMIN)) console.log(person.role);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
