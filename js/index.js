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
    .then(data => console.log(data))