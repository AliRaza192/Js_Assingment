// Question No 43



let magician_name = ["Lance Burton", "Ricky Jay", "Mark Wilson"]

function magician_show (magician){
    magician.forEach((name) => console.log(name));

    let new_magician = magician.map((name) => `${name} Geart Magician`)
    console.log({new_magician})
}

magician_show(magician_name);