// Question No 32

let currentUser = ["Hamza", "Moin", "Mohsin", "Adnan", "Rizwan"];
let newUser = ["ALi", "Raza", "Moin", "Farooq", "Hamza"]

newUser.forEach((user) =>{
    if(currentUser.includes(user)){
        console.log(`${user} has already been used. `)
    }
    else{
        console.log(`${user} Name is Available. `)
    }
})
