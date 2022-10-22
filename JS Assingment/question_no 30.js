// Question No 30

let username = ["Admin", "AliRaza", "M Owais", "M Akif"]

for(let i = 0; i < username.length; i++){
    if(username[i] == "Admin"){
        console.log(`Hello ${username[i]}, would you like to see a status report?`)
    }
    else{
        console.log(` ${username[i]} thank you for logging in again.`)
    }
};
