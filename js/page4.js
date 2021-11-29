function fetchData() {
    fetch('https://reqres.in/api/users').then(response => {
        if(!response.ok){
            throw Error ("This is an error!");
        }
        return response.json();
    }).then(data => {
        console.log(data.data);
        const html = data.data.map(user => {
            return `
            <div class="user">
            <img src="${user.avatar}" id="picture" alt="${user.first_name}">
            <h4>Name: ${user.first_name} ${user.last_name} </h4>
            <h4>Email: ${user.email}</h4>
            </div>
            `                
        }).join('');
        const d1 = document.getElementById('anything');
        d1.insertAdjacentHTML('afterend', html);
    }).catch(error => {
        console.log(error);
    });
}

fetchData();