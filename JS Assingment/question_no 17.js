// Question No 17


let newGuest = [" Owais ", " Sadiq " , " Hamza "]
newGuest.unshift("Sameer");

let addNew = newGuest.length / 2;
newGuest.splice(addNew, 0, "Ali");
newGuest.push("Hasan")

for (let a of newGuest){
    console.log(`${a}, I would invite you Dinner`)
}

console.log("Only two guests invited.")

while (newGuest.length > 2){
    let cencel =newGuest[newGuest.length -1]
    console.log(`${cencel} I Can Not Invited for You Into Dinner.`)
    newGuest.pop();
}

for(let a of newGuest){
    console.log(`${a} I Will For You Into Dinner.`)
}
