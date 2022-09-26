enum Role {
  ADMIN, //0
  READ_ONLY, //1
  AUTHOR, //2
}

const person1: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: 'hyo',
  age: 30,
  hobbies: ['cooking', 'hiking'],
  role: Role.AUTHOR,
};

console.log(person1.role);

// only print name if author
if (person1.role === Role.AUTHOR) console.log(person1.name);

// enum : assign labels to numbers for us (mapped values behind the scenes)



// interface
