<<<<<<< HEAD
console.log('Hello World!');
fetch('https://reqres.in/api/users/6')
    .then(res => {
        if (res.ok) {
            console.log('SUCCESS')
        } else {
            console.log('Not Successful')
        }
    }
        )
=======
// This exercise is from Web Dev Simplified and this exercise:
// https://youtu.be/cuEtnrL9-H0

// Just testing that the index.js file is being read properly
console.log('This printed from index.js!');

fetch('https://reqres.in/api/users')
    .then(res => res.json())
>>>>>>> 23187f94ba239ad56f55ff1ab8ab880413e84c37
    .then(data => console.log(data))