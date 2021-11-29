
// The video that I used.  https://youtu.be/_8gHHBlbziw

console.log("Start");

function loginUser(email, password) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("This should wait about 5 seconds before printing");
            resolve( { userEmail: email});
        }, 5000);
    })
 
}

function getUserVideos(email) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("This should wait an additional 2 seconds before printing")
            resolve( ["Keris Videos 1", "Keri's Videos 2", "Keri's Videos 3"]);
        }, 2000)
    })
}

function videoDetails(video) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            console.log("This should wait an additional 3 seconds before printing")
            resolve(video);
        }, 3000);
    })
}

// Using promises  call this function, wait and then do this next thing, wait and then do this next thing.
// loginUser("AAAAA","BBBBB")
// .then( user => getUserVideos(user.email))
// .then( video => videoDetails(video[2]) )
// .then( detail => console.log(detail));

// using a syntactic sugar way of writing Promises
const yt = new Promise(resolve => {
    setTimeout(() => {
        console.log("Wait for 4 seconds.  I just got stuff from you tube.");
        resolve({videos: ["Video 1", "Video 2", "Video 3", "Video 4", "Video 5"]});
    }, 4000);
});

const facebook = new Promise(resolve => {
    setTimeout(() => {
        console.log("Wait for 1 second.  I just got a name from Face Book.");
        resolve({ name: "Stuart"});
    }, 1000);
});

// Promise.all means wait until all of these things have come back and .then do the next thing
// Promise.all([yt, facebook]).then(result => console.log(result));

loginUser("ed", "bumba")
.then(user => getUserVideos(user.email))
.then(videos => videoDetails(videos[2]))
.then( detail => console.log(detail));

// Use Async await
async function displayUser() {
    try {
        const userLoggedIn = await loginUser("Keri", "Keris Password");
        const video = await getUserVideos(userLoggedIn.userEmail);
        const detail = await videoDetails(video[1]);
        console.log(detail);
    } catch(err) {
        console.log("That isn't working.  You'll have to triage.  Problem is in the displayUser function.")
    }

}

displayUser();

console.log("Finish");
