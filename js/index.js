// This exercise is from Web Dev Simplified and this exercise:
// https://youtu.be/cuEtnrL9-H0

// Just testing that the index.js file is being read properly
<<<<<<< HEAD
console.log('This printed from index.js!');
=======
// console.log('Hello World!');
>>>>>>> pullrequest1

fetch('https://reqres.in/api/users')
    .then(res => res.json())
    .then(data => console.log(data))