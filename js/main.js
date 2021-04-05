// This exercise was done after watching:  
// a guy named Code Express
// https://youtu.be/xzEzIfkq0-I

//Get Btn
document.getElementById('myBtn').addEventListener('click', getData)

function getData() {
    // console.log('test')


    // Get API
    fetch('https://randomuser.me/api/?results=3')
        .then(response => response.json())
        .then(data => {
            // console.log(data);

            let author = data.results;
            console.log(author);

            // Get Data Value
            let output = "<h2><center>User data retrieved from Randomuser API</center></h2>";

            // Get Data Loop Through
            author.forEach(lists => {
                output += `
                <div class="container">
                <div class="card mt-4 bg-light">
                    <ul class="list-group">
                        <li class="list-group-item"><h2>Name:  ${lists.name.first} ${lists.name.last}</h2></li>
                        <li class="list-group-item"><img src="${lists.picture.large}"/></li>
                        <li class="list-group-item"><h2>Cell Phone: ${lists.cell}</h2></li>
                        <li class="list-group-item"><h2>Date of Birth: ${lists.dob.date}</h2></li>
                        <li class="list-group-item"><h2>Age: ${lists.dob.age}</h2></li>
                        <li class="list-group-item"><h2>Email: ${lists.email}</h2></li>
                        <li class="list-group-item"><h2>Gender: ${lists.gender}</h2></li>
                        <li class="list-group-item"><h2>City: ${lists.location.city}</h2></li>
                        <li class="list-group-item"><h2>Country: ${lists.location.country}</h2></li>
                        <li class="list-group-item"><h2>Postal Code: ${lists.location.postcode}</h2></li>
                        </ul>
                </div>
                </div>
                `;
            });

            document.getElementById('output').innerHTML = output;



        });
}