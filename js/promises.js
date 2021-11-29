const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("We waited 2 seconds until setTimeout was finished")
        //resolve ({user:"Keri"})
        reject(new Error("This is an error"))
    }, 2000);
});

promise.then( a => {
    console.log(a.user);
}).catch(c => {
    console.log(c.message);
})