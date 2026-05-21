let students = [
  { id: 1, name: 'Arun Kumar',   age: 20, department: 'Computer Science', grade: 'A' },
  { id: 2, name: 'Priya Sharma', age: 21, department: 'Electronics',       grade: 'B' },
  { id: 3, name: 'Ravi Raj',     age: 19, department: 'Mechanical',        grade: 'A' },
];

let nextId = 4;

module.exports = { students, getNextId: () => nextId++ };