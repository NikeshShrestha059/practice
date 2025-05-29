const students =[
  {
    firstName: "John",
    lastName: "Doe",
    age: 50,
  },
    {
    firstName: "Ram",
    lastName: "Lama",
    age: 40,
  },
  {
    firstName: "Bikash",
    lastName: "Rai",
    age: 30,
  }
];
students.forEach(function(student){
  for (const key in student) {
    console.log(`${key}= ${student[key]}`);
  }
});






