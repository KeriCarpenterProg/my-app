// This exercise is from Web Dev Simplified and this exercise:
// https://youtu.be/cuEtnrL9-H0

// Just testing that the index.js file is being read properly
// console.log('Hello World!');

fetch('https://reqres.in/api/users')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('Not Successful')
        }
    }
        )
    .then(res => res.json())
    .then(data => console.log(data))