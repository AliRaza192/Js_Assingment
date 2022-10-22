// Question No 15


let newGuest = [" Owais ", " Sadiq " , " Hamza "]

for(let a of newGuest){
    console.log(`${newGuest}, I would invite you Dinner`)
}
console.log(`${newGuest[newGuest.length -1]} I can't make the Dinner, `)

newGuest.pop();
newGuest.push("Raees")

console.log(`${newGuest}, I would invite you Dinner`)
