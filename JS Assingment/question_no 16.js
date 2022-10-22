// Question No 16


let newGuest = [" Owais ", " Sadiq " , " Hamza "]
newGuest.unshift("Sameer");

let addNew = newGuest.length / 2;
newGuest.splice(addNew, 0, "Ali");
newGuest.push("Hasan")

for (let a of newGuest){
    console.log(`${a}, I would invite you Dinner`)
}
